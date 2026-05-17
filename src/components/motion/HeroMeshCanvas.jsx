import { useEffect, useRef } from "react"

const gold = {
  bronze: "142, 104, 48",
  antique: "172, 139, 85",
  champagne: "214, 179, 106",
  pale: "240, 211, 138",
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function smoothPulse(value, width = 0.08) {
  return Math.exp(-Math.pow(value / width, 2))
}

function drawCurvedPath(context, points, startIndex = 0, endIndex = points.length - 1) {
  const start = points[startIndex]

  context.beginPath()
  context.moveTo(start.x, start.y)

  for (let index = startIndex + 1; index <= endIndex; index += 1) {
    const previous = points[index - 1]
    const point = points[index]
    context.quadraticCurveTo(
      previous.x,
      previous.y,
      (previous.x + point.x) / 2,
      (previous.y + point.y) / 2,
    )
  }
}

function HeroMeshCanvas({ isIntroActive = false, shouldReduceMotion = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext("2d", { alpha: true })
    let animationFrame = 0
    let lastFrameAt = 0
    let isVisible = true
    let width = 0
    let height = 0
    let dpr = 1
    let startedAt = performance.now()
    const frameInterval = 1000 / 30

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const maxDpr = viewportWidth >= 1024 ? 1.75 : 1.6
      const minDpr = viewportWidth < 768 ? 1.45 : 1
      dpr = clamp(window.devicePixelRatio || 1, minDpr, maxDpr)
      width = Math.max(1, Math.floor(bounds.width))
      height = Math.max(1, Math.floor(bounds.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const getMeshSize = () => ({
      rows: width < 768 ? 16 : 34,
      columns: width < 768 ? 50 : 110,
    })

    const wavePoint = (u, v, time, layer = 0) => {
      const compact = width < 768
      const focal = smoothPulse(u - 0.76, 0.16)
      const rowPhase = (v - 0.5) * 2
      const depth = 0.52 + u * 0.62 + layer * 0.08
      const originX = compact ? width * -0.32 : width * -0.23
      const spanX = compact ? width * 1.82 : width * 1.58
      const baseY = compact ? height * 0.73 : height * 0.76

      const currentA = time * (0.36 + layer * 0.03)
      const currentB = time * (0.48 - layer * 0.03)
      const currentC = time * 0.28
      const roll =
        Math.sin(u * 5.8 - time * 0.52 + layer * 0.9) * 0.72 +
        Math.sin(u * 9.4 + time * 0.22 + rowPhase * 0.25) * 0.28
      const twistWave =
        Math.sin(u * 7.4 - currentB + layer * 1.2 + rowPhase * 0.44) * 0.74 +
        Math.sin(u * 13.8 + currentA + rowPhase * 0.92) * 0.34 +
        Math.sin(u * 4.2 + v * 8.8 - currentC) * 0.22
      const twist = (twistWave + roll * 0.72) * Math.sin(v * Math.PI) * (0.5 + focal * 1.08)
      const tension = clamp(Math.abs(twist) * 0.78 + focal * 0.72, 0, 1)
      const foldLine = 0.66 - u * 0.42 + Math.sin(u * 5.2 - time * 0.32) * 0.035
      const foldDistance = Math.abs(v - foldLine)
      const fold = smoothPulse(foldDistance, 0.095) * (0.43 + focal * 1)
      const twistAngle = roll * (0.86 + focal * 1.02) + fold * 1
      const slowCurrent =
        Math.sin(time * 0.26 + layer * 1.7 + rowPhase * 0.85) * width * 0.017 +
        Math.sin(time * 0.17 + u * 3.4 + v * 2.8) * width * 0.013
      const sideDrift =
        Math.sin(u * 5.8 + v * 4.6 + time * 0.26 + layer) * width * 0.013 * depth +
        twist * width * (compact ? 0.046 : 0.068) +
        rowPhase * Math.sin(twistAngle) * width * (compact ? 0.032 : 0.048)

      const x = originX + u * spanX + slowCurrent + sideDrift
      const diagonalLift = u * (compact ? height * 0.1 : height * 0.18)
      const rightRise = Math.pow(u, 1.48) * (compact ? height * 0.28 : height * 0.39)
      const crest = focal * (compact ? height * 0.1 : height * 0.16) + fold * height * 0.08
      const apparentWidth = 0.58 + Math.cos(twistAngle) * 0.32 + fold * 0.18
      const transverse =
        rowPhase *
        height *
        (compact ? 0.17 : 0.27) *
        (0.74 + u * 0.36) *
        clamp(apparentWidth, 0.32, 1.18) *
        (1 - focal * 0.2 + Math.abs(twist) * 0.28)
      const surfaceBend = Math.sin(v * Math.PI) * height * (compact ? 0.14 : 0.22)

      const longSwell =
        Math.sin(u * 5.6 + time * 0.25 + layer * 0.9 + rowPhase * 0.48) * height * 0.064
      const secondarySwell =
        Math.sin(u * 10.4 - time * 0.22 + v * 3.6 + layer * 1.4) * height * 0.034
      const microUndulation =
        Math.sin(u * 21.5 + v * 8.2 + time * 0.38 + layer * 0.8) * height * 0.008
      const irregularCrest =
        Math.sin(u * 3.2 + v * 7.1 + time * 0.11) * focal * height * 0.036
      const foldShadow =
        twist * rowPhase * height * (compact ? 0.052 : 0.078) +
        Math.sin(twistAngle) * rowPhase * height * (compact ? 0.044 : 0.066)

      const y =
        baseY +
        transverse -
        diagonalLift -
        rightRise +
        crest -
        surfaceBend * Math.sin(u * Math.PI * 1.15 + time * 0.13 + rowPhase * 0.18) +
        longSwell +
        secondarySwell +
        microUndulation +
        irregularCrest +
        foldShadow -
        fold * height * (compact ? 0.04 : 0.07)

      const energy = clamp(
        Math.pow(u, 1.18) * (0.22 + Math.sin(v * Math.PI) * 0.58) + tension * 0.58 + fold * 0.64,
        0,
        1,
      )

      return { x, y, depth, energy, focal, fold, foldLine, tension, twist, u, v }
    }

    const createPoints = (time, layer = 0) => {
      const { rows, columns } = getMeshSize()

      return Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, column) =>
          wavePoint(column / (columns - 1), row / (rows - 1), time, layer),
        ),
      )
    }

    const drawBackground = () => {
      const base = context.createLinearGradient(0, 0, width, height)
      base.addColorStop(0, "#03100F")
      base.addColorStop(0.45, "#061312")
      base.addColorStop(1, "#071B18")
      context.fillStyle = base
      context.fillRect(0, 0, width, height)

      const depthWash = context.createLinearGradient(width * 0.42, 0, width, height)
      depthWash.addColorStop(0, "rgba(10, 23, 22, 0)")
      depthWash.addColorStop(0.58, "rgba(10, 23, 22, 0.1)")
      depthWash.addColorStop(1, "rgba(3, 16, 15, 0.18)")
      context.fillStyle = depthWash
      context.fillRect(0, 0, width, height)
    }

    const drawMeshLayer = (points, alphaScale = 1) => {
      const rows = points.length
      const columns = points[0].length

      context.save()
      context.globalCompositeOperation = "screen"
      context.lineCap = "round"
      context.lineJoin = "round"

      for (let row = 0; row < rows; row += 1) {
        const rowEnergy = Math.sin((row / (rows - 1)) * Math.PI)
        drawCurvedPath(context, points[row])

        const gradient = context.createLinearGradient(width * 0.12, 0, width, 0)
        gradient.addColorStop(0, `rgba(${gold.bronze}, ${0.018 * alphaScale})`)
        gradient.addColorStop(0.34, `rgba(${gold.antique}, ${0.13 * alphaScale})`)
        gradient.addColorStop(0.66, `rgba(${gold.champagne}, ${0.34 * alphaScale * rowEnergy})`)
        gradient.addColorStop(0.86, `rgba(${gold.pale}, ${0.3 * alphaScale * rowEnergy})`)
        gradient.addColorStop(1, `rgba(${gold.bronze}, ${0.06 * alphaScale})`)
        context.strokeStyle = gradient
        context.lineWidth = 0.28 + rowEnergy * 0.16
        context.stroke()
      }

      for (let column = 0; column < columns; column += width < 768 ? 3 : 3) {
        context.beginPath()
        let hasStarted = false

        for (let row = 0; row < rows; row += 1) {
          const point = points[row][column]
          const previous = row > 0 ? points[row - 1][column] : null

          if (!previous || Math.abs(point.x - previous.x) > width * 0.08 || Math.abs(point.y - previous.y) > height * 0.16) {
            if (hasStarted) {
              context.stroke()
              context.beginPath()
            }
            context.moveTo(point.x, point.y)
            hasStarted = true
            continue
          }

          context.lineTo(point.x, point.y)
        }

        const u = column / (columns - 1)
        const focal = smoothPulse(u - 0.78, 0.14)
        context.strokeStyle = `rgba(${focal > 0.2 ? gold.champagne : gold.antique}, ${
          (0.06 + u * 0.12 + focal * 0.18) * alphaScale
        })`
        context.lineWidth = 0.28 + focal * 0.12
        if (hasStarted) {
          context.stroke()
        }
      }

      context.restore()
    }

    const drawFoldEnergyPath = (time, points) => {
      const rows = points.length
      const columns = points[0].length
      const foldPoints = points[Math.floor(rows * 0.48)]

      context.save()
      context.globalCompositeOperation = "screen"
      context.lineCap = "round"
      context.lineJoin = "round"
      drawCurvedPath(context, foldPoints, Math.floor(columns * 0.18), Math.floor(columns * 0.94))

      const base = context.createLinearGradient(width * 0.14, 0, width, 0)
      base.addColorStop(0, `rgba(${gold.bronze}, 0)`)
      base.addColorStop(0.42, `rgba(${gold.antique}, 0.16)`)
      base.addColorStop(0.72, `rgba(${gold.champagne}, 0.42)`)
      base.addColorStop(0.88, `rgba(${gold.pale}, 0.24)`)
      base.addColorStop(1, `rgba(${gold.bronze}, 0)`)
      context.strokeStyle = base
      context.lineWidth = 0.78
      context.stroke()

      const travel = 0.32 + ((time * 0.038) % 1) * 0.54
      for (let index = Math.floor(columns * 0.18); index < Math.floor(columns * 0.94); index += 1) {
        const u = index / (columns - 1)
        const point = foldPoints[index]
        const nextPoint = foldPoints[index + 1]
        const flow = smoothPulse(u - travel, 0.095)
        const focal = smoothPulse(point.u - 0.76, 0.18)
        const intensity = (flow * 0.72 + focal * 0.38) * point.energy

        if (intensity < 0.08) {
          continue
        }

        context.beginPath()
        context.moveTo(point.x, point.y)
        context.lineTo(nextPoint.x, nextPoint.y)
        context.strokeStyle = `rgba(${intensity > 0.42 ? gold.pale : gold.champagne}, ${clamp(
          0.12 + intensity * 0.52,
          0,
          0.72,
        )})`
        context.lineWidth = 0.32 + intensity * 0.5
        context.stroke()
      }
      context.restore()
    }

    const drawEnergyFlow = (time, points) => {
      const rows = points.length
      const columns = points[0].length
      const selectedRows = [
        Math.floor(rows * 0.38),
        Math.floor(rows * 0.48),
        Math.floor(rows * 0.58),
      ]

      context.save()
      context.globalCompositeOperation = "screen"
      context.lineCap = "round"
      context.lineJoin = "round"

      selectedRows.forEach((row, index) => {
        const path = points[row]
        const travel = (time * (0.085 + index * 0.012) + index * 0.18) % 1
        const center = 0.28 + travel * 0.62

        for (let segment = 0; segment < columns - 2; segment += 1) {
          const u = segment / (columns - 1)
          const point = path[segment]
          const nextPoint = path[segment + 1]
          const flow = smoothPulse(u - center, 0.075)
          const focal = smoothPulse(u - 0.78, 0.18)
          const foldStrike = smoothPulse(point.twist, 0.32) * 0.18 + point.tension
          const lightning = smoothPulse(u - (0.74 + Math.sin(time * 0.58 + index) * 0.08), 0.035)
          const intensity = flow * (0.28 + focal * 1.12 + lightning * 0.76) * point.energy * foldStrike

          if (intensity < 0.025) {
            continue
          }

          context.beginPath()
          context.moveTo(point.x, point.y)
          context.lineTo(nextPoint.x, nextPoint.y)
          context.strokeStyle = `rgba(${intensity > 0.38 ? gold.pale : gold.champagne}, ${
            0.14 + intensity * 0.58
          })`
          context.lineWidth = 0.26 + intensity * 0.58
          context.stroke()
        }
      })

      drawFoldEnergyPath(time, points)

      const lowerRibbon = points[Math.floor(rows * 0.68)]
      drawCurvedPath(context, lowerRibbon, Math.floor(columns * 0.22), Math.floor(columns * 0.9))
      const trail = context.createLinearGradient(width * 0.18, 0, width, 0)
      trail.addColorStop(0, `rgba(${gold.bronze}, 0)`)
      trail.addColorStop(0.4, `rgba(${gold.antique}, 0.1)`)
      trail.addColorStop(0.72, `rgba(${gold.champagne}, 0.34)`)
      trail.addColorStop(0.88, `rgba(${gold.pale}, 0.22)`)
      trail.addColorStop(1, `rgba(${gold.bronze}, 0)`)
      context.strokeStyle = trail
      context.lineWidth = 0.52
      context.stroke()

      context.restore()
    }

    const drawHazeAndVignette = () => {
      const vignette = context.createRadialGradient(
        width * 0.56,
        height * 0.5,
        Math.min(width, height) * 0.22,
        width * 0.56,
        height * 0.5,
        Math.max(width, height) * 0.78,
      )
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)")
      vignette.addColorStop(0.68, "rgba(0, 0, 0, 0.06)")
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.48)")
      context.fillStyle = vignette
      context.fillRect(0, 0, width, height)
    }

    const renderFrame = (now) => {
      const elapsed = shouldReduceMotion || isIntroActive ? 18 : (now - startedAt) / 1000

      context.clearRect(0, 0, width, height)
      drawBackground()

      const speedScale = width < 768 ? 1.65 : 1
      const backgroundPoints = createPoints(elapsed * 0.14 * speedScale - 0.7, 1)
      const foregroundPoints = createPoints(elapsed * 0.22 * speedScale, 0)

      drawMeshLayer(backgroundPoints, 0.42)

      drawMeshLayer(foregroundPoints, 1.65)
      drawEnergyFlow(elapsed, foregroundPoints)
      drawHazeAndVignette()
    }

    const draw = (now) => {
      if (!isVisible) {
        animationFrame = window.requestAnimationFrame(draw)
        return
      }

      if (shouldReduceMotion || isIntroActive || now - lastFrameAt >= frameInterval) {
        lastFrameAt = now
        renderFrame(now)
      }

      if (!shouldReduceMotion && !isIntroActive) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.01 },
    )

    resize()
    observer.observe(canvas)
    window.addEventListener("resize", resize)
    animationFrame = window.requestAnimationFrame((now) => {
      startedAt = now
      draw(now)
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
      window.removeEventListener("resize", resize)
    }
  }, [isIntroActive, shouldReduceMotion])

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      ref={canvasRef}
    />
  )
}

export default HeroMeshCanvas
