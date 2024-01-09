'use client'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { useEffect, useState } from 'react'
import '@/styles/hamburger.css'
import { MobileHeader } from './mobile-nav'

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 0

      setIsScrolled(scrollPosition > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`bg-background duration-300 ${
        isScrolled ? 'backdrop-blur-5xl bg-background/70 text-orange-400' : ''
      } sticky-navbar sticky top-0 z-40 w-full border-b`}
    >
      <div className="container flex h-16 relative items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-1 relative items-center justify-end space-x-8 ">
          <MainNav items={siteConfig.mainNav} className="" />

          <div className="items-center ">
            <MobileHeader />
          </div>
        </div>{' '}
      </div>
    </header>
  )
}
