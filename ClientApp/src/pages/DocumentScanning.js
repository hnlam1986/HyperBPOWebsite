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
export class DocumentScanning extends Component {
    static displayName = DocumentScanning.name;

    render() {
        return (
            <div>
                <div className="page-title-area scanning-service">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{i18n.t("professional_document_scanning_service")}</h2>
                                    <ul>
                                        <li>{i18n.t("professional_document_scanning_service_content")}</li>
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
                                    <img src="assets/img/icon/storage.jpg" alt="icon"/>
                                    <h3>{i18n.t("save_storage_space")}</h3>
                                    <p>{i18n.t("save_storage_space_content")}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/productivity.png" alt="icon"/>
                                    <h3>{i18n.t("improve_productivity")}</h3>
                                    <p>{i18n.t("improve_productivity_content")}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/cost.png" alt="icon"/>
                                    <h3>{i18n.t("save_on_operating_costs")}</h3>
                                    <p>{i18n.t("save_on_operating_costs_content")}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-single-item">
                                    <img src="assets/img/icon/safe.jpg" alt="icon" />
                                    <h3>{i18n.t("data_security")}</h3>
                                    <p>{i18n.t("data_security_content")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="overview-section section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="overview-image">
                                    <img src="assets/img/paper-size.jpg" alt="image"></img>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="overview-content">
                                    <h2>{i18n.t("various_sizes_of_scanned_documents")}</h2>
                                    <p>{i18n.t("various_sizes_of_scanned_documents_content")}</p>
                                    <ul className="features-list">
                                        <li> <span>A0</span></li>
                                        <li> <span>A1</span></li>
                                        <li> <span>A2</span></li>
                                        <li> <span>A3</span></li>
                                        <li> <span>A4</span></li>
                                        <li> <span>A5</span></li>
                                        <li> <span>{i18n.t("all_sizes")}</span></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview-section pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="overview-content">
                                    <h2>{i18n.t("various_type_of_scanned_documents")}</h2>
                                    <p>{i18n.t("various_type_of_scanned_documents_content")}</p>
                                    <ul className="features-list">
                                        <li> <span>{i18n.t("personnel_records")}</span></li>
                                        <li> <span>{i18n.t("accounting_documents_invoices_receipts")}</span></li>
                                        <li> <span>{i18n.t("construction_drawings_maps")}</span></li>
                                        <li> <span>{i18n.t("medical_records")}</span></li>
                                        <li> <span>{i18n.t("contracts_and_agreements")}</span></li>
                                        <li> <span>{i18n.t("books_newspapers_pictures")}</span></li>
                                        <li> <span>{i18n.t("teaching_materials")}</span></li>
                                        <li> <span>{i18n.t("special_documents")}</span></li>
                                        <li> <span>{i18n.t("old_documents_with_high_historical_value")}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="overview-image">
                                    <img src="assets/img/bunch-of-document.jpg" alt="image"></img>
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
                                    <h6 className="sub-title">{i18n.t("step_work_process")}</h6>
                                    <h2>{i18n.t("working_process")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/receive.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("receive_documents")}</h3>
                                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>*/}
                                    </div>
                                    <div className="workprocess-number-bg"><span>01</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/prepare.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("prepare_documents")}</h3>
                                        
                                    </div>
                                    <div className="workprocess-number-bg"><span>02</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/scanner.jpg" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("sorting_scanning_documents")}</h3>
                                        
                                    </div>
                                    <div className="workprocess-number-bg"><span>03</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/qc.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("quality_check")}</h3>
                                        
                                    </div>
                                    <div className="workprocess-number-bg"><span>04</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/delivery.png" alt="icon" />
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("packing_delivering_documents")}</h3>

                                    </div>
                                    <div className="workprocess-number-bg"><span>05</span></div>
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

