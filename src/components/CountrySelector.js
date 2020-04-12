import React, { useState } from 'react'
import fetchStat from "./StatFetch"
import StatView from "./StatView"
import { Spin } from 'antd';
import LineChart from "./LineChart"

export default function CountrySelector() {
    const [selectedCountry, setCountry] = useState('Bangladesh');

    const fetchResult = fetchStat("https://covid19.mathdro.id/api/countries");

    const stats = fetchResult[0];

    function handleChange(event) {
        setCountry(event.target.value);
    }


    if (!fetchResult[0]) return <p style={{ textAlign: "center" }}> <Spin /></p>;
    if (fetchResult[1]) return <p style={{ textAlign: "center" }}> {fetchResult[1]} </p>;

    return (
        <div>
            <div>
                <div class="ui violet message row">
                  
                        <div class="content " style={{ margin: "auto", display: "flex", flexDirection: "row" }}>

                            <div class="header" style={{ marginRight: "10px" }}>Select desired country</div>
                            <select
                                onChange={handleChange}
                                className="form-control"
                            >

                                {Object.entries(stats.countries).map(([index]) => (
                                    <option
                                        key={index}
                                        value={stats.countries[index].name}
                                        selected={selectedCountry === stats.countries[index].name}
                                    >
                                        {stats.countries[index].name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    
                </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
                <div className="col">
                    <div>
                        <StatView url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
                            header={selectedCountry} col="col col-md-4 col-sm-4 col-6" />
                    </div>
                </div>
                <div className="col">

                    <div class="ui card" style={{ width: " 100%" }}>
                        <div class="content">
                            <div class="header">
                                History Graph of {selectedCountry}
                            </div>
                        </div>
                        <div class="content">
                            <div class="header">
                                <LineChart countryName={selectedCountry} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
}