import { useEffect, useRef, useState } from "react"

import Button from "../common/Button"
import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import AnimatedLine from "../motion/AnimatedLine"
import DigitalMesh from "../motion/DigitalMesh"
import MotionReveal from "../motion/MotionReveal"

const monogramSrc = "/logos/lyken-monogram.svg"
const submitDelay = 650

function createInitialValues(fields) {
  return fields.reduce((values, field) => ({ ...values, [field.name]: "" }), {})
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateContactForm(values, validationMessages) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = validationMessages.nameRequired
  }

  if (!isValidEmail(values.email.trim())) {
    errors.email = validationMessages.emailInvalid
  }

  if (!values.serviceNeeded) {
    errors.serviceNeeded = validationMessages.serviceRequired
  }

  if (!values.message.trim()) {
    errors.message = validationMessages.messageRequired
  }

  return errors
}

function ContactField({ disabled, error, field, onChange, serviceOptions, value }) {
  const errorId = `${field.id}-error`
  const baseClassName =
    "mt-2 min-h-12 w-full border bg-lyken-deep/70 px-4 py-3 text-base text-lyken-text placeholder:text-lyken-text-soft transition-colors duration-200 focus:border-lyken-gold focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-lyken-gold disabled:cursor-not-allowed disabled:border-lyken-gold-line-20 disabled:text-lyken-text-soft disabled:opacity-65"
  const stateClassName = error ? "border-lyken-gold-warm" : "border-lyken-gold-line-30"
  const className = `${baseClassName} ${stateClassName}`
  const fieldProps = {
    "aria-describedby": error ? errorId : undefined,
    "aria-invalid": error ? "true" : "false",
    "aria-required": field.required ? "true" : undefined,
    disabled,
    id: field.id,
    name: field.name,
    onChange,
    required: field.required,
    value,
  }

  return (
    <div className="min-w-0">
      <label className="lyken-text-button block text-lyken-text-muted" htmlFor={field.id}>
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <textarea
          className={`${className} min-h-32 resize-y`}
          placeholder={field.placeholder}
          {...fieldProps}
        />
      ) : null}
      {field.type === "select" ? (
        <select
          className={className}
          {...fieldProps}
        >
          <option disabled value="">
            {field.placeholder}
          </option>
          {serviceOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : null}
      {field.type !== "textarea" && field.type !== "select" ? (
        <input
          className={className}
          placeholder={field.placeholder}
          type={field.type}
          {...fieldProps}
        />
      ) : null}
      {error ? (
        <p className="mt-2 text-sm leading-6 text-lyken-gold-warm" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
}

function Contact({ content }) {
  const contact = content.contact
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [values, setValues] = useState(() => createInitialValues(contact.form.fields))
  const submitTimerRef = useRef(null)
  const isLoading = status === "loading"
  const isSuccess = status === "success"
  const isError = status === "error"

  useEffect(() => () => window.clearTimeout(submitTimerRef.current), [])

  function handleChange(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => {
      if (!currentErrors[name]) return currentErrors

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })

    if (status !== "idle") {
      setStatus("idle")
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.clearTimeout(submitTimerRef.current)

    const nextErrors = validateContactForm(values, content.validation)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle")
      return
    }

    setStatus("loading")

    // Local-only preparation until the official contact integration is approved.
    submitTimerRef.current = window.setTimeout(() => {
      setStatus("success")
    }, submitDelay)
  }

  return (
    <Container
      as="section"
      className="lyken-section-space relative isolate overflow-hidden border-t border-lyken-gold-line-20"
      id={contact.id}
    >
      <AnimatedLine className="absolute left-5 right-5 top-0 md:left-8 md:right-8 lg:left-12 lg:right-12" />
      <DigitalMesh className="hidden md:block" intensity="strong" />

      <div className="lyken-editorial-grid relative z-10 items-start">
        <MotionReveal className="min-w-0 md:col-span-6 lg:col-span-5 lg:row-start-1">
          <SectionLabel>{contact.sectionLabel}</SectionLabel>
          <SectionTitle className="mt-4">{contact.finalCta.title}</SectionTitle>
          <p className="lyken-text-body mt-5 text-lyken-text-muted">{contact.finalCta.text}</p>
        </MotionReveal>

        <MotionReveal
          as="form"
          className="grid min-w-0 gap-5 border border-lyken-gold-line-20 bg-lyken-emerald/60 p-5 shadow-[0_24px_80px_rgb(0_0_0/0.18)] md:col-span-6 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:p-8"
          delay={0.1}
          id={contact.form.id}
          noValidate
          onSubmit={handleSubmit}
        >
          {contact.form.fields.map((field) => (
            <ContactField
              disabled={isLoading}
              error={errors[field.name]}
              field={field}
              key={field.id}
              onChange={handleChange}
              serviceOptions={contact.form.serviceOptions}
              value={values[field.name]}
            />
          ))}

          <p className="text-sm leading-6 text-lyken-text-soft">{contact.form.privacyNote}</p>

          <div aria-live="polite" className="min-h-12">
            {isSuccess ? (
              <p className="border border-lyken-gold-line-30 bg-lyken-deep/45 px-4 py-3 text-sm leading-6 text-lyken-text">
                {contact.form.successMessage}
              </p>
            ) : null}
            {isError ? (
              <p className="border border-lyken-gold-warm/60 bg-lyken-deep/45 px-4 py-3 text-sm leading-6 text-lyken-gold-warm">
                {contact.form.errorMessage}
              </p>
            ) : null}
          </div>

          <Button className="mt-1 min-h-12 w-full sm:w-auto" disabled={isLoading} type="submit">
            {isLoading ? contact.form.loadingLabel : contact.form.submitLabel}
          </Button>
        </MotionReveal>

        <MotionReveal
          className="min-w-0 md:col-span-6 lg:col-span-5 lg:col-start-1 lg:row-start-2"
          delay={0.16}
        >
          <div className="border border-lyken-gold-line-20 bg-lyken-deep/35 p-5 lg:p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="lyken-text-button text-lyken-gold">{contact.directContact.label}</p>
                <p className="lyken-text-body mt-3 text-lyken-text-muted">
                  {contact.directContact.text}
                </p>
              </div>
              <img
                alt=""
                aria-hidden="true"
                className="h-12 w-10 shrink-0 object-contain opacity-10 sm:h-16 sm:w-14"
                src={monogramSrc}
              />
            </div>
            <div className="mt-6 grid gap-3 border-t border-lyken-gold-line-20 pt-5">
              {contact.directContact.items.map((item) => (
                <div
                  className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  key={item.id}
                >
                  <span className="lyken-text-button text-lyken-text-soft">{item.label}</span>
                  <span className="text-sm text-lyken-text-muted sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </Container>
  )
}

export default Contact
