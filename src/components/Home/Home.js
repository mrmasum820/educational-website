import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import SingleService from "../SingleService/SingleService";
import SlideShow from "../SlideShow/SlideShow";
// home page
const Home = () => {
  const [services] = useServices();
  return (
    <div>
      <SlideShow></SlideShow>
      <Container>
        <Row xs={1} md={4} className="g-4">
          {services.slice(0, 4).map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
