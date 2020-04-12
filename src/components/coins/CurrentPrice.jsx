import React, { useEffect } from "react";
import { useCoinContext } from "../../contexts/CoinContext";
import RenderLoading from '../common/utils/RenderLoading';
import { Row, Col, Card, Alert, Container } from "react-bootstrap";

const CurrentPrice = () => {
  const { coinsApi } = useCoinContext();

  useEffect(()=>{
    coinsApi.loading();
    coinsApi.getCoins();
    // setInterval(() => (coinsApi.getCoins()), 10000);//When it is switched to the other link it will show the warning in the comment. 
    //to do abort soon
    /*
    Our component “subscribes” to the promise, but it never “unsubscribes” or cancels the request. 
    If for any reason, our component is unmounted before the promise resolves, our code will try to “set state” (calling setBananas) on an unmounted component. This will throw a warning:
    Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
    To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    */ 
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