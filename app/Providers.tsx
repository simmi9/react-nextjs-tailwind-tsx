'use client'
import React, { JSX, ReactNode } from 'react'
import {ThemeProvider} from 'next-themes'

export default function Providers({children}:any) {
  return (
 <ThemeProvider defaultTheme='system' attribute='class'>
    <div  className='text-gray-700 dark:text-gray-200 dark: bg-gray-700 min-h-screen select-none transition-color duration-100s'>
        {children}
    </div>
 </ThemeProvider>
  )
}
             