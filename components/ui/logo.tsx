import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src="/images/bbmmlogo.jpeg" height="50" width="50"></img>
    </Link>
  )
}
