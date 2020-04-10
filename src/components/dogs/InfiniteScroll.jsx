import React, { useEffect } from "react";
import { useEndlessContext } from "../../contexts/EndlessContext";
import { Row, Col, Alert, Card, Container } from "react-bootstrap";

const InfiniteScrolls = () => {
  const { endlessApi } = useEndlessContext();

  useEffect(() => {
    endlessApi.loading();
    endlessApi.getData();
    window.addEventListener("scroll", () => {
      endlessApi.isScrolling();
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