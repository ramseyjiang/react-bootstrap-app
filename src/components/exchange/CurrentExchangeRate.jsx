import React, {useEffect} from "react";
import { Table, Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useExchangeContext } from "../../contexts/ExchangeContext";
import {year, month, day} from "../common/utils/Date.js"

const CurrentExchangeRate = () => {
  const { exchangeApi } = useExchangeContext();

  useEffect(() => {
    exchangeApi.getLatestExchangeRate();
  }, []);

  const options = {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }],
    },
    title: {
      display: true,
      text: "USD Exchanges Rates",
    },
  };
  
  return (
    <Container className="exchange-rate-bg rounded">
      <h3 className="text-center">Exchange rates on {day()}-{month()}-{year()}</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {Object.keys(exchangeApi.state.data.tableKeys).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            {exchangeApi.state.data.initialized && Object.keys(exchangeApi.state.data.tableKeys).map(key => (
              <td key={key}>{Math.floor(Number(exchangeApi.state.data.rates[key]) * 100) / 100}</td>
            ))}
          </tr>
        </tbody>
      </Table>

      <div style={{ height: "200px", width: "70vw", margin: "0 auto" }}>
        <Bar data={exchangeApi.state.data.barData} options={options} />
      </div>
    </Container>
  );
};

export default CurrentExchangeRate;