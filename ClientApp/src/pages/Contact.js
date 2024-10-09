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
export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <div>
                <div className="page-title-area contact-us-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{i18n.t("contact_us_if_you_need_assistance")}</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-section section-padding">
                    <div className="container">
                        <div className="section-title">
                            <h6 className="sub-title">{i18n.t("lets_talk")}</h6>
                            <h2>{i18n.t("contact_us")}</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="contact-form">
                                    <p className="form-message"></p>
                                    <form id="contact-form" className="contact-form form" action="phpmails.php" method="POST">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required="" placeholder={i18n.t("you_name")}></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required="" placeholder={i18n.t("your_email")}></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone" id="phone" required="" className="form-control" placeholder={i18n.t("your_phone")}></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="subject" id="subject" className="form-control" required="" placeholder={i18n.t("your_subject")}></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="6" required="" placeholder={i18n.t("your_message")}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn submit-btn">{i18n.t("send_message")} <span></span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="contact-info-wrapper bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h6 className="sub-title">{i18n.t("find_us")}</h6>
                                    <h2>{i18n.t("contact_info")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-info-content">
                                    <h5>{i18n.t("vietnam_office")}</h5>
                                    <p><i className="fa fa-solid fa-clock"></i><br />{i18n.t("working_time")}</p>
                                    <p><i className="fa fa-solid fa-location-dot"></i><br />{i18n.t("address_detail")}</p>
                                    <a href="tel:+84936167211"><i className="fa fa-solid fa-phone"></i><br />(+84) 0936 167 2111</a>
                                    <a href="tel:+84776117770"><i className="fa fa-solid fa-phone"></i><br />(+84) 0776 117 770</a>
                                    <a href="mailto:contact@hyperbpo.com"><i className="fa fa-solid fa-envelope"></i><br />contact@hyperbpo.com</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <div className="map-section">
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6654.4944159846045!2d106.65662971243312!3d10.795111989310373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292f90add6bf%3A0xde697509488b00f9!2sCty%20TNHH%20HyperBPO!5e1!3m2!1sen!2s!4v1727855606315!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                
            </div>
        );
    }
}

