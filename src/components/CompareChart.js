import React from 'react'
import FetchChartData from "./FetchChartData"
import { Line } from 'react-chartjs-2';
import { Spin } from 'antd';

export default function CompareChart() {


    const fecthResult = FetchChartData();
    const USA = [];
    const BD = [];
    const IND = [];
    const PAK = [];
    const China = [];
    const Italy = [];
    const Bhutan = [];
    const FRA = []
    const dateList = [];
    if (fecthResult) {

        const countryResult1 = fecthResult["US"]
        countryResult1.forEach(({ date, confirmed, recovered, deaths }) => {
            USA.push(confirmed);
            dateList.push(date);


        });
        const countryResult2 = fecthResult["Bangladesh"]
        countryResult2.forEach(({ date, confirmed, recovered, deaths }) => {
            BD.push(confirmed);
            
        });
        const countryResult3 = fecthResult["India"]
        countryResult3.forEach(({ date, confirmed, recovered, deaths }) => {
            IND.push(confirmed);
            
        });
        const countryResult4 = fecthResult["Pakistan"]
        countryResult4.forEach(({ date, confirmed, recovered, deaths }) => {
            PAK.push(confirmed);
            
        });
        const countryResult5 = fecthResult["China"]
        countryResult5.forEach(({ date, confirmed, recovered, deaths }) => {
            China.push(confirmed);
            
        });

        const countryResult6 = fecthResult["Italy"]
        countryResult6.forEach(({ date, confirmed, recovered, deaths }) => {
            Italy.push(confirmed);
            
        });
        const countryResult7 = fecthResult["Bhutan"]
        countryResult7.forEach(({ date, confirmed, recovered, deaths }) => {
            Bhutan.push(confirmed);
            
        });
        const countryResult8 = fecthResult["France"]
        countryResult8.forEach(({ date, confirmed, recovered, deaths }) => {
            FRA.push(confirmed);
            
        });
    }
    if (dateList.length === 0 || USA.length === 0 || BD.length === 0)
        return <p style={{ textAlign: "center" }}> <Spin /> </p>;

    return (
        <div>
            <div>
                {
          
                    <Line data={{
                        labels: dateList,
                        datasets: [
                            {
                                label: "USA",
                                fill: false,
                                borderColor: "#0d47a1",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: USA
                            },
                            {
                                label: "BD",
                                fill: false,
                                borderColor: "green",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: BD
                            },
                            {
                                label: "IND",
                                fill: false,
                                borderColor: "yellow",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: IND
                            },
                            {
                                label: "PAK",
                                fill: false,
                                borderColor: "#b71c1c",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: PAK
                            },
                            {
                                label: "China",
                                fill: false,
                                borderColor: "red",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: China
                            },
                            {
                                label: "Italy",
                                fill: false,
                                borderColor: "black",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: Italy
                            },
                            {
                                label: "Bhutan",
                                fill: false,
                                borderColor: "#388e3c",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: Bhutan
                            },
                            {
                                label: "France",
                                fill: false,
                                borderColor: "#f44336",
                                borderWidth: 1.5,
                                pointRadius: 2.5,
                                data: FRA
                            },

                        ]
                    }}
                        options={{
                            animationEnabled: true,
                            title: "HHH",
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