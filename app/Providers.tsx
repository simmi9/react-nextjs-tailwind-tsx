'use client'
import React, { JSX } from 'react'
import {ThemeProvider} from 'next-themes'

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
}
export default function Providers({children}:Props) {
  return (
 <ThemeProvider defaultTheme='system' attribute='class'>
    <div  className='text-gray-700 dark:text-gray-200 dark: bg-gray-700 min-h-screen select-none transition-color duration-300s'>
        {children}
    </div>
 </ThemeProvider>
  )
}
             