import React from 'react'
import { Movie } from './types/Movie'
import MovieResults from '@/components/MovieResults'
const  API_KEY= process.env.API_KEY

export default async function Home({searchParams}:any) {
  const genre= searchParams.genre||'fetchTrending'
  const res= await fetch(`https://api.themoviedb.org/3${ genre==='fetchTopRated'?`/movie/top_rated`:`/trending/all/week`}?api_key=${API_KEY}`)
  const data= await res.json();
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  const results:Movie[]= data.results as Movie[]

  return (
    <div>

{results&& <MovieResults movies={results}/>
}
    </div>
  )
}
