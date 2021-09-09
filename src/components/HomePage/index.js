import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Nowplay from "./Nowplaying";
import Axios from "axios";
// import {} from "react";
import Popular from "./Popular";
// import { Homewrapper } from "./Nowplaying/style";
export default function Homepage() {
  const [nowplaying, setnowplaying] = useState([]);
  const [toprated, settoprated] = useState([]);
  const [popular, setpopular] = useState([]);

  useEffect(() => {
    Allmovies();
    console.log("render");
  }, []);
  const Allmovies = async () => {
    let Apikey = "02689249b40636b114a2add6006bff65";
    const Getmovie = await Axios.all([
      Axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${Apikey}&language=en-US&page=1`
      ),
      Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=en-US&page=1`
      ),
      Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=1`
      ),
    ]);
    console.log(Getmovie);
    setnowplaying(Getmovie[0].data.results);
    settoprated(Getmovie[1].data.results);
    setpopular(Getmovie[2].data.results);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Nowplay movies={nowplaying} />
      <Popular watch={popular} />
    </React.Fragment>
  );
}
