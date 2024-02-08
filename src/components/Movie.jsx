import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { id } = useParams();
  const [response, setResponse] = useState({});

  const singlePage = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/{id}`,
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
  console.log(response);

  useEffect(() => {
    singlePage();
  }, [id]);
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Movie;
