import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "../../public/Logo1.png";
import { RiHome4Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { PiNotepadBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [response, setResponse] = useState({});
  const [video, setVideo] = useState(null); // Define video state

  const singlePage = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRmZDJlM2MzYTc5N2JmMDhmZDM3NjhhYzYyYmE5OSIsInN1YiI6IjY1YmEzMGU3ZTlkYTY5MDE3YmY1ZWYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h0D2I4SCXYCfendFQfyTwrf7YZO3tbE9Pf0XLEdzdKE",
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error("error loading", error);
    }
  };

  useEffect(() => {
    singlePage();
  }, [id]);

  const fetchMovieVideos = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRmZDJlM2MzYTc5N2JmMDhmZDM3NjhhYzYyYmE5OSIsInN1YiI6IjY1YmEzMGU3ZTlkYTY5MDE3YmY1ZWYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h0D2I4SCXYCfendFQfyTwrf7YZO3tbE9Pf0XLEdzdKE",
          },
        }
      );
      console.log(response);

      const officialTrailer = response.data.results.find(
        (video) => video.type === "Trailer" && video.official
      );

      setVideo(officialTrailer); // Set video state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieVideos();
  }, [id]);

  return (
    <div className=" ">
      <div>
        <div className="flex min-h-screen">
          {/* left-section */}
          <div className="hidden md:grid border border-black/30 rounded-tr-3xl rounded-br-3xl w-[15rem] py-4 overflow-hidden">
            <div>
              {/* logo */}
              <Link to={`/Header/${response?.id}`}>
                <div className="w-[12rem] px-4">
                  <img src={logo} alt="logo" className=" w-full" />
                </div>
              </Link>
              {/*  */}
              <ul className=" mt-7">
                <Link to={`/Header/${response?.id}`}>
                  <li>
                    <a
                      className="flex items-center gap-2 text-lg font-semibold hover:bg-[#BE123C]/10 text-[#666666] hover:text-[#BE123C] py-5 pl-5 md:pl-9 hover:border-r-8 hover:border-r-[#BE123C] ease-out duration-500"
                      href=""
                    >
                      <RiHome4Line /> Home
                    </a>
                  </li>
                </Link>
                <Link to={`/Header/${response?.id}`}>
                  <li>
                    <a
                      className="flex items-center gap-2 text-lg font-semibold hover:bg-[#BE123C]/10 text-[#666666] hover:text-[#BE123C] py-5 pl-5 md:pl-9 hover:border-r-8 hover:border-r-[#BE123C] ease-out duration-500"
                      href=""
                    >
                      <BiCameraMovie /> Movies
                    </a>
                  </li>
                </Link>
                <li>
                  <a
                    className="flex items-center gap-2 text-lg font-semibold hover:bg-[#BE123C]/10 text-[#666666] hover:text-[#BE123C] py-5 pl-5 md:pl-9 hover:border-r-8 hover:border-r-[#BE123C] ease-out duration-500"
                    href=""
                  >
                    <SlScreenDesktop />
                    TV Series
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-lg font-semibold hover:bg-[#BE123C]/10 text-[#666666] hover:text-[#BE123C] py-5 pl-5 md:pl-9 hover:border-r-8 hover:border-r-[#BE123C] ease-out duration-500"
                    href=""
                  >
                    <PiNotepadBold />
                    Upcoming
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* right-section */}
          <div className="w-full px-5 my-5">
            <div>
              {/* trailer-section */}
              <div className="w-full object-cover">
                {video && (
                  <iframe
                    title={video.name}
                    width="100%"
                    height="440"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              {/* movie-detail */}
              <div>
                {/* Movie title */}
                <div className="flex flex-col sm:flex-row gap-2 py-5 font-semibold text-lg">
                  <h1 className="">{response.title} </h1>
                  <p className="flex items-center gap-2">
                    <span className="w-1 bg-black rounded-full aspect-square"></span>
                    {response.release_date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1 bg-black rounded-full aspect-square"></span>
                    {response.runtime}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className=" w-full">
                    {" "}
                    <h2>{response.overview} </h2>
                    <div className="flex items-center gap-2 pt-3 font-bold text-lg">
                      Genres:
                      <ul className="flex items-center gap-2 font-normal  ">
                        <li>Drama,</li>
                        <li>Crime</li>
                      </ul>
                    </div>
                  </div>
                  <div className="  w-full sm:w-[50%] px-4">
                    <div>
                      <a
                        href=""
                        className="border border-[#BE123C] bg-[#BE123C] py-2 rounded-md text-white grid justify-center items-center"
                      >
                        See Showtime
                      </a>
                    </div>
                    <div className="mt-1">
                      <a
                        href=""
                        className="bg-[#BE123C]/10 border border-[#BE123C] py-2 rounded-md grid justify-center items-center"
                      >
                        More Watch Option
                      </a>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
