import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import ReactPlayer from "react-player/youtube";
import { useLocation, Link } from "react-router-dom";
export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="movie-info">
        <ReactPlayer
          className="players"
          url={"https://youtube.com/watch?v=" + movie.trailer}
          autoPlay={true}
          playing={true}
          volume={65}
          controls
        />
        <div className="info">
          <p className="desc">Movie title: <span>{movie.title}</span></p>
          <p className="desc">Movie Description: <span>{movie.desc}</span></p>
          <p className="desc">Movie Year: <span>{movie.year}</span></p>
          <img src={movie.imgTitle} />
        </div>
      </div>
    </div>
  )
}
