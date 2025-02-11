'use client'
import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavbarLayer() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-200  p-4 lg:text-lg justify-center gap-5'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
