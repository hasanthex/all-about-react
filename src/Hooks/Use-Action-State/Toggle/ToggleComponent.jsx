import React from 'react';
import useActionState from "../counter/ActionState";

export default function FormSubmit(){

    const [state, dispatch] = useActionState({isOpen: false});

    const toggleModal = () => {
        dispatch({type: "TOGGLE_COMPONENT"});
    }

    return(
        <div className="container text-center background">
            <div className="row sec-div">
                <div className="col-lg-12">
                    useActionState - Toggle Component
                </div>
            </div>
            <button onClick={toggleModal}> Toggle Modal </button>
            {state.isOpen && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, tempora!</p>}
        </div>
    )
}