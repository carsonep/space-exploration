import React, { useState, useEffect } from "react";
import "./News.scss";
import axios from "../../axios";
import SpaceBackground from "../../img/1253115.jpg";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=3fasR1ZU5zPkgfSS1Z6DXvZ4NOkaoHRSrUd37LsZ`
      );

      setNews(request.data);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="news__container">
        <img
          className="news__container-image"
          src={SpaceBackground}
          alt="star background"
        />
        <div className="news__container-daily">
          <div class="paper">
            <h2 className="news__container-daily-date">{news.date}</h2>
            <h1 className="news__container-daily-title">{news.title}</h1>
            <p className="news__container-daily-story">{news.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
