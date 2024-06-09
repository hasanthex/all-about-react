import React from 'react';
import { Route, Routes } from "react-router-dom";

import FetchData from "./Hooks/Use-Action-State/Fetchdata/FetchData";
import Counter from "./Hooks/Use-Action-State/counter/Counter";
import FormSubmit from "./Hooks/Use-Action-State/Form-Submit/FormSubmit";
import ToggleComponent from "./Hooks/Use-Action-State/Toggle/ToggleComponent";
import ApiCallToFetchData from "./Hooks/Use-Callback/Api-Call/ApiCallToFetchData";


import Content from "./Content";
import HooksIndex from "./Hooks/HooksIndex";

export default function App() {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="/" element={ <Content /> } />

                    <Route path="/hooks" element={ <HooksIndex /> } />
                    <Route path="/hooks/use-action-state/counter" element={ <Counter /> } />
                    <Route path="/hooks/use-action-state/fetch-api-data" element={ <FetchData /> } />
                    <Route path="/hooks/use-action-state/form" element={ <FormSubmit /> } />
                    <Route path="/hooks/use-action-state/toggle" element={ <ToggleComponent /> } />

                    <Route path="/hooks/use-callback/api-to-fetch-data" element={ <ApiCallToFetchData /> } />

                </Routes>
            </div>
        </>
    )
}


