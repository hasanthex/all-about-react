import React from "react";
import {Link} from "react-router-dom";

export default function Content() {
    return (
        <div className="container text-center background">
            <div className="row sec-div">
                <div className="col-lg-12">
                    Table of content
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 inner-div">
                    Basic
                </div>
                <div className="col-lg-3 inner-div">
                    State
                </div>
                <div className="col-lg-3 inner-div">
                    Props
                </div>
                <div className="col-lg-3 inner-div">
                    <Link to="/hooks" > Hooks </Link>
                </div>
            </div>
        </div>
    )
}