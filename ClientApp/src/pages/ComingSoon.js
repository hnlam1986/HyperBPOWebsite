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
export class ComingSoon extends Component {
    static displayName = ComingSoon.name;

    render() {
        return (
            <div>
                <section className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="assets/img/coming-soon-page.png" alt="coming soon" />
                                    <h3>Thank you for your coming</h3>
                                    <p>We are try our best to complete this page as soon as possible. Please come back later.</p>
                                    <Link to="/" className="default-btn-one">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

