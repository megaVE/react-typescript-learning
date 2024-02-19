import { type PropsWithChildren } from "react"

interface HintsBoxProps extends PropsWithChildren {
  mode: "hint"
}

interface WarningBoxProps extends PropsWithChildren {
  mode: "warning"
  severity: "low" | "medium" | "high"
}

type InfoBoxProps = WarningBoxProps | HintsBoxProps

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props
  
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    )
  }

  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>)
}