import { Movie } from '@/app/types/Movie'
import React from 'react'
interface MovieListProps
{
    movies:Movie[]
}
export default function MovieResults({movies}:MovieListProps) {
  return (
    <div>
      {
        movies.map(
            (movie:Movie)=>{return (
                <div key={movie.id}>
                    <h2> {movie.title}</h2>
                    </div>
        )}
        )
      }
    </div>
  )
}
