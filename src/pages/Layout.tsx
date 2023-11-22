import Link from "next/link"
import { ReactNode, FC, useEffect } from "react"

export const Layout: FC<{
  children: ReactNode
}> = ({ children }) => {
  useEffect(() => {
    console.log('pages layout mounted')
    return () => {
      console.log('pages layout unmount')
    }
  }, [])
  return <div>
    <div>
      <Link href="/a">A</Link>
    </div>
    <div>
      <Link href="/b">B</Link>
    </div>

    <div>
      {children}

    </div>
  </div>
}
