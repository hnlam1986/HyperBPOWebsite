import React, { Component } from 'react';
import { Link } from "react-router-dom";
/*import { Helmet } from "fusion-plugin-react-helmet-async";*/
//import test from '../assets/js/main.js'

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
export class Error404 extends Component {
    static displayName = Error404.name;

    render() {
        return (
            <div>
                <section className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="assets/img/404.png" alt="error"/>
                                        <h3>Page Not Found</h3>
                                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                        <Link to="/" className="default-btn-one">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*{AddLibrary(*/}
                {/*    "assets/js/main.js"*/}
                {/*)}*/}
            </div>
        );
    }
}

