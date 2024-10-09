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
export class DataLabeling extends Component {
    static displayName = DataLabeling.name;

    render() {
        return (
            <div>
                <div className="page-title-area labeling-service">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{i18n.t("data_labeling_service")}</h2>
                                    <ul>
                                      
                                        <li>{i18n.t("data_labeling_service_content")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="team-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2>{i18n.t("range_of_data_labeling_service")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/image-labeling.gif" alt="team" />
                                    </div>
                                    <div className="team-info">
                                        <span>{i18n.t("image_labeling")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/video-labeling.gif" alt="team" />
                                        
                                    </div>
                                    <div className="team-info">
                                        <span>{i18n.t("video_labeling")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/text-labeling.gif" alt="team" />
                                        
                                    </div>
                                    <div className="team-info">
                                        <span>{i18n.t("text_labeling")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-team-box">
                                    <div className="team-image">
                                        <img src="assets/img/speech-labeling.png" alt="team" />
                                        
                                    </div>
                                    <div className="team-info">
                                        <span>{i18n.t("speech_labeling")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview-section pb-100 block-features-list">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="overview-content">
                                    <h2>{i18n.t("highlights")}</h2>
                                    
                                    <ul className="features-list">
                                        <li> <span>{i18n.t("quick_implementation")}</span></li>
                                        <li> <span>{i18n.t("process_data_in_large_volumes")}</span></li>
                                        <li> <span>{i18n.t("strict_quality_control_process")}</span></li>
                                        <li> <span>{i18n.t("safe_and_secure_data")}</span></li>
                                        <li> <span>{i18n.t("well_trained_and_professional_staff")}</span></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="overview-image">
                                    <img src="assets/img/Lablelling-best-practices.png" alt="image"></img>
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
                                    <h6 className="sub-title">{i18n.t("step_work_process_4")}</h6>
                                    <h2>{i18n.t("working_process")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/receive.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("receive_data_from_clients")}</h3>
                                        
                                    </div>
                                    <div className="workprocess-number-bg"><span>01</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/labeling.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("data_labeling_base_on_client's_work_instruction")}</h3>
                                       
                                    </div>
                                    <div className="workprocess-number-bg"><span>02</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/qc.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("quality_control_and_assurance")}</h3>
                                        
                                    </div>
                                    <div className="workprocess-number-bg"><span>03</span></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="workprocess-single-item">
                                    <div className="workprocess-icon-box">
                                        <img src="assets/img/icon/delivery.png" alt="icon"/>
                                    </div>
                                    <div className="workprocess-info">
                                        <h3>{i18n.t("complete_labeled_data")}</h3>
                                        
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

