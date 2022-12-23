import { useEffect, useState } from 'react'
import axios from 'axios'

function OmdbInput() {

    let [movies, setMovies] = useState()
    let [name,setName]=useState()
  let [loading, setLoading]=useState(true)


    useEffect(()=>
    {
        async function mymovies()
        {
            try{
            let { data: { Search } } = await axios.get(`https://www.omdbapi.com/?s=${name}&apikey=561bf054`)
            setMovies(Search)
            setLoading(false)
            }
            catch(err)
            {
                console.log(err);
                setLoading(true)
            }
        }
        mymovies()
    },[name])


    return (
        <div>
             <h1 >Search Movie Here</h1>
            <input placeholder='Enter Movie name' style={{border:"1px solid grey",height:30,width:250,borderRadius:8}} type="text" value={name} onChange={e => setName(e.target.value)} />
            {/* <button  type='button' >FetchMovie</button> */}
            {
               loading?<h1>Loading......</h1> :movies?.map(({ Title, Year, Poster,imdbID })=>
                {
                    return(
                        <div key={imdbID}>
                            <h1>{Title}</h1>
                            <h3>{Year}</h3>
                            <img src={Poster} alt="" height={100} width={150}/>


                        </div>
                    )
                })
            }

        </div>
    )
}

export default OmdbInput;