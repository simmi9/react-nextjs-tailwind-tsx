'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SearchBox() {
    const [search, setSearch]= useState('')
    const router= useRouter()
    const handleSearch=(e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault()
        setSearch(search)
        router.push(`/search/${search}`)
    }
  return (
    <div   >
      <form className='max-w-6xl px-4 flex flex-row justify-between m-auto'>
        <input className='outline-none bg-transparent w-full h-14 rounded-md placeholder-gray-300 flex-1' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Placeholder...' ></input>
      <button  className='text-amber-600 disabled:text-gray-500 '  onClick={(e)=>handleSearch(e)} disabled={search===''}> Search </button>
      </form>
    </div>
  )
}
 