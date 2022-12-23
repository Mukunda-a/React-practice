import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Omdbapi() {

  let [movies, setMovies] = useState()
  const [movieName, setMovieName] = useState("")
  const [idFromButtonClick, setIdFromButtonClick] = useState("")

  const handleClick = () => {
    setIdFromButtonClick(movieName)
  }
  useEffect(() => {

    async function getmovies() {
      try {
        let { data: { Search } } = await axios.get(`https://omdbapi.com/?s=${idFromButtonClick}&apikey=e0b9ad9c`)

        setMovies(Search)
      }
      catch (err) {
        console.log(err);
      }
    }
    getmovies()
  }, [idFromButtonClick])

  return (

   
    <div>
     <input type="text" value={movieName} onChange={e => setMovieName(e.target.value)} />
           <button type="button" onClick={handleClick} >Fetch movie</button> 
      {movies?.map(({ Title, Year, imdbID, Poster }) => {

        return (

          <div>
            {/* <h1 >Search Movie Here</h1> */}
            {/* <input placeholder='Enter Movie name' style={{border:"1px solid grey",height:30,width:250,borderRadius:8}} type="text" value={movieName} onChange={e => setMovieName(e.target.value)} /> */}

      




            <div key={imdbID}>
              <h1>{Title}</h1>
              <h1>{Year}</h1>
              <img src={Poster} alt="" height={200} width={150} />

            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Omdbapi;