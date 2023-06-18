import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MoviePopular from './components/Movies/MoviePopular/MoviePopular';
import MovieRated from './components/Movies/MovieRated/MovieRated';
import TvShowPopular from './components/TvShows/TvShowPopular/TvShowPopular'
import TvShowRated from './components/TvShows/TvShowRated/TvShowRated';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navigation/>
      <Routes>

      <Route path='/' element={<MoviePopular/>}/>
      <Route path='/movie-popular' element={<MoviePopular/>}/>
      <Route path='/movie-rated' element={<MovieRated/>}/>
      <Route path='/tvshow-popular' element={<TvShowPopular/>}/>
      <Route path='/tvshow-rated' element={<TvShowRated/>}/>
 

      </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
