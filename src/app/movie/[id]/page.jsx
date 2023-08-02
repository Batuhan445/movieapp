"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ErrorBoundary from "@/components/errorboundary";

const getMovie = (id) => {
  const apiKey = "1d5dad3345b663e244653304e46b496f";
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=tr`
  ).then((res) => res.json());
};

const Page = ({ params }) => {
  const { id } = params;
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    getMovie(id)
      .then((movie) => setMovieDetail(movie))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movieDetail) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <ErrorBoundary>
    <div className="flex flex-col items-center">
      <div className="w-full min-h-screen relative overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          style={{ opacity: "0.5" }}
          src={movieDetail?.backdrop_path === null ? "/img/empty-film-image.jpg" : `https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`
          }
          alt="Movie Poster"
        />

        <div className="absolute top-0 left-0 w-full p-4 ">
          <div className="text-3xl mb-4">{movieDetail.title}</div>
          <div className="text-xl">{movieDetail.overview}</div>
          <div className="my-3">
            {"Yayın tarihi : " + movieDetail.release_date}
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default Page;
