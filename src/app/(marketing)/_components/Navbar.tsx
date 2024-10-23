import Link from 'next/link'
import React from 'react'
import BrandLogo from '../../../components/BrandLogo'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <header className='flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95'>
      <nav className='flex items-center gap-10 container font-semibold'>
        <Link href={'/'} className='mr-auto'>
          <BrandLogo />
        </Link>
        <Link href={'/#'} className='text-lg'>
          Features
        </Link>
        <Link href={'/#'} className='mr-auto'>
          Pricing
        </Link>
        <Link href={'/#'} className='mr-auto'>
          About
        </Link>
        <span>
          <SignedIn>
            <Link href={'/dashboard'}>Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  )
}

export default Navbar

