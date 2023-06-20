import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './MoviePopular.css'


const Movie = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";

    const [movie,setMovie] = useState()

       const getMovies = async ()=>{
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=27715af1593b0426691060d9f7ad58ee&language=en-US"
    
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson)
        setMovie(responseJson.results)
       
    }
    
        useEffect(()=>{
          getMovies()
          
        },[])


  return (
  
<div className="flex flex-wrap justify-center   mx-auto  ">
<div className='grid  lg:grid-cols-3 gap-8 md:grid-cols-2 '>

        {movie && movie.map((m)=>
<div  className="group relative block bg-black m-10 rounded-xl border" key={m.id}>
<img alt={m.title} src={poster_url+m.poster_path}  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>

<div className="relative p-4 sm:p-6 lg:p-2 mb-16">



<div className="mt-32 sm:mt-48 lg:mt-64">
  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
  <p className="text-xl font-bold text-white sm:text-2xl ">{m.title}</p>
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

export default Movie





