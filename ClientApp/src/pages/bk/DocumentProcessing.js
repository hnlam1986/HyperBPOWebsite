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
export class DocumentProcessing extends Component {
    static displayName = DocumentProcessing.name;

    render() {
        return (
            <div>
                <div className="page-title-area bpo-service">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>Document Processing Service</h2>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Document Processing Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="feature-section pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/feature-icon-1.svg" alt="icon"/>
                                        <h3>Flexibility &amp; Responsive</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
                                        <div className="feature-btn-box">
                                            <a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/feature-icon-2.svg" alt="icon"/>
                                        <h3>Dedicated Teams</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
                                        <div className="feature-btn-box">
                                            <a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/feature-icon-3.svg" alt="icon"/>
                                        <h3>Focusing on Business</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
                                        <div className="feature-btn-box">
                                            <a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-area section-padding">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h6 className="sub-title">About Our Company</h6>
                                    <h2>Providing Your Business With A Quality IT Service is Our Passion</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim</p>
                                    <div className="skills">
                                        <div className="skill-item">
                                            <h6>IT Consulting <em>90%</em></h6>
                                            <div className="skill-progress">
                                                <div className="progres" data-value="90%" ></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <h6>Cloud Solutions <em>75%</em></h6>
                                            <div className="skill-progress">
                                                <div className="progres" data-value="75%" ></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <h6>Managed IT Service <em>85%</em></h6>
                                            <div className="skill-progress">
                                                <div className="progres" data-value="85%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-btn-box">
                                        <a className="default-btn" href="about.html">Learn More <span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src="assets/img/about.jpg" alt="About image"/>
                                        <div className="years-design">
                                            <h2>23</h2>
                                            <h5>Years Of Experience</h5>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="counter-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 counter-item">
                                <div className="single-counter">
                                    <div className="counter-contents">
                                        <h2>
                                            <span className="counter-number">23</span>
                                            <span>+</span>
                                        </h2>
                                        <h3 className="counter-heading">Years Helping Business</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 counter-item">
                                <div className="single-counter">
                                    <div className="counter-contents">
                                        <h2>
                                            <span className="counter-number">250</span>
                                            <span>+</span>
                                        </h2>
                                        <h3 className="counter-heading">Working Employees</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 counter-item">
                                <div className="single-counter">
                                    <div className="counter-contents">
                                        <h2>
                                            <span className="counter-number">4500</span>
                                            <span>+</span>
                                        </h2>
                                        <h3 className="counter-heading">Complete Projects</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 counter-item">
                                <div className="single-counter">
                                    <div className="counter-contents">
                                        <h2>
                                            <span className="counter-number">3000</span>
                                            <span>+</span>
                                        </h2>
                                        <h3 className="counter-heading">Happy Customers</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h6 className="sub-title">Team Member</h6>
                                    <h2>Expert Team</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/team-1.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>Ava Farrington</h3>
                                        <span>Founder, CEO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/team-2.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>Kevin Haley</h3>
                                        <span>Co-Founder, CTO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/team-3.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>Alishia Fulton</h3>
                                        <span>Chief Creative Officer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/team-4.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>Lucas Martinez</h3>
                                        <span>Creative Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="workprocess-section bg-grey section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h6 className="sub-title">4 Step Work Process</h6>
                                    <h2>Working Process</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/workprocess-icon-1.svg" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>Discover</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                    </div>
                                    <div className="workprocess-number-bg"><span>01</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/workprocess-icon-2.svg" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>Design &amp; Development</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                    </div>
                                    <div className="workprocess-number-bg"><span>02</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/workprocess-icon-3.svg" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>Install &amp; Testing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                    </div>
                                    <div className="workprocess-number-bg"><span>03</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/workprocess-icon-4.svg" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>Project Delivery</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                                    </div>
                                    <div className="workprocess-number-bg"><span>04</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hire-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12">
                                <div className="hire-content">
                                    <h6 className="sub-title">Want to work with us?</h6>
                                    <h2>Digitally Transform &amp; Grow Your Business</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.</p>
                                    <div className="hire-btn">
                                        <a className="default-btn" href="tel:12345678">Call Now<span></span></a>
                                        <a className="default-btn-one" href="contact.html">Contact Us<span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partner-section pt-100 pb-70">
                    <div className="container">
                        <div className="partner-title">
                            <h6 className="sub-title">Trusted By Over 1500</h6>
                            <h2>Our Customers</h2>
                        </div>
                        <div className="partner-list">
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-1.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-2.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-3.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-4.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-5.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-6.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-7.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-8.png" alt="image"/>
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/client-1.png" alt="image"/>
                                </a>
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

