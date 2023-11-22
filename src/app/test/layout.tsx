'use client'

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

let i = 0;
export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    console.log('app layout mounted:', i++)
    return () => {
      console.log('app layout unmount')
    }
  }, [])
  return <div>
    <div>
      <Link href="/test/a">A</Link>
    </div>
    <div>
      <Link href="/test/b">B</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}