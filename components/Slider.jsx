import React, { useEffect, useReducer, useRef, useState } from 'react'
import globalapi from '../services/globalapi'
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
const imageBaseurl = "https://image.tmdb.org/t/p/original";


function Slider() {
    const [movielist, setMovielist] = useState([]);
    const elementRef=useRef();

    useEffect(() => {
        getTrendingVideos();
    }, [])

    const getTrendingVideos = () => {
        globalapi.gettrendingvideo().then(resp => {
            console.log(resp.data.results);
            setMovielist(resp.data.results);
        }).catch(error => console.error("Error fetching data:", error));
    }
    const sliderRight=(element)=>{
        element.scrollLeft+=800
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=800
    }


    return (
        <div>
            <HiChevronLeft className='text-white text-[30px] absolute mx-20 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
            <HiChevronRight className='text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)} />
        <div className="flex overflow-x-auto w-full px-16 py-4 ml-60 scroll-smooth" ref={elementRef} >
            {movielist.map((movie, index) => (
                <img 
                    key={index} 
                    src={imageBaseurl + movie.backdrop_path} 
                    alt={movie.title || "Movie Poster"}
                    className="    min-w-full h-[350px] mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
                />
            ))}
        </div>
        </div>


    )
}

export default Slider


