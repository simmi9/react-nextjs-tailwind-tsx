'use client'
import { Movie } from '@/app/types/Movie';
import MovieResults from '@/components/MovieResults';
import { useParams } from 'next/navigation'
import React,{useEffect,useState} from 'react'
const  API_KEY= process.env.API_KEY;

export default function  SearchPage() {
    const params= useParams()
    const [results,setResults] =useState<Movie[]>();


const fetchData = async()=>{
    const res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`)
const data= await res.json()
if(!res.ok){
    throw Error;
}
const results=data.results;
setResults(results)
}

useEffect(()=>{
    fetchData()
},[])

  return (
    <div>
       {results &&results.length>0? <MovieResults movies={results}/>:(
        <h1 className='m-auto text-center p-5'> No Search Results found</h1>
       )

       }
    </div>
  )
}
