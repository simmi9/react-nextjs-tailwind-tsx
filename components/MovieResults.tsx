'use client'
import { Movie } from '@/app/types/Movie'
import React from 'react'
import Card from './Card'
import SearchBox from './SearchBox'

interface MovieListProps
{
    movies:Movie[]
}
export default function MovieResults({movies}:MovieListProps) {
  return (
   <>
   <SearchBox/>
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-4 max-w-6xl mx-auto p-4 '>
      {
        movies.map(
            (movie:Movie)=>{return (
                <Card movie={movie} />
            
        )}
        )
      }
    </div>
    </>
    
  )
}
