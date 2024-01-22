'use client'

import { DotLottiePlayer } from '@dotlottie/react-player'
import * as React from 'react'
import { HTMLAttributes } from 'react'
import animationData from './high-five.json'

export const HighFive = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<Omit<HTMLDivElement, 'children'>>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      <DotLottiePlayer src={animationData} autoplay loop />
    </div>
  )
})
HighFive.displayName = 'HighFive'
