import React, { useEffect } from "react";
import { useCoinContext } from "../../contexts/CoinContext";
import RenderLoading from '../common/utils/RenderLoading';
import { Row, Col, Card, Alert, Container } from "react-bootstrap";

const CurrentPrice = () => {
  const { coinsApi } = useCoinContext();

  useEffect(()=>{
    coinsApi.loading();
    coinsApi.getCoins();
    setInterval(() => (coinsApi.getCoins()), 5000);
  }, []);

  return (
    <Container className="coins-bg rounded">
      <Alert className="justify-content-center" variant='primary'>The first part is a real time price about BTC, ETH and LTC.</Alert>
      {coinsApi.state.loading && !coinsApi.state.errorMessage ? (
          <RenderLoading />
        ) : 
      (<Row>
        {Object.keys(coinsApi.state.data).map((key, index) => (
          <Col key={index} className="col-4 dog-card-margin">
            <Card className="text-center" bg="info">
              <Card.Body>
                <Card.Title>${coinsApi.state.data[key]}</Card.Title>
                <Card.Text>1 {key.toUpperCase()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>)}
    </Container>
  );
};

export default CurrentPrice;