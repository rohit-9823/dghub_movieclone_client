import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Homewrapper } from "../style";
export default function Nowplay({ movies }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <Container>
      <Homewrapper>
        <div className="clearfix mt-3 mb-3">
          <h4 className="float-left"> Now Playing</h4>
       
        </div>

        <Slider {...settings}>
          {movies.map((movies) => (
            <Col>
              <Card>
                <Link to={`/movies/${movies.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movies.title}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Slider>
      </Homewrapper>
    </Container>
  );
}
