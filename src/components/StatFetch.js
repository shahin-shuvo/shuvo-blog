import React, { useState, useEffect } from 'react'

export default function StatFetch(url) {
    const [stats, setStats] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(url)
                .then(response =>response.json() )
                .catch(error => {setError(error)} );
            setStats(data);
            
        }
        fetchData();
    }, [url]);
   // console.log("Fetch Page",stats);
    return [stats, error];
}