import React, { useState, useEffect } from 'react'
import fetchStat from "./StatFetch"
import { Row, Col, Spin } from 'antd';


export default function StatView(props) {
    const fecthResult = fetchStat(props.url);
    const statData = fecthResult[0];
    const error = fecthResult[1]
 
    if (!statData) return <p style={{ textAlign: "center" }}> <Spin /> </p>;
    if (error) return <p> {error} </p>;
    return (
        <div >
            <div class="ui card" style={{ width: " 100%" }}>
                <div class="content" style={{background: "#0a0f3c", color: "white"}}>
                    <div class="header" style={{background: "#0a0f3c", color: "white"}}>
                        {props.header} Cases
                    </div>
                </div>
                <div class="content" style = {{background: ""}}>
                    <div className = "row">
                        <div className = {props.col}>
                            <div class="ui cards">
                                <div class="card">
                                    <div class="content" >
                                        <div class="header" style={{ textAlign: "center" }}>
                                            {statData.confirmed.value}
                                        </div>
                                    </div>
                                    <div class="ui bottom attached button" style={{ color: "blue" }}>
                                        Confirmed
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className = {props.col}>
                            <div class="ui cards">
                                <div class="card">
                                    <div class="content">
                                        <div class="header" style={{ textAlign: "center" }}>
                                            {statData.recovered.value}
                                        </div>
                                    </div>
                                    <div class="ui bottom attached button" style={{ color: "green" }}>
                                        Recovered
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className = {props.col}>
                            <div class="ui cards">
                                <div class="card">
                                    <div class="content" >
                                        <div class="header" style={{ textAlign: "center" }}>
                                            {statData.deaths.value}
                                        </div>
                                    </div>
                                    <div class="ui bottom attached button" style={{ color: "red" }}>
                                        Deaths
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}