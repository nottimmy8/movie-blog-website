import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import { IoMdPlayCircle } from "react-icons/io";
import Feature from "./Feature.jsx";
import { Link } from "react-router-dom";

function Header() {
  const [responses, setResponse] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const topRated = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRmZDJlM2MzYTc5N2JmMDhmZDM3NjhhYzYyYmE5OSIsInN1YiI6IjY1YmEzMGU3ZTlkYTY5MDE3YmY1ZWYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h0D2I4SCXYCfendFQfyTwrf7YZO3tbE9Pf0XLEdzdKE",
          },
        }
      );
      setResponse(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    topRated();
  }, []);

  useEffect(() => {
    // Generate a random index within the length of the responses array
    const randomIndex = Math.floor(Math.random() * responses.length);
    setRandomIndex(randomIndex);
  }, [responses]);

  const backgroundUrl = `https://image.tmdb.org/t/p/original/${responses[randomIndex]?.backdrop_path}`;

  return (
    <div className=" ">
      {/* background */}
      <div
        className="w-full mx-auto bg-cover bg-center h-screen relative "
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        {/* hero content */}
        <div className="w-full h-full bg-gradient-to-tr from-black p-6 ">
          {/* Navbar */}
          <div className="">
            <Navbar />
          </div>
          {/* hero Text-section */}
          <div className="w-[100%] md:px-10 sm:w-[25rem] md:py-[6rem] sm:py-[2rem]    ">
            <h1 className="text-white text-2xl  font-bold pb-2">
              {responses[randomIndex]?.title}{" "}
            </h1>
            <h3 className=" text-white font-bold text-1xl pb-2">
              {responses[randomIndex]?.release_date}{" "}
            </h3>
            <h2 className=" text-white text-left pb-3">
              {responses[randomIndex]?.overview}{" "}
            </h2>

            <Link>
              <button className=" flex items-center bg-[#be123c] w-fit px-5 py-1.5 rounded-md gap-2 text-white text-1xl">
                {" "}
                <IoMdPlayCircle /> WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Feature />
      </div>
    </div>
  );
}

export default Header;
