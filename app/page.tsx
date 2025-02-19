import React, { Suspense } from 'react'
import { Movie } from './types/Movie'
import MovieResults from '@/components/MovieResults'
type Props={
  searchParams:Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({searchParams}:Props) {
  const  API_KEY= process.env.REACT_APP_API_KEY
  const param=await searchParams;
  const genre=  param.genre||'fetchTrending'
    const res= await fetch(`https://api.themoviedb.org/3${ genre==='fetchTopRated'?`/movie/top_rated`:`/trending/all/week`}?api_key=${API_KEY}`)
    const data= await res.json();
    if(!res.ok){
      throw new Error('Failed to fetch data')
    }
    const results:Movie[]= data.results as Movie[];

  return (
    <div>
    <Suspense fallback={<div className="text-center">Loading...</div>}>
{results && <MovieResults movies={results}/>
}
</Suspense>
    </div>
  )
}
