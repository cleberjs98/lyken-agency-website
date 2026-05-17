import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const root = process.cwd()
const frameDir = path.join(root, "tmp", "hero-video-frames")
const pngFrameDir = path.join(root, "tmp", "hero-video-png")
const width = 1280
const height = 720
const fps = 24
const duration = 6
const frameCount = fps * duration

fs.rmSync(frameDir, { force: true, recursive: true })
fs.rmSync(pngFrameDir, { force: true, recursive: true })
fs.mkdirSync(frameDir, { recursive: true })
fs.mkdirSync(pngFrameDir, { recursive: true })
fs.mkdirSync(path.join(root, "public", "videos"), { recursive: true })
fs.mkdirSync(path.join(root, "public", "images"), { recursive: true })

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function pulse(value, widthValue = 0.08) {
  return Math.exp(-((value / widthValue) ** 2))
}

function point(u, v, t, layer = 0) {
  const rowPhase = (v - 0.5) * 2
  const focal = pulse(u - 0.76, 0.16)
  const foldLine = 0.66 - u * 0.42 + Math.sin(u * 5.2 - t * 0.22) * 0.032
  const fold = pulse(Math.abs(v - foldLine), 0.09) * (0.46 + focal * 0.9)
  const roll =
    Math.sin(u * 5.8 - t * 0.34 + layer * 0.9) * 0.68 +
    Math.sin(u * 9.4 + t * 0.16 + rowPhase * 0.22) * 0.26
  const twistWave =
    Math.sin(u * 7.2 - t * 0.32 + layer * 1.2 + rowPhase * 0.42) * 0.68 +
    Math.sin(u * 13.4 + t * 0.24 + rowPhase * 0.86) * 0.3
  const twist = (twistWave + roll * 0.76) * Math.sin(v * Math.PI) * (0.48 + focal * 1.02)
  const twistAngle = roll * (0.82 + focal) + fold
  const x =
    width * -0.2 +
    u * width * 1.56 +
    Math.sin(t * 0.18 + rowPhase * 0.8 + layer) * width * 0.014 +
    twist * width * 0.064 +
    rowPhase * Math.sin(twistAngle) * width * 0.052
  const transverse =
    rowPhase *
    height *
    0.27 *
    (0.74 + u * 0.36) *
    clamp(0.6 + Math.cos(twistAngle) * 0.3 + fold * 0.15, 0.36, 1.14)
  const y =
    height * 0.76 +
    transverse -
    u * height * 0.16 -
    Math.pow(u, 1.48) * height * 0.38 +
    focal * height * 0.16 +
    fold * height * 0.04 -
    Math.sin(v * Math.PI) * height * 0.21 * Math.sin(u * Math.PI * 1.12 + t * 0.1) +
    Math.sin(u * 5.4 + t * 0.22 + layer * 0.9 + rowPhase * 0.45) * height * 0.06 +
    Math.sin(u * 10.2 - t * 0.18 + v * 3.5 + layer * 1.2) * height * 0.03 +
    twist * rowPhase * height * 0.072

  return { x, y, energy: clamp(Math.pow(u, 1.15) * 0.35 + focal * 0.5 + fold * 0.55, 0, 1) }
}

function pathFrom(points) {
  const [first, ...rest] = points
  let d = `M${first.x.toFixed(2)} ${first.y.toFixed(2)}`

  rest.forEach((current, index) => {
    const previous = points[index]
    d += ` Q${previous.x.toFixed(2)} ${previous.y.toFixed(2)} ${((previous.x + current.x) / 2).toFixed(2)} ${((previous.y + current.y) / 2).toFixed(2)}`
  })

  return d
}

