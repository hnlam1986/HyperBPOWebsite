import React, { Component } from 'react';
import { Link } from "react-router-dom";
/*import { Helmet } from "fusion-plugin-react-helmet-async";*/
//import test from '../assets/js/main.js'
import i18n from 'i18next';
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
export class DataEntry extends Component {
    static displayName = DataEntry.name;

    render() {
        return (
            <div>
                <div className="page-title-area data-entry">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{i18n.t("data_entry_and_data_conversion_services")}</h2>
                                    <ul>

                                        <li>{i18n.t("data_entry_content")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="feature-section pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2 className="sub-title">{i18n.t("outstanding_benefits")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/cost.png" alt="icon"/>
                                    <h3>{i18n.t("data_entry_outstanding_1")}</h3>
                                    <p>{i18n.t("data_entry_outstanding_1_content")}</p>
                                        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/qc.png" alt="icon"/>
                                    <h3>{i18n.t("data_entry_outstanding_2")}</h3>
                                    <p>{i18n.t("data_entry_outstanding_2_content")}</p>
                                        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/safe.jpg" alt="icon"/>
                                    <h3>{i18n.t("data_entry_outstanding_3")}</h3>
                                    <p>{i18n.t("data_entry_outstanding_3_content")}</p>
                                        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/edit.png" alt="icon" />
                                    <h3>{i18n.t("data_entry_outstanding_4")}</h3>
                                    <p>{i18n.t("data_entry_outstanding_4_content")}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview-section pt-100 operation-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="overview-content">
                                    <h2>{i18n.t("implementation_method")}</h2>
                                    <p>{i18n.t("implementation_method_content")}</p>
                                    <ul className="features-list">
                                        <li>
                                            <span><b>{i18n.t("onside")}</b><br />{i18n.t("onside_content")}</span>
                                        </li>
                                        <li> <span><b>{i18n.t("offside")}</b><br />{i18n.t("offside_content")}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services-section-three section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="overview-content">
                                <h2>{i18n.t("implementation_process")}</h2>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-services-three-item">
                                    <div class="services-icon">
                                        <img src="assets/img/icon/keyboard.png" alt="svg icon"></img>
                                    </div>
                                    <div class="services-three-content">
                                        <h3>{i18n.t("data_entry")}</h3>
                                        <p></p>
                                        <ul class="features-list">
                                            <li><span>{i18n.t("receive_documents")}</span></li>
                                            <li><span>{i18n.t("enter_data")}</span></li>
                                            <li><span>{i18n.t("check_data")}</span></li>
                                            <li><span>{i18n.t("render_and_transfer_data")}</span></li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-services-three-item">
                                    <div class="services-icon">
                                        <img src="assets/img/icon/scanner.jpg" alt="svg icon"></img>
                                    </div>
                                    <div class="services-three-content">
                                        <h3>{i18n.t("digitizing")}</h3>
                                        <p></p>
                                        <ul class="features-list">
                                            <li><span>{i18n.t("receive_documents")}</span></li>
                                            <li><span>{i18n.t("document_scanning")}</span></li>
                                            <li><span>{i18n.t("content_identification")}</span></li>
                                            <li><span>{i18n.t("data_formatting")}</span></li>
                                            <li><span>{i18n.t("quality_control")}</span></li>
                                            <li><span>{i18n.t("render_and_transfer_data")}</span></li>
                                        </ul>
                                        
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
                
                {/*{AddLibrary(*/}
                {/*    "assets/js/main.js"*/}
                {/*)}*/}
            </div>
        );
    }
}

