import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Featured({ type }) {
    const [content, setContent] = useState({});

    useEffect(()=> {
        const getRandomContent = async () => {
         try {
            const res = await axios.get(`http://localhost:8800/api/movie/random?type=${type}`,{

                headers: {
                    token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDFlZDQ1MWM0MjgyN2EwM2YzYmNmNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDg0ODc5MzAsImV4cCI6MTY0ODkxOTkzMH0.BOj1GA-qhM7YN-QR059keAQWkGfsqLqtj15xlYETtAk"
                }
            });
                setContent(res.data[0]);
            } catch(err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type]);
    return (

        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                width="100%"
                height="615px"
                src={content.imgTitle}
                style={{ objectFit: "cover" }}
                alt=""
            />
            <div className="info">
               <img
                 width="70px"
                 src={content.imgTitle}
               />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
