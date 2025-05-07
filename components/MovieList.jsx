import React, { useEffect, useState } from 'react'
import globalapi from '../services/globalapi'

function MovieList({genreId}) {
    const [movielist,setMovielist]=useState([])
    useEffect(()=>{
        getMovieByGenreId();

    },[])
    const getMovieByGenreId=()=>{
        globalapi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            //setMovielist(resp.data.results)
        })
    


    return (
        <div>
            movies
        </div>
    );
}
}
export default MovieList;