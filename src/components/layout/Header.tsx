'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase'
import type { User } from '@supabase/supabase-js'

export default function Header() {
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 transform rotate-45 hover:scale-110 transition-transform"></div>
              <span className="ml-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                BrandElevate
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm text-gray-900 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-all">
              home
            </Link>
            <Link href="/case-study" className="text-sm text-gray-900 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-all">
              case study
            </Link>
            <Link href="/our-team" className="text-sm text-gray-900 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-all">
              our team
            </Link>
            <Link href="/customer-story" className="text-sm text-gray-900 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-all">
              customer story
            </Link>
            <Link href="/contact" className="text-sm text-gray-900 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition-all">
              contact
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-sm text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 