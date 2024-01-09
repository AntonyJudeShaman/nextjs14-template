import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import Navbar from 'react-bootstrap/Navbar'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function MobileHeader() {
  const [mobileNav, setmobileNav] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const navLinks = siteConfig.mainNav

  return (
    <div className=" flex items-center">
      {isHydrated && <ThemeToggle />}
      <Drawer>
        <DrawerTrigger onClick={() => setmobileNav(true)}>
          <label className="hamburger invert dark:invert-0 cursor-pointer">
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </DrawerTrigger>
        {mobileNav && (
          <DrawerContent className="bg-gradient-to-br duration-300 dark:from-slate-950 dark:to-indigo-950 from-slate-200 to-indigo-100">
            <DrawerClose className="ml-2 flex container object-contain text-right justify-end">
              <Button variant="ghost">
                <Icons.close className="h-8 w-8 text-black/80 dark:text-foreground" />
              </Button>
            </DrawerClose>
            <DrawerDescription className="text-[3.5rem] mt-[7rem] container">
              <DrawerHeader>
                <DrawerTitle className=" text-left justify-start flex -ml-3">
                  Menu
                </DrawerTitle>
              </DrawerHeader>
              {navLinks?.map(
                (item, index) =>
                  item.href && (
                    <div key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setmobileNav(false)}
                        className={cn(
                          `flex items-center text-black/80 font-dmsans caret-teal-500 font-extralight mt-[1rem] dark:text-foreground`,
                        )}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ),
              )}
            </DrawerDescription>
          </DrawerContent>
        )}
      </Drawer>
    </div>
  )
}
