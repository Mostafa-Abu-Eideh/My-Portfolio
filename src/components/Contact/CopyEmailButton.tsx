import { useEffect, useState } from 'react'
import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'

interface CopyEmailButtonProps {
  email: string
}

const RESET_AFTER_MS = 2000

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  // Switch the label back after a moment. The cleanup clears the timer if the button unmounts.
  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), RESET_AFTER_MS)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      // Clipboard can be unavailable (old browser, no permission): open the mail app instead.
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button type="button" className="btn" onClick={copyEmail} aria-live="polite">
      {t(copied ? strings.contact.copied : strings.contact.copyEmail)}
    </button>
  )
}
