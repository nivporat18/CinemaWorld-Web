import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './MovieRated.css'

const MovieRated = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";


  const [movieR,setMovieR] = useState()


  const getMovieRated = async() =>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=27715af1593b0426691060d9f7ad58ee&language=en-US'

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovieR(responseJson.results)
  }

  useEffect(()=>{
    getMovieRated()
  },[])


  return (
    <div class="flex flex-wrap justify-center   mx-auto ">
    <div className='grid  lg:grid-cols-3 gap-6 md:grid-cols-2 '>
    {movieR && movieR.map((m)=>
      <div  className="group relative block bg-black m-10">
<img alt={m.title} src={poster_url+m.poster_path}  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>

<div className="relative p-4 sm:p-6 lg:p-8 mb-20">

<p className="text-xl font-bold text-white sm:text-2xl ">{m.title}</p>

<div className="mt-32 sm:mt-48 lg:mt-64">
  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    <p className="text-sm text-white"> {m.overview} </p>
  </div>
</div>
</div>
</div>



  )}

</div>
</div>
  )
}

export default MovieRated


{/* <div key={m.id} className="card">
<img src={poster_url+m.poster_path} className="card-img-top"  alt={m.title}></img>
<div className="card-body">
<h2 className="card-title">{m.title}</h2>
<h6 className="card-text">{m.overview}</h6>
<p>Rating: {m.vote_average}</p>
<p>Relese Date: {m.release_date}</p>
<p>Language: {m.original_language}</p>
</div>
</div> */}