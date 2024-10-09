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
export class DocumentAdjusting extends Component {
    static displayName = DocumentAdjusting.name;

    render() {
        return (
            <div>
                <div className="page-title-area document-adjusting">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{i18n.t("professional_document_adjusting_service_from_hyperbpo")}
                                        </h2>
                                    <ul>
                                    
                                        <li>{i18n.t("professional_document_adjusting_service_from_hyperbpo_content")}</li>
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
                                    <img src="assets/img/icon/lookup.jpg" alt="icon" />
                                    <h3>{i18n.t("identify_the_most_valuable_documents")}</h3>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/tree.png" alt="icon" />
                                    <h3>{i18n.t("organize_use_scientific_physics_documents")}</h3>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/storage.jpg" alt="icon" />
                                    <h3>{i18n.t("avoid_waste_when_storing_and_digitizing_documents")}</h3>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/statistic.jpg" alt="icon" />
                                    <h3>{i18n.t("effectively_inventory_and_manage_physical_documents")}</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview-section section-padding adjusting-service">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="overview-content">
                                    <h2>{i18n.t("the_importance_of_document_adjusting")}</h2>
                                    <p>{i18n.t("the_importance_of_document_adjusting_content")}</p>
                                    <ul className="features-list">
                                        <li> <span>{i18n.t("the_importance_of_document_adjusting_item1")}</span></li>
                                        <li> <span>{i18n.t("the_importance_of_document_adjusting_item2")}</span></li>
                                        <li> <span>{i18n.t("the_importance_of_document_adjusting_item3")}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview-section adjusting-service">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="overview-content">
                                    <h2>{i18n.t("document_adjusting_service_at_hyperbpo")}</h2>
                                    <p>{i18n.t("document_adjusting_service_at_hyperbpo_content")}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview-section section-padding adjusting-service">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="overview-content">
                                    <h2>{i18n.t("document_adjusting_process")}</h2>
                                    <p>{i18n.t("document_adjusting_process_content")}</p>

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

