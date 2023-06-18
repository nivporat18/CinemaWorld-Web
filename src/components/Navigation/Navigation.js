import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";

  const [query,setQuery] = useState('')
  const [movie,setMovie] = useState()

 


const searchMovies = async (e) =>{
  e.preventDefault()

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=27715af1593b0426691060d9f7ad58ee&en-US&query=${query}`

try{
  const response = await fetch(searchUrl)
  const responseJson = await response.json()
  setMovie(responseJson.results)
}catch(err){
 alert("No Find Your Search")
}

}

 
const inputChange = (e)=>{
  setMovie('')
  setQuery(e.target.value)
  
}


  return (
    <div className='allPageNavigation'>

    <h1 className='the_title'>Cinema World</h1>


      <div>
    <form className='input_search' onSubmit={searchMovies}> 
      <input  value={query} onChange={inputChange}  placeholder='Search' />
      <button className='btnSearch' type='submit'>Search</button>
    </form> 
    

    <div className='links'>
    <Link  to="/movie-popular"> Movie Popular</Link>
    <Link to="/movie-rated"> Movie Rated</Link>
    <Link to="/tvshow-popular"> TvShow Popular</Link>
    <Link to="/tvshow-rated"> TvShow Rated</Link>

    </div>
    </div>


 
 
   


<div>
  
</div>

<div class="flex flex-wrap justify-center   mx-auto ">
<div className='grid  lg:grid-cols-3 gap-6 md:grid-cols-2 '>


{movie && movie.map((f)=>


<div  className="group relative block bg-black m-10">
<img alt={f.title} src={poster_url+f.poster_path}  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>

<div className="relative p-4 sm:p-6 lg:p-8 mb-20">

<p className="text-xl font-bold text-white sm:text-2xl ">{f.title}</p>

<div className="mt-32 sm:mt-48 lg:mt-64">
  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    <p className="text-sm text-white"> {f.overview} </p>
  </div>
</div>
</div>
</div>

      )}

  </div>
      </div>
    </div>
  )
}

export default Navigation