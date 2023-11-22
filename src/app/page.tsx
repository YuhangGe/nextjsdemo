import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/dashboard/a">Jump</Link>
      </div>
    </main>
  )
}
