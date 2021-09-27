import React, { useState } from 'react'
import './App.css'
import moviesCollection from './moviesData';
import rating from './img/rating.png'

const genres = ['action', 'comedy', 'drama', 'horror', 'romance', 'thriller'];


const App = () => {
  const [movieTye, setMovieType] = useState('hollywood');
  const [genre, setGenre] = useState('action')
  const [clickedId, setClickedId] = useState(-1);
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

      {movieTye === 'hollywood' ? <button className='toggleBtn' onClick={toggleMovieType}>Hollywood</button> : <button className='toggleBtn' onClick={toggleMovieType}>Bollywood</button>}
      <div className="sub-container">
        <div className="left">
          {
            genres.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => { setGenre(item); setClickedId(index) }}
                  className={index === clickedId ? "customButton active" : "customButton"}
                >
                  {item}
                </button>
              );
            })
          }
        </div>
        <div className="right">
          <p>Movies : </p>

          {
            movieTye === 'hollywood' ?
              <ul>{
                // console.log(Array.isArray(moviesCollection[genre].hollywood.movies))
                moviesCollection[genre].hollywood.movies.map((item, index) => {
                  return (
                    <li
                      key={index}
                    >
                      {item}
                      
                      <span>
                        <img src={rating} alt={`rating`}/>
                        &nbsp; {moviesCollection[genre].hollywood.ratings[index]}
                      </span>
                      <p>{moviesCollection[genre].hollywood.description[index]}</p>
                    </li>
                  )
                })

              }

              </ul> :
              <ul>{
                // console.log(Array.isArray(moviesCollection[genre].hollywood.movies))
                moviesCollection[genre].bollywood.movies.map((item, index) => {
                  return (
                    <li
                      key={index}
                    >
                      {item}
                      <span>
                        <img src={rating} alt={`rating`}/>
                        &nbsp; {moviesCollection[genre].bollywood.ratings[index]}
                      </span>
                      <p>{moviesCollection[genre].bollywood.description[index]}</p>
                    </li>
                  )
                })

              }

              </ul>
          }

        </div>
      </div>
    </div>
  )
}

export default App
