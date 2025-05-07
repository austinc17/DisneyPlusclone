import React from 'react'
import GenreList from '../constant/GenreList'
import MovieList from './MovieList'

function GenremovieList() {
  return (
    <div>
        {GenreList.genere.map((item, index)=>index<=4&&(
            <div className='p-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genreId={item.id}/>
            </div>
            
        ))}
    </div>
  )
}

export default GenremovieList