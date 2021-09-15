import React, { useState } from 'react'
import './App.css'
import moviesCollection from './moviesData';

const geners = ['action', 'comedy', 'drama', 'horror', 'romance', 'thriller'];


const App = () => {
  const [movieTye, setMovieType] = useState('hollywood');
  const [gener, setGener] = useState('action')

  // Movie type toggeler function
  const toggleMovieType = () => {
    if (movieTye === 'hollywood') {
      setMovieType('bollywood')
    }
    else {
      setMovieType('hollywood')
    }
  }

  // A prototype for capitalize the first letter of the Stirng
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  return (
    <div className="container">

      {/* toggle movies type and button */}
      {movieTye === 'hollywood' ? <button className='toggleBtn' onClick={toggleMovieType}>Bollywood</button> : <button className='toggleBtn' onClick={toggleMovieType}>Hollywood</button>}

      <p>Lets Start :</p>

      {
        geners.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setGener(item)}
            >
              {item.capitalize()}
            </button>
          );
        })
      }
      <div>
        <p>Movies : </p>

        {
          movieTye === 'hollywood' ?
            <div>{
                moviesCollection[gener].hollywood.movies.length
                // moviesCollection[gener].hollywood.movies[0]
              }</div> :
            <div>{moviesCollection[gener].bollywood.movies[0]}</div>
        }

      </div>
    </div>
  )
}

export default App
