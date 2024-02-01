import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";

function Header() {
  const [responses, setResponse] = useState([]);

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
    <div className=" h-screen w-full">
      <Navbar />
      <div className="">
        {responses.map((response, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${response.poster_path})`,
            }}
          >
            <h1>{response.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
