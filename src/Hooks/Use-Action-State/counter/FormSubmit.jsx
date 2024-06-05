import React from 'react';
import useActionState from "./ActionState";

export default function FormSubmit(){

    const [state, dispatch] = useActionState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const handleChange = (e) => {
        dispatch({
            type: "FORM_FIELD_VALUE_UPDATE",
            field: e.target.name,
            value: e.target.value
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" value={state.name} onChange={handleChange} placeholder="Name"/>
                <input name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
                <textarea name="message" value={state.message} onChange={handleChange} placeholder="Message"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}