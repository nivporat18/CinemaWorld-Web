import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TvShowPopular = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";


  const [tvPopular,setTvPopular] = useState()


  const getTvPopular = async()=>{
    const url = 'https://api.themoviedb.org/3/tv/popular?api_key=27715af1593b0426691060d9f7ad58ee'

    const response = await fetch(url)
    const responseJson = await response.json()

    setTvPopular(responseJson.results)
  }

  useEffect(()=>{
    getTvPopular()
  },[])


  return (
<div className="flex flex-wrap justify-center mx-auto ">
<div className='grid  lg:grid-cols-3 gap-6 md:grid-cols-2 '>
    {tvPopular && tvPopular.map((t)=>

<div  className="group relative block bg-black m-10 rounded-xl border" key={t.id}>
<img alt={t.title} src={poster_url+t.poster_path}  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>

<div className="relative p-4 sm:p-6 lg:p-8 mb-20">

<p className="text-xl font-bold text-white sm:text-2xl ">{t.title}</p>

<div className="mt-32 sm:mt-48 lg:mt-64">
  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    <p className="text-sm text-white"> {t.overview} </p>
  </div>
</div>
</div>
</div>


  )}

</div>
</div>
  )
}

export default TvShowPopular