import React, { useState } from 'react'
import FetchChartData from "./FetchChartData"
import { Line } from 'react-chartjs-2';
import { Row, Col, Spin } from 'antd';

export default function Chart(props) {


  const fecthResult = FetchChartData();
  const confirmedList = [];
  const recoveredList = [];
  const deathsList = [];
  const dateList = [];
  if (fecthResult) {
    const countryResult = fecthResult[props.countryName]

    countryResult.forEach(({ date, confirmed, recovered, deaths }) => {
      confirmedList.push(confirmed);
      recoveredList.push(recovered);
      deathsList.push(deaths);
      dateList.push(date);


    });
  }
  if (dateList.length === 0 || confirmedList.length === 0)
    return <p style={{ textAlign: "center" }}> <Spin /> </p>;

  return (
    <div>
      <div>
        {
          // for (let [key, value] of Object.entries(stats)) {
          //   if (key === "Afghanistan") break;
          // }
          <Line data={{
            labels: dateList,
            datasets: [
              {
                label: "Confirmed",
                fill: false,
                borderColor: "#0d47a1",
                borderWidth: 1.5,
                pointRadius: 2.5,
                data: confirmedList
              },
              {
                label: "Deaths",
                fill: false,
                borderColor: "red",
                borderWidth: 1.5,
                pointRadius: 2.5,
                data: deathsList
              },
              {
                label: "Recoverred",
                fill: false,
                borderColor: "green",
                borderWidth: 1.5,
                pointRadius: 2.5,
                data: recoveredList
              },

            ]
          }}
            options={{
              animationEnabled: true,
              
              legend: {
                position: "top",
                labels: {
                  boxWidth: 10
                },
              },
              scales: {
                xAxes: [
                  {
                    ticks: { display: true }
                  }
                ]
              }
            }}
          />
        }
      </div>
    </div>
  )
}