import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleService = (props) => {
  const { courseTitle, price, img, mentor } = props.service;
  return (
    <div>
      <Col>
        <Card height="600">
          <Card.Img variant="top" src={img} height="300" />
          <Card.Body>
            <Card.Title>Subject: {courseTitle}</Card.Title>
            <Card.Text>Mentor : {mentor}</Card.Text>
            <Card.Text>price: {price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleService;
