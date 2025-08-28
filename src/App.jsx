import React, { useEffect, useState } from 'react'
import './App.css'
import SlideBar from './components/SlideBar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Spineer from './components/Spineer'
import MovieCard from './components/MovieCard'

import { useDebounce } from 'react-use'
import Privacy from "./components/Privacy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsCondition from './components/TermsCondition'
import Help from './components/Help'
import Login from './components/Login'
import ScrollToTop from "./components/ScrollToTop"; 

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_OPTION = {
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {
  const [serachTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');

  // ✅ splash state for full website reload
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // splash visible for 2 sec
    return () => clearTimeout(timer);
  }, []);

  const fetchMovie = async (query = '') => {
    setIsLoding(true);
    setErrorMessage('');
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTION);

      if (!response.ok) {
        throw new Error("Failed to fetch movie");
      }

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        setErrorMessage("Movie not found ❌");  
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Failed to fetch movie ${error}`);
      setErrorMessage("Failed to reload movie, please try again");
    } finally {
      setIsLoding(false);
    }
  }

  useDebounce(() => setDebounceSearchTerm(serachTerm), 500, [serachTerm]);

  useEffect(() => {
    fetchMovie(debounceSearchTerm);
  }, [debounceSearchTerm]);

  // ✅ splash screen when reload
  if (showSplash) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <img src="/icon.png" alt="MoviePlay Logo" className="w-24 mb-4 animate-pulse" />
        <p className="text-[70px]">MoviePlay</p>
        <div className="mt-4">
          <div className="loader"></div>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
             
              <SlideBar />
              <div className='bg-[#141313] flex justify-center w-[100%]'>
                <Menu serachTerm={serachTerm} setSearchTerm={setSearchTerm} />
              </div>

              <div className='all_movies'>
                {isLoding ? (
                  <Spineer />
                ) : errorMessage ? (
                  <p className='text-white'>{errorMessage} the movie is not available</p>
                ) : (
                  <ul>
                    {movieList.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </ul>
                )}
              </div>

              <Footer />
            </>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/TermsCondition" element={<TermsCondition/>} />
        <Route path="/Help" element={<Help/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
