'use client'

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

let i = 0;
export default function Layout({ children }: { children: ReactNode}) {
  useEffect(() => {
    console.log('layout mounted:', i++)
    return () => {
      console.log('layout unmm')
    }
  }, [])
  return <div>
    <div>
      <Link href="/dashboard/a">A</Link>
    </div>
    <div>
      <Link href="/dashboard/b">B</Link>
    </div>
    <div>
      {children}
    </div>
  </div>
}