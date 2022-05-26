import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDFlZDQ1MWM0MjgyN2EwM2YzYmNmNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDg0ODc5MzAsImV4cCI6MTY0ODkxOTkzMH0.BOj1GA-qhM7YN-QR059keAQWkGfsqLqtj15xlYETtAk"
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
        {lists.map((list) => 
          (<List list={list}/>)
        )}
    </div>
  );
};

export default Home;




 // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzM2MjM1MDJiZjk5YWJhZGJkZjg0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU5OTA4MiwiZXhwIjoxNjQ4MDMxMDgyfQ.LQ5UyvFMpoyxOak2axV7zgfx1cKvrVxxq0nzpRtOgvw