interface RichTextProps {
  /** Plain text where **double asterisks** mark bold phrases. */
  text: string
}

/**
 * Renders copy with bold phrases without putting HTML in the content files.
 * Bold runs get dir="auto" so a Latin word inside Arabic text keeps its own direction.
 */
export function RichText({ text }: RichTextProps) {
  const parts = text.split(/\*\*(.+?)\*\*/g)

  return (
    <>
      {parts.map((part, i) =>
        // split() with a capture group puts the bold matches at odd indexes
        i % 2 === 1 ? (
          <b key={i} dir="auto">
            {part}
          </b>
        ) : (
          part
        ),
      )}
    </>
  )
}
