import React  from 'react'
import fetchStat from "./StatFetch"
import { Spin } from 'antd';
import CompareChart from "./CompareChart"

export default function CountrySelector() {

    const fetchResult = fetchStat("https://covid19.mathdro.id/api/countries");


    if (!fetchResult[0]) return <p style={{ textAlign: "center" }}> <Spin /></p>;
    if (fetchResult[1]) return <p style={{ textAlign: "center" }}> {fetchResult[1]} </p>;

    return (
        <div>
            <div className="row" style={{ marginTop: "10px" }}>
                <div className="col">
                    <div class="ui card" style={{ width: " 100%" }}>
                        <div class="content" style={{background: "#0a0f3c", color: "white"}}>
                            <div class="header" style={{background: "#0a0f3c", color: "white"}}>
                                Comparison of confirmed cases among several countries
                            </div>
                        </div>
                        <div class="content">
                            <div class="header">
                                <CompareChart />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}