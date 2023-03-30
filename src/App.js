import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import api from './Api/axiosConfig';
import { Route,Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Components/home/Home';
import { Trailer } from './Components/trailer/Trailer';
import { Header } from './Components/header/Header';
import { Review } from './Components/review/Review';

function App() {
  const [movies, setmovies] = useState([])
  const getMovies=async()=>{
    try {
      const response=await api.get("/api/v1/movies");
      setmovies(response.data)
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  
  // const singleMovieData=async(imdbId)=> {
    
  // }


  useEffect(() => {
    getMovies()
  }, [])
  
  return (
    <div className="App">
    <Header/>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home movies={movies}/>} ></Route>
        <Route path="/trailer/:ytTrailerId" element={<Trailer/>} ></Route>
        <Route path="/reviews/:imdbId" element={<Review/>}   ></Route>
        
      </Route>
     </Routes>
    </div>
  );
}

export default App;
