import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import Slider from "../Slider/Slider";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./miniService.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Slider></Slider>
      <Container className="my-5">
        <Row xs={1} md={4} className="g-4">
          {services.map((service) => (
            <SingleService 
                key = {service.id}
                service={service}
            ></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
