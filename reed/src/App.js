import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';


export default function App() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('reacthooks');
    const [loading, setLoading] = useState('false');
    const [error, setError] = useState(null);
    const searchInputRef = useRef()

    const getResults = async () => {
        setLoading(true);
        try{
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setResults(response.data.hits);
        }catch(err){
            setError(err);
        }
        
        setLoading(false);
    };

    useEffect(() => {
    }, []);

    const handleSearch = event => {
        event.preventDefault();
        getResults();
    };

    const handleClearSearch = () => {
        setQuery("");
        searchInputRef.current.focus();
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <input ref={searchInputRef} type="text" onChange={event => setQuery(event.target.value)} value={query}></input>
                <button id="search-btn" type="submit" >Search</button>
                <button type="button" onClick={handleClearSearch}>Clear</button>
            </form>
            { loading ? (<div>Loading...</div>) : 
            <ul>
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
            </ul>
            }
            {error && <div>{error.message}</div>}
        </>
    );
}