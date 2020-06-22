import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function App() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('reacthooks'); 

    const getResults = async () => {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
        console.log(response.data);
        setResults(response.data.hits);
    };

    useEffect(() => {
        getResults();
    }, [query]);

    return (
        <>
            <input type="test" onChange={event => setQuery(event.target.value)} value={query}></input>
            <ul>
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}