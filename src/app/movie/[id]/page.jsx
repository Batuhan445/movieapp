import React from 'react'
import Image from 'next/image';


const getMovie = async (id) => {
    const apiKey = "1d5dad3345b663e244653304e46b496f";
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    return await res.json()
}

const page = async ({params}) => {
    const id = params.id
    const movieDetail = await getMovie(id)

    console.log(movieDetail, "movieDetail")


  return (
    <div className='relative p-7 min-h-screen'>
      <Image width={1280} height={720} src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} alt="Movie Poster"/>

    </div>
  )
}

export default page



