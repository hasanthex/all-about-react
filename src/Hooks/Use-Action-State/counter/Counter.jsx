import React from 'react';
import useActionState from "./ActionState";

export default function Counter(){

    const [state, dispatch]=useActionState({count: 0});

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'COUNTER_INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'COUNTER_DECREMENT'})}>Decrement</button>
        </>
    )
}