import Movies from '@/components/Movies';
import React from 'react';

const page = async ({ searchParams }) => {
  const genreQuery = searchParams.genre ? "movie/" + searchParams.genre : "movie/upcoming/";
  const apiKey = "1d5dad3345b663e244653304e46b496f";
  const apiUrl = `https://api.themoviedb.org/3/${genreQuery}?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return (

      <div className='flex items-center flex-wrap gap-3'>
        {data?.results?.map((dt, i) => (
          <Movies key={i} dt={dt} />
        ))}
      </div>

    );

  } catch (error) {
    console.error("Error fetching data:", error);
    // You might want to handle the error here appropriately
    return null;
  }
};

export default page;


