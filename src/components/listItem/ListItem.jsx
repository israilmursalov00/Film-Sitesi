import "./listItem.scss";
import React from "react";
import { useState, useEffect } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import ReactPlayer from "react-player/youtube";
import ReactYoutube from "react-youtube";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/movie/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDFlZDQ1MWM0MjgyN2EwM2YzYmNmNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDg0ODc5MzAsImV4cCI6MTY0ODkxOTkzMH0.BOj1GA-qhM7YN-QR059keAQWkGfsqLqtj15xlYETtAk"
          }
        })

        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" style={{display: isHovered ? "none" : false}}/>
        {isHovered && (
          <>
            <ReactPlayer
              className="players"
              url={"https://youtube.com/watch?v=" + movie.trailer}
              autoPlay={true}
              playing={true}
              volume={65}
              controls
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}