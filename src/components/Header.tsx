/**
 * @author CMITEXPERTS
 * @website www.cmitexperts.com
 */

import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#newsletter' }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <span className="flex items-center gap-2">
            <Image src="/cmitexperts-logo.png" alt="CMITEXPERTS Logo" width={70} height={60} className="rounded" />
           
          </span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
} 