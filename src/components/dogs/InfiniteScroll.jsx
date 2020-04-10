import React, { useEffect } from "react";
import { useEndlessContext } from "../../contexts/EndlessContext";
import { Row, Col, Alert, Card, Container } from "react-bootstrap";

const InfiniteScrolls = () => {
  const { endlessApi } = useEndlessContext();

  const DOGS_API_URL = "https://dog.ceo/api/breeds/image/random/12";

  useEffect(() => {
    endlessApi.loading();
    endlessApi.getData(DOGS_API_URL);
    window.addEventListener("scroll", () => {
      endlessApi.isScrolling(DOGS_API_URL);
    });
  }, [])

  return (
    <Container>
      <Alert variant='info'>This is an infinite scroll page to show dogs pictures.</Alert>
      {endlessApi.state.loading && !endlessApi.state.errorMessage ? (
          <span>loading... </span>
        ) : 
      (<Row>
         {endlessApi.state.data && endlessApi.state.data.map((img, index) => (
          <Col key={index} className="col-4 dog-card-margin">
            <Card>
              <Card.Img
                className='card-img-top mx-auto d-block dog-pic'
                variant='top'
                src={img}
              />
            </Card>
          </Col>
        ))}
      </Row>)}
    </Container>
  );
};

export default InfiniteScrolls;