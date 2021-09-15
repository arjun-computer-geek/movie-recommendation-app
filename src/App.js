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
              {item}
            </button>
          );
        })
      }
      <div>
        <p>Movies : </p>

        {
          movieTye === 'hollywood' ?
            <ul>{
              // console.log(Array.isArray(moviesCollection[gener].hollywood.movies))
              moviesCollection[gener].hollywood.movies.map((item, index) => {
                return (
                  <li
                    key={index}
                  >
                    {item}
                    <span>
                      &nbsp; {moviesCollection[gener].hollywood.ratings[index]}
                    </span>
                  </li>
                )
              })

            }

            </ul> :
            <ul>{
              // console.log(Array.isArray(moviesCollection[gener].hollywood.movies))
              moviesCollection[gener].bollywood.movies.map((item, index) => {
                return (
                  <li
                    key={index}
                  >
                    {item}
                    <span>
                      &nbsp; {moviesCollection[gener].bollywood.ratings[index]}
                    </span>
                  </li>
                )
              })

            }

            </ul>
        }

      </div>
    </div>
  )
}

export default App
