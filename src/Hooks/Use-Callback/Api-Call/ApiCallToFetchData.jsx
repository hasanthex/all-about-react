import React, { useState, useEffect, useCallback } from 'react';

function ApiCallToFetchData() {

    const [data, setData] = useState(null);

    const [id, setId] = useState(1);

    const fetchData = useCallback(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <button onClick={() => setId(id + 1)}>Next Post</button>

            <button onClick={() => setId(1)}>1st Post</button>

            <button onClick={() => setId(2)}>2nd Post</button>

            <pre>{data && JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default ApiCallToFetchData;