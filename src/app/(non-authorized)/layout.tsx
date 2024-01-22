import { ThemeModeToggle } from '@/components/theme/theme-mode-toggle'
import Link from 'next/link'
import * as React from 'react'

export default function NonAuthorizedLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-slate-200 px-4 dark:border-slate-800">
        <Link href="/" className="inline-flex gap-2 text-lg">
          <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text font-bold text-transparent">
            EasyGenerator Test
          </span>
          <small>By David Khierl</small>
        </Link>
        <ThemeModeToggle variant="ghost" />
      </header>
      <div className="flex-1">{children}</div>
    </div>
  )
}
