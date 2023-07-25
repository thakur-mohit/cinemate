import { useState, useEffect } from "react";

const useFetch = (url, queryTerm = "") => {
  const [data, setData] = useState([]);

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
        "https://api.themoviedb.org/3/" + url + "?query=" + queryTerm,
        options
      );

      const data = await response.json();
      setData(data.results);
    }

    fetchMovies();
  }, [url, queryTerm]);
  return { data };
};

export default useFetch;
