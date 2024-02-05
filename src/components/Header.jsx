import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";

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
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRmZDJlM2MzYTc5N2JfmdfsdfsdfmMDfmMDFWQWEETdKe",
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

  const backgroundUrl = `https://image.tmdb.org/t/p/original/${responses[randomIndex]?.poster_path}`;

  return (
    <div className="">
      <div
        className="max-w-[1640px] mx-auto p-4 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <Navbar />
        <div className=" w-[500px] text-left ">
          <h1 className="px-4 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {responses[randomIndex]?.title}{" "}
          </h1>
          <h2 className=" text-white text-left">
            {responses[randomIndex]?.overview}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
