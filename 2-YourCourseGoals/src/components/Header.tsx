import { PropsWithChildren } from "react"

interface HeaderProps extends PropsWithChildren {
  image: {
    src: string,
    alt: string,
  }
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}