function frameSvg(frame) {
  const t = (frame / frameCount) * Math.PI * 2
  const rows = 46
  const columns = 132
  const grid = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, column) =>
      point(column / (columns - 1), row / (rows - 1), t, 0),
    ),
  )

  const horizontal = grid
    .map((row, rowIndex) => {
      const rowEnergy = Math.sin((rowIndex / (rows - 1)) * Math.PI)
      const opacity = 0.08 + rowEnergy * 0.26
      const stroke = rowEnergy > 0.45 ? "url(#meshGold)" : "rgba(172,139,85,0.22)"
      return `<path d="${pathFrom(row)}" fill="none" stroke="${stroke}" stroke-width="${(0.42 + rowEnergy * 0.14).toFixed(2)}" stroke-opacity="${opacity.toFixed(3)}" stroke-linecap="round" stroke-linejoin="round"/>`
    })
    .join("")

  const vertical = []
  for (let column = 0; column < columns; column += 3) {
    const columnPoints = grid.map((row) => row[column])
    const u = column / (columns - 1)
    const focal = pulse(u - 0.76, 0.16)
    vertical.push(
      `<path d="${pathFrom(columnPoints)}" fill="none" stroke="rgba(214,179,106,${(0.08 + u * 0.18 + focal * 0.22).toFixed(3)})" stroke-width="${(0.34 + focal * 0.16).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round"/>`,
    )
  }

  const ridge = grid[Math.floor(rows * 0.48)]
  const energyCenter = 0.32 + ((frame / frameCount) % 1) * 0.54
  const energy = []
  for (let index = Math.floor(columns * 0.18); index < Math.floor(columns * 0.94); index += 1) {
    const u = index / (columns - 1)
    const current = ridge[index]
    const next = ridge[index + 1]
    const intensity = (pulse(u - energyCenter, 0.1) * 0.8 + pulse(u - 0.76, 0.17) * 0.44) * current.energy

    if (intensity > 0.06) {
      energy.push(
        `<path d="M${current.x.toFixed(2)} ${current.y.toFixed(2)} L${next.x.toFixed(2)} ${next.y.toFixed(2)}" stroke="rgba(240,211,138,${clamp(0.2 + intensity * 0.72, 0, 0.92).toFixed(3)})" stroke-width="${(0.68 + intensity * 1.4).toFixed(2)}" stroke-linecap="round"/>`,
      )
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#03100F"/>
      <stop offset="0.45" stop-color="#061312"/>
      <stop offset="1" stop-color="#071B18"/>
    </linearGradient>
    <linearGradient id="meshGold" x1="0" x2="1">
      <stop offset="0" stop-color="#8E6830" stop-opacity="0.08"/>
      <stop offset="0.48" stop-color="#AC8B55" stop-opacity="0.36"/>
      <stop offset="0.74" stop-color="#D6B36A" stop-opacity="0.74"/>
      <stop offset="0.92" stop-color="#F0D38A" stop-opacity="0.48"/>
      <stop offset="1" stop-color="#8E6830" stop-opacity="0.1"/>
    </linearGradient>
    <radialGradient id="vignette" cx="55%" cy="50%" r="72%">
      <stop offset="0" stop-color="#000" stop-opacity="0"/>
      <stop offset="0.68" stop-color="#000" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.58"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="1.1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="rgba(3,16,15,0.16)"/>
  <g opacity="0.35" transform="translate(0 16)">${horizontal}</g>
  <g filter="url(#softGlow)">${horizontal}${vertical}</g>
  <g filter="url(#softGlow)">${energy.join("")}</g>
  <rect width="100%" height="100%" fill="url(#vignette)"/>
</svg>`
}

for (let frame = 0; frame < frameCount; frame += 1) {
  const frameName = String(frame).padStart(4, "0")
  const svg = frameSvg(frame)
  fs.writeFileSync(path.join(frameDir, `frame-${frameName}.svg`), svg)
  await sharp(Buffer.from(svg)).png({ compressionLevel: 0 }).toFile(
    path.join(pngFrameDir, `frame-${frameName}.png`),
  )
}

console.log(`Rendered ${frameCount} SVG/PNG frames to ${frameDir}`)
