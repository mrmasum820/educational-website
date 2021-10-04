import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services] = useServices();
  return (
    <div>
      <Container className="my-5">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
