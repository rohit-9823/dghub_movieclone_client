import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Homewrapper } from "../style";
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Popular({ watch }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <Container>
      <br />
      <div className="clearfix mt-5 mb-4">
        <h2 className="float-left"> Popular </h2>
       
      </div>
      <Homewrapper>
        <Slider {...settings}>
          {watch.map((watch) => (
            <React.Fragment>
              <Link to={`/movies/${watch.id}`}>
                <Col>
                  <Card style={{ height: "25rem" }}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${watch.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{watch.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </React.Fragment>
          ))}
        </Slider>
      </Homewrapper>
    </Container>
  );
}
