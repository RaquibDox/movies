import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.scss'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
