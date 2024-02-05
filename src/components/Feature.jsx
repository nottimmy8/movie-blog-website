import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

const Feature = () => {
  const [responses, setResponse] = useState([]);

  const topRated = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzI0YjRjMThlYzcyOTljYWE5YjQ2YTgzMDBlZmZhMiIsInN1YiI6IjY0NTM5ZmFlMzNhZDhmMDBlM2M4YmJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWop-QMu4ydtFqANr1f02lCapEQETa2jvj5so4Tf_I0",
          },
        }
      );

      console.log("Response", response);
      console.log("Data", response.data);
      console.log("Result", response.data.results);
      setResponse(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    topRated();
  }, []);

  console.log(responses);
  return (
    <div className="max-w-[1100px]  mx-auto ">
      <div className=" flex items-center justify-between py-6">
        {/* Heading  */}
        <h2>Featured</h2>
        <p>See More</p>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-between items-center ">
        {responses.map((response, index) => (
          <div key={index}>
            <div className="max-w-[250px]">
              <img
                src={`https://image.tmdb.org/t/p/original/${response.poster_path}`}
                alt={response.title}
                className="w-full "
              />
            </div>

            <div className=" py-3">
              <h1>{response.release_date} </h1>
              <h1>{response.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
