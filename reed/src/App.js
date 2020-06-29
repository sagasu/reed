import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';


export default function App() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('reacthooks');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef()

    const getResults = async () => {
        if(query !== null && query !== undefined){
            setLoading(true);
        }
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
        <div className="container max-w-md mx-auto p-4 m-2 bg-gray-200 shadow-lg rounded">
            <img src="https://icon.now.sh/hackaday" alt="hacking" className="float-right h-12"></img>
            <h1 className="text-gray-600">Hacker News</h1>
            <form onSubmit={handleSearch} className="mb-2">
                <input ref={searchInputRef} type="text" onChange={event => setQuery(event.target.value)} value={query} className="border p-1 rounded"></input>
                <button id="search-btn" type="submit" className="bg-green-300 rounded m-1 p-1">Search</button>
                <button type="button" onClick={handleClearSearch} className="bg-orange-300 text-white rounded m-1 p-1">Clear</button>
            </form>
            { loading ? (<div className="font-bold">Loading...</div>) : 
            <ul className="list-reset leading-normal">
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url} className="text-blue-500 hover:text-blue-900">{result.title}</a>
                    </li>
                ))}
            </ul>
            }
            {error && <div className="text-red-300 font-bold">{error.message}</div>}
        </div>
    );
}