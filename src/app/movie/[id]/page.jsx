import React from 'react'
import Image from 'next/image';


const getMovie = async (id) => {
    const apiKey = "1d5dad3345b663e244653304e46b496f";
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=tr`)
    return await res.json()
}

const page = async ({params}) => {
    const id = params.id
    const movieDetail = await getMovie(id)


  return (
    <div className="p-7 flex flex-col items-center">

      <div className="flex flex-col md:flex-row items-center md:items-start">

        {/* Image on the left */}
        <div className="mb-4 md:mr-8">
          <Image
          width={1280}
          height={720}
            style={{borderRadius:"0.75rem"}}
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
            alt="Movie Poster"
          />
        </div>

        {/* Title and Overview stacked on the right */}
        <div className="text-center md:text-left">
          <div className="text-3xl mb-4">{movieDetail.title}</div>
          <div className="text-xl">{movieDetail.overview}</div>
          <div className='my-3'> {movieDetail.release_date} </div>
          <div>  </div>
        </div>

      </div>

    </div>
  )
}

export default page



