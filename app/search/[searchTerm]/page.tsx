'use client'
import MovieResults from '@/components/MovieResults';
import { useParams } from 'next/navigation'
import React from 'react'

export default  async function  SearchPage() {
    const params= useParams()
    const  API_KEY= process.env.REACT_APP_API_KEY;

 const res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`)
const data= await res.json()
if(!res.ok){
    throw Error;
}
const results=data.results;

  return (
    <div>
       {results &&results.length>0? <MovieResults movies={results}/>:(
        <h1 className='m-auto text-center p-5'> No Search Results found</h1>
       )

       }
    </div>
  )
}
