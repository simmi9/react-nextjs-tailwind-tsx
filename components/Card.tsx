'use client'
import { Movie } from '@/app/types/Movie';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';
interface movieProps{
    movie: Movie;
}
export default function Card({movie}:movieProps) {
  return (
    <div className='m-2 ' key={movie.id}>
      <Link href={`/movie/${movie.id}`}>

      
      <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path|| movie.poster_path}`} width={500} height={300} alt={`${movie.backdrop_path||movie.poster_path} className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300`} className='sm:rounded-t-lg'>

      </Image>
      <div className="">
<p className='line-clamp-2 text-md p-1'>
    {movie.overview}

</p>
<h2 className='twxt-lg font-bold truncate p-1'> {movie.title }</h2>

<div className='p-1 pb-1'> {`${movie.release_date}`} </div>
    <FiThumbsUp />

      </div>
      </Link>
    </div>
  )
}
