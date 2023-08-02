"use client"
import Movies from '@/components/Movies';
import ErrorBoundary from '@/components/errorboundary';
import React from 'react';

const Page = async ({ searchParams }) => {
  const genreQuery = searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day";
  const apiKey = "1d5dad3345b663e244653304e46b496f";
  const apiUrl = `https://api.themoviedb.org/3/${genreQuery}?api_key=${apiKey}&language=tr`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return (
      <ErrorBoundary>
      <div className='flex items-center flex-wrap gap-3'>
        {data?.results?.map((data, i) => (
          <Movies key={i} data={data} />
        ))}
      </div>
      </ErrorBoundary>

    );

  } catch (error) {
    console.error("Error fetching data:", error);
    // You might want to handle the error here appropriately
    return null;
  }
};

export default Page;


