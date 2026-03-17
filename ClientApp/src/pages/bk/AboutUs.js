import React, { Component } from 'react';
/*import { Helmet } from "fusion-plugin-react-helmet-async";*/
//import test from '../assets/js/main.js'
import i18n from 'i18next';
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
export class AboutUs extends Component {
    static displayName = AboutUs.name;

    render() {
        return (
            <div>
                <div className="page-title-area about-us">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content ">
                                    <h2>{i18n.t("home_section_main_banner_content_h1")}</h2>
                                    <ul>
                                        <li>{i18n.t("home_section_main_banner_content_p")}</li>
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
                                    <img src="assets/img/icon/vision.jpg" alt="icon"/>
                                    <h3>{i18n.t("vision")}</h3>
                                    <p>{i18n.t("vision_content")}<br /></p><br />
                                        {/*<div className="feature-btn-box">*/}
                                        {/*    <a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>*/}
                                        {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/mission.jpg" alt="icon"/>
                                    <h3>{i18n.t("mission")}</h3>
                                    <p>{i18n.t("mission_content")}<br /></p><br />
                                        {/*<div className="feature-btn-box">*/}
                                        {/*    <a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>*/}
                                        {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/core-value.jpg" alt="icon"/>
                                    <h3>{i18n.t("core_value")}</h3>
                                    <p>{i18n.t("core_value_content")}</p><br /><br /><br />
                                        {/*<div className="feature-btn-box">*/}
                                        {/*    <a href="#" className="read-more"><i className="bi bi-arrow-right-short"></i> Learn More</a>*/}
                                        {/*</div>*/}
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
                                    <h6 className="sub-title">{i18n.t("we_are_one_of")}</h6>
                                    <h2>{i18n.t("expert_team")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/Software-Development.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>{i18n.t("software_development_expert")}</h3>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/it-network.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>{i18n.t("it_network_expert")}</h3>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/Digitalization.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>{i18n.t("digitization_expert")}</h3>
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/team/languages.jpg" alt="team"/>
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div className="team-info">
                                        <h3>{i18n.t("languages_expert")}</h3>
                                      
                                    </div>
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
                                    <h6 className="sub-title">{i18n.t("want_to_work_with_us")}</h6>
                                    <h2>{i18n.t("want_to_work_with_us_intro")}</h2>
                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.</p>*/}
                                    <div className="hire-btn">
                                        <a className="default-btn" href="tel:12345678">{i18n.t("call_now")}<span></span></a>
                                        <a className="default-btn-one" href="/contact">{i18n.t("contact_us")}<span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partner-section pt-100 pb-70">
                    <div className="container">
                        <div className="partner-title">

                            <h2>{i18n.t("our_customers")}</h2>
                        </div>
                        <div className="partner-list">
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/crown.jpg" alt="image" className="crown" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/ipsen.jpg" alt="image" className="ipsen" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/jvpc.jpg" alt="image" className="jvpc" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/zoetis-orange.jpg" alt="image" className="zoetis" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/pharmaQ.jpg" alt="image" className="pharmaq" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/klavis.jpg" alt="image" className="klavis" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#0">
                                    <img src="assets/img/partner/moneyforward.jpg" alt="image" className="moneyforward" />
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

