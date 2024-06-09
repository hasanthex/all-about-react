import React from 'react';
import useActionState from "./ActionState";

export default function Counter(){

    const [state, dispatch]=useActionState({count: 0});

    return (
        <div className="container text-center background">
            <div className="row sec-div">
                <div className="col-lg-12">
                    useActionState - Counter Apps
                </div>
            </div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'COUNTER_INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'COUNTER_DECREMENT'})}>Decrement</button>
        </div>
    )
}