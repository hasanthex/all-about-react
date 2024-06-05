import React from 'react';
import useActionState from "./ActionState";


function listItem(data){
    return(
        <ol>
            {data.map((item) => (
                <li key={item.id}> {item.title} </li>
            ))}
        </ol>
    )
}
export default function FetchData(){
    const [state, dispatch] = useActionState({});

    const fetchData = async () => {
        dispatch({
            type: "FETCH_START",
            msg: "Fetching Data..."
        });

        try {
            const response = await fetch("https://jsonplaceholder.org/posts");
            const result= await response.json();

            dispatch({
                type: "FETCH_SUCCESS",
                msg: "Fetching Successfully",
                payload: result
            });

        } catch (error) {
            console.log(error.message);
            dispatch({
                type: "FETCH_ERROR",
                error: "Data Not Found."
            });
        }
    }

    return(
        <>
            <button onClick={fetchData}>Fetch Data</button>

            { state.loading && "Fetching... ..."}

            { (state.loading == false && state.isError) && `Error Occurred Due To # ${state.msg}`}

            { (state.loading == false && !state.isError) && listItem(state.data)}
        </>
    );
}