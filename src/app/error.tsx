'use client'

import { ErrorDisplay } from '@/components/ui/error-display'

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container flex min-h-screen items-center justify-center">
      <ErrorDisplay error={error} errorRoot="Root" reset={reset} />
    </div>
  )
}
