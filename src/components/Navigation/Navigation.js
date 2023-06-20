import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";

  const [query,setQuery] = useState('')
  const [movie,setMovie] = useState()

  const [isOpen,setOpen] = useState(false)

  const toggleNav = ()=>{
  setOpen(!isOpen)
  }


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
<header className="border-b border-gray-100 ">



<div className="mx-auto flex items-center justify-between sm:px-6 lg:px-8 ">




  <h1 className='text-white font-bold text-[30px] font-serif flex items-center justify-center'>Cinema World</h1>


  <div className="flex  items-center justify-end gap-8 ">
      <nav aria-label="Global" className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-white font-mono	">

    <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"  to="/movie-popular"> Movie Popular</Link>
    <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700" to="/movie-rated"> Movie Rated</Link>
    <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700" to="/tvshow-popular"> TvShow Popular</Link>
    <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700" to="/tvshow-rated"> TvShow Rated</Link>

      </nav>
      

      <div className="flex items-center">
        <div className="flex items-center border-x border-gray-100 lg:text-black">
      
          <form className='input_search' onSubmit={searchMovies}> 
          <input  value={query} onChange={inputChange}  placeholder='Search'  />
        
          </form> 

<div>
  
</div>
<div className="flex items-center  md:hidden" onClick={toggleNav} >
{isOpen ?   <svg className=" text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg> : 
        
        <button className="navbar-burger flex items-center text-white p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>} 

    </div>

      {isOpen && (
      <ul className="z-20 top-6 right-8 fixed  items-center font-medium border border-gray-100 rounded-lg bg-gray-50  font-mono	">

          <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"  to="/movie-popular"> Movie Popular</Link>
          <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700" to="/movie-rated"> Movie Rated</Link>
        <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700" to="/tvshow-popular"> TvShow Popular</Link>
        <Link className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700" to="/tvshow-rated"> TvShow Rated</Link>

        </ul>

      )}




      </div>

      </div>
      </div>
      </div>

      <div className="flex flex-wrap justify-center mx-auto ">
<div className='grid  lg:grid-cols-3 gap-6 md:grid-cols-2 '>


{movie && movie.map((f)=>


<div  className="group relative block bg-black m-10 rounded-xl border">
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
    </header>
  )
}

export default Navigation
