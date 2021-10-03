import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container className="my-5">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (<Service 
            key={service.id} 
            service={service}
          ></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
