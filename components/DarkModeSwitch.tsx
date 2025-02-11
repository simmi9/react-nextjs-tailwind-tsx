"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
export default function DarkModeSwitch() {
    const {theme,setTheme, systemTheme}= useTheme()
    const [mounted, setMounted]= useState(false)
    const currentTheme= theme==='system'? systemTheme: theme
    useEffect   (()=>{
        setMounted(true)
    },[])
  return (
    <div>
        { mounted && (currentTheme ==='dark' ? 
        (<MdLightMode className=' text-xl cursor-pointer hover:text-amber-500 mx-3' onClick={ ()=>setTheme('light')}/>):
         (<MdDarkMode className=' text-xl cursor-pointer bg-amber-200 mx-3 hover:text-amber-500' onClick={ ()=>setTheme('dark')}/>))}
 
    </div>
  )
}
