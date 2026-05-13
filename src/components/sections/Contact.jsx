import { useState } from "react"

import Button from "../common/Button"
import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import AnimatedLine from "../motion/AnimatedLine"
import DigitalMesh from "../motion/DigitalMesh"
import MotionReveal from "../motion/MotionReveal"

function ContactField({ field, serviceOptions, validationMessages }) {
  const baseClassName =
    "mt-2 w-full border border-lyken-gold-line-30 bg-lyken-deep/55 px-4 py-3 text-lyken-text placeholder:text-lyken-text-soft focus:border-lyken-gold focus:outline-none"
  const validationMessage = field.validationKey ? validationMessages[field.validationKey] : ""
  const validationProps = validationMessage
    ? {
        onInvalid: (event) => event.currentTarget.setCustomValidity(validationMessage),
        onInput: (event) => event.currentTarget.setCustomValidity(""),
      }
    : {}

  return (
    <label className="block" htmlFor={field.id}>
      <span className="lyken-text-button text-lyken-text-muted">{field.label}</span>
      {field.type === "textarea" ? (
        <textarea
          className={`${baseClassName} min-h-32 resize-y`}
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          {...validationProps}
        />
      ) : null}
      {field.type === "select" ? (
        <select
          className={baseClassName}
          defaultValue=""
          id={field.id}
          name={field.name}
          required={field.required}
          {...validationProps}
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
          className={baseClassName}
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          type={field.type}
          {...validationProps}
        />
      ) : null}
    </label>
  )
}

function Contact({ content }) {
  const contact = content.contact
  const validationMessages = content.validation
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
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
        <MotionReveal className="md:col-span-6 lg:col-span-5">
          <SectionLabel>{contact.sectionLabel}</SectionLabel>
          <SectionTitle className="mt-4">{contact.finalCta.title}</SectionTitle>
          <p className="lyken-text-body mt-5 text-lyken-text-muted">{contact.finalCta.text}</p>
        </MotionReveal>

        {submitted ? (
          <MotionReveal
            aria-live="polite"
            className="flex items-center border border-lyken-gold-line-30 bg-lyken-emerald/45 p-5 md:col-span-6 lg:col-span-7 lg:p-8"
            delay={0.1}
          >
            <p className="lyken-text-body text-lyken-text">
              {contact.form.successMessage}
            </p>
          </MotionReveal>
        ) : (
          <MotionReveal
            as="form"
            className="grid gap-5 border border-lyken-gold-line-20 bg-lyken-emerald/45 p-5 md:col-span-6 lg:col-span-7 lg:p-8"
            delay={0.1}
            id={contact.form.id}
            onSubmit={handleSubmit}
          >
            {contact.form.fields.map((field) => (
              <ContactField
                field={field}
                key={field.id}
                serviceOptions={contact.form.serviceOptions}
                validationMessages={validationMessages}
              />
            ))}
            <Button className="mt-2 w-full sm:w-auto" type="submit">
              {contact.form.submitLabel}
            </Button>
          </MotionReveal>
        )}
      </div>
    </Container>
  )
}

export default Contact
