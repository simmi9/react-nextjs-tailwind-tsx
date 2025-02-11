'use client'
import React from 'react'
import { useEffect } from 'react'
interface BoundaryProps{
    error: Error;
    reset:()=>void
}
export default function error({error,reset}:BoundaryProps) {
    useEffect(()=>{
    console.log(error)
    },[error])

  return (
    <div className='text-center p-10'>
      <h1> Something went wrong. Please try again. </h1>
      <button className='hover:text-amber-600'onClick={()=>reset()}> Try Again</button>
    </div>
  )
}
