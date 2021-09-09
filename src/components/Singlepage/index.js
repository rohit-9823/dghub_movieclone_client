import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Container, Col } from "react-bootstrap";
export default function Singlemoviepage(props) {
  const [movies, setmovie] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=02689249b40636b114a2add6006bff65&language=en-US`
    )
      .then((res) => setmovie(res.data))

      .catch((err) => console.error(err));
  }, []);
  console.log(movies);
  return (
    <Container className="mt-4">
      <Row>
        <Col md="6">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt=""
          />
        </Col>
        <Col md="6">
          <h2>{movies.title}</h2>
          <p>{movies.overview}</p>
          <ul>
            <li>Release Date: {movies.release_date}</li>
            <li>Popularity: {movies.popularity}</li>
            <li>Stauts: {movies.status}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
