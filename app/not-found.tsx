'use client'
import React, { Suspense } from 'react'

export default function Notfound() {
  return (
    <div>
          <Suspense fallback={<div className="text-center">Loading...</div>}>
          <h3> Page Not Found</h3>
          </Suspense>
    </div>
  )
}
