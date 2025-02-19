'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function MoviePage() {
    const params= useParams()
  return (
    <div>
      About this Movie...{params.id}
    </div>
  )
}
