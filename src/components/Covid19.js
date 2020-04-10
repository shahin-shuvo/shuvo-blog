import React, { useState, useEffect } from 'react'
import StatView from "./StatView"
import CountrySelector from "./CountrySelector"
import Comparison from "./Comparison"



export default function Covid19() {

    return (
        <div>

            <div>
                <StatView url="https://covid19.mathdro.id/api" header="Overall"
                    col="col col-md-4 col-sm-4 col-6" />
            </div>
            <div style = {{ border: "1.5px #191e4d solid", marginTop: "10px", borderRadius: "2px"}}>
                <div style = {{margin: "5px"}}>
                <CountrySelector/>
                </div>
               
            </div>
            <div>
                <Comparison />
            </div>


            

            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p>
                    <a href="https://github.com/CSSEGISandData/COVID-19">Serving data from John Hopkins University CSSE
                </a>
                </p>
                <p> Served data using api from
                    <a href="https://covid19.mathdro.id"> mathdroid</a> &  <a href="https://github.com/pomber/covid19">pomber</a>
                </p>
            </div>
        </div>
    )
}