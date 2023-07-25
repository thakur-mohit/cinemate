import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BackUp from "../assets/images/backup.png";
const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTM4OGFjZjJiOTJhZWFmM2FmZjM0OWYwMGRhNWMwMSIsInN1YiI6IjY0ODc0ODQ1OTkyNTljMDBjNWI1YzVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-cf6RwsqQ8v18wlLDCEU8lNF0vL-u6qqRPBw6xcSCg",
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + params.id,
        options
      );

      const data = await response.json();
      console.log(data);
      setData(data);
    }

    fetchMovies();
  }, [params.id]);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img
            className="rounded-t-lg"
            src={
              data?.poster_path
                ? `https://image.tmdb.org/t/p/original${data?.poster_path}`
                : BackUp
            }
            alt={data?.original_title}
          />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data?.original_title}
          </h1>
          <p className="my-4">{data?.overview}</p>
          {data?.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {data?.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">
              {data?.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {data?.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{data?.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{data?.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{data?.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{data?.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${data?.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {data?.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;
