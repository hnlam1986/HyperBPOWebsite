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
export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div className="home-section">
                    <div className="d-table">
                        <div className="home-info d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="main-banner-content">
                                            <ul className="social-icon-list">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                            <h1>{i18n.t("home_section_main_banner_content_h1")}</h1>
                                            <p>{i18n.t("home_section_main_banner_content_p")}</p>
                                            <div className="banner-btn">
                                                <a className="default-btn-one" href="#services">{i18n.t("our_service")} <span></span></a>
                                                <a className="default-btn-two" href="/contact">{i18n.t("contact_us")} <span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12" data-tilt="" style={{ willChange: 'transform', 'transform': 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }}>
                                        <div className="banner-image">
                                            <img src="assets/img/home-font.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creative-shape">
                        <img src="assets/img/home-bottom-shape.png" alt="svg shape" />
                    </div>
                </div>
                <section className="services-section section-bottom-padding" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" id="services">
                                <div className="section-title">
                                    <h6 className="sub-title">{i18n.t("what_we_provide")}</h6>
                                    <h2>{i18n.t("our_services")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-item">
                                    <div className="services-icon">
                                        <img src="/assets/img/icon/services/data-entry.jpg"></img>
                                    </div>
                                    <h3>{i18n.t("data_entry")}</h3>
                                    <p>{i18n.t("data_entry_service_intro")}</p>
                                    <div className="services-btn">
                                        <a href="/data-entry" className="read-more"><i className="bi bi-arrow-right-short"></i> {i18n.t("read_more")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-item">
                                    <div className="services-icon">
                                        <img src="/assets/img/icon/services/scanning-service.jpg"></img>
                                    </div>
                                    <h3>{i18n.t("doc_scanning")}</h3>
                                    <p>{i18n.t("document_scanning_service_intro")}</p>
                                    <div className="services-btn">
                                        <a href="/document-scanning" className="read-more"><i className="bi bi-arrow-right-short"></i> {i18n.t("read_more")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-item">
                                    <div className="services-icon">
                                        <img src="/assets/img/icon/services/document_adjustment.jpg"></img>
                                    </div>
                                    <h3>{i18n.t("doc_adjusting")}</h3>
                                    <p>{i18n.t("document_adjusting_service_intro")}</p>
                                    <div className="services-btn">
                                        <a href="/document-adjusting" className="read-more"><i className="bi bi-arrow-right-short"></i> {i18n.t("read_more")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-item">
                                    <div className="services-icon">
                                        <img src="/assets/img/icon/services/image-processing.jpg"></img>
                                    </div>
                                    <h3>{i18n.t("img_processing")}</h3>
                                    <p>{i18n.t("image_processing_service_intro")}</p>
                                    <div className="services-btn">
                                        <a href="/coming-soon" className="read-more"><i className="bi bi-arrow-right-short"></i> {i18n.t("read_more")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-item">
                                    <div className="services-icon">
                                        <img src="/assets/img/icon/services/labeling.jpg"></img>
                                    </div>
                                    <h3>{i18n.t("data_labeling")}</h3>
                                    <p>{i18n.t("data_labeling_service_intro")}</p>
                                    <div className="services-btn">
                                        <a href="/data-labeling" className="read-more"><i className="bi bi-arrow-right-short"></i> {i18n.t("read_more")}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services-item">
                                    <div className="services-icon">
                                        <img src="/assets/img/icon/services/call-center.jpg"></img>
                                    </div>
                                    <h3>{i18n.t("call_center")}</h3>
                                    <p>{i18n.t("call_center_service_intro")}</p>
                                    <div className="services-btn">
                                        <a href="/coming-soon" className="read-more"><i className="bi bi-arrow-right-short"></i> {i18n.t("read_more")}</a>
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

