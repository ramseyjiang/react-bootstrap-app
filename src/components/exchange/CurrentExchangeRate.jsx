import React, {useEffect} from "react";
import { Table } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useExchangeContext } from "../../contexts/ExchangeContext";

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
    <>
      <h2 className="text-center">Rates as of {exchangeApi.state.data.date}</h2>

      <Table style={{ width: "60vw", margin: "0 auto" }}>
        <thead>
          <tr>
            <th>{' '}</th>
            {Object.keys(exchangeApi.state.data.tableKeys).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 USD</td>
            {exchangeApi.state.data.initialized && Object.keys(exchangeApi.state.data.tableKeys).map(key => (
              <td key={key}>{Math.floor(Number(exchangeApi.state.data.rates[key]) * 100) / 100}</td>
            ))}
          </tr>
        </tbody>
      </Table>

      <div style={{ height: "200px", width: "90vw", margin: "0 auto" }}>
        <Bar data={exchangeApi.state.data.barData} options={options} />
      </div>
    </>
  );
};

export default CurrentExchangeRate;