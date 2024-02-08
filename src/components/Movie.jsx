import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          <div className="hidden md:grid border border-black/30 rounded-tr-3xl rounded-br-3xl w-[15rem] py-4 overflow-hidden"></div>

          {/* right-section */}
          <div className="w-full px-5 my-5">
            <div>
              {/* trailer-section */}
              <div>
                {video && (
                  <iframe
                    title={video.name}
                    width="100%"
                    height="415"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              {/* movie-detail */}
              <div>
                <h1>{response.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
