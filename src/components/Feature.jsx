import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";
import { AiOutlineLike } from "react-icons/ai";

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
    <div className=" bg-black ">
      <div className="max-w-6xl mx-auto px-4  ">
        <div className=" flex items-center justify-between py-10 ">
          {/* Heading  */}
          <h2 className=" text-3xl font-bold text-white">Featured</h2>
          <p className=" font-bold text-white">See More</p>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {responses.map((response, index) => (
            <div key={index}>
              <div className=" relative hover:scale-105">
                <link to={`/Movie/${response?.id} `}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${response.poster_path}`}
                    alt={response.title}
                    className=""
                  />
                </link>
                <div className=" absolute top-5 right-2 rounded-full bg-white p-1">
                  <AiOutlineLike size={20} />
                </div>
              </div>

              <div className=" py-3 ">
                <h1 className=" text-white">{response.release_date} </h1>
                <h1 className=" text-white">{response.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
