import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { //This hook runs a function for every render of the component.
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }) // This is the fetch API. This is asynchronous meaning it takes some time to do so we can use the .then block
                .then(res => {
                    if(!res.ok) { // This fires if the response is not ok.
                        throw Error('Could not fetch the stinky data. Try refreshing the page or try again later.');
                    }
                    return res.json(); // This passes the data into a JS object for us. This is also asynchronous.
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => { // This will catch any type of network error for example, not being ableto connect to the server.
                    console.log(err);
                    console.log(err.name);
                    console.log(err.message); // Will say "Failed to fetch" if it can't connect to the server. "Failed to execute 'fetch' on 'Window': The user aborted a request." This is what it says for me.
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        },);

        return () => abortCont.abort();

    }, [url]); // Whenever the contents of "url" changes, the useEffect hook will run. "url" is known as a dependency of useEffect.

    return { data, isPending, error };
}

export default useFetch;