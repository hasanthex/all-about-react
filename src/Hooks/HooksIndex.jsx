import React from "react";
import {Link} from "react-router-dom";

export default function HooksIndex() {
    return (
        <>
            <div className="container text-center background">
                <div className="row sec-div">
                    <div className="col-lg-12">
                        useActionState
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 inner-div">
                        <Link to="/hooks/use-action-state/counter"> Counter </Link>
                    </div>
                    <div className="col-lg-3 inner-div">
                        <Link to="/hooks/use-action-state/fetch-api-data"> Api Data Fetch </Link>
                    </div>
                    <div className="col-lg-3 inner-div">
                        <Link to="/hooks/use-action-state/form"> Form </Link>
                    </div>
                    <div className="col-lg-3 inner-div">
                        <Link to="/hooks/use-action-state/toggle"> Toggle </Link>
                    </div>
                </div>
            </div>

            <div className="container text-center background">
                <div className="row sec-div">
                    <div className="col-lg-12">
                        useCallback
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 inner-div">
                        <Link to="/hooks/use-callback/api-to-fetch-data"> Api to Fetch Data </Link>
                    </div>
                    <div className="col-lg-3 inner-div">

                    </div>
                    <div className="col-lg-3 inner-div">

                    </div>
                    <div className="col-lg-3 inner-div">

                    </div>
                </div>
            </div>
        </>
    )
}


