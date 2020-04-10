import React from "react";
import { useState, useEffect } from "react";

export default function DesiredCountryData() {
    const [confirmed, setConfirmed] = useState();
   
    useEffect(() => {
        async function fetchData() {
              fetch("https://pomber.github.io/covid19/timeseries.json")
                .then(response => response.json())
                .then(data => {
                    setConfirmed( data)
                });
               
               

        }
        fetchData();

    }, []);


    return confirmed;
}
