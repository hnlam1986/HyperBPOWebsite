import React, { Component } from 'react';
/*import './NavMenu.css';*/
import { Link } from "react-router-dom";
import i18n from 'i18next';
export class Footer extends Component {
    
    static displayName = Footer.name;
    render() {
        return (
            <div>
                {/*<!-- Start Footer & Subscribe Section -->*/}
                <section className="footer-subscribe-wrapper">
                    {/*<!-- Start Subscribe Section -->*/}
                    <div className="subscribe-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="subscribe-content">
                                        <h2>{i18n.t("sign_up_our_newsletter")}</h2>
                                        <p>{i18n.t("sign_up_our_newsletter_intro")}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <form className="newsletter-form">
                                        <input type="email" className="input-newsletter" name="email" placeholder={i18n.t("enter_your_email")} required="" autoComplete="off"></input>
                                        <button type="submit">{i18n.t("subscribe_now")}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- End Subscribe Section -->*/}
                    {/*<!-- Start Footer Section -->*/}
                    <div className="footer-area ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <a className="footer-logo" href="#">
                                            <img src="assets/img/logo.png" className="white-logo" alt="logo"></img>
                                        </a>
                                        <p>{i18n.t("following_us_on")}</p>
                                        <ul className="footer-social">
                                            <li>
                                                <a href="https://www.facebook.com/hyperbpo/"> <i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-youtube"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <div className="footer-heading">
                                            <h3>{i18n.t("our_services")}</h3>
                                        </div>
                                        <ul className="footer-quick-links">
                                            <li><Link to="/data-entry">{i18n.t("data_entry")}</Link></li>
                                            <li><Link to="/document-scanning">{i18n.t("doc_scanning")}</Link></li>
                                            <li><Link to="/document-adjusting">{i18n.t("doc_adjusting")}</Link></li>
                                            <li><Link to="/coming-soon">{i18n.t("img_processing")}</Link></li>
                                            <li><Link to="/data-labeling">{i18n.t("data_labeling")}</Link></li>
                                            <li><Link to="/coming-soon">{i18n.t("call_center")}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <div className="footer-heading">
                                            <h3>{i18n.t("useful_links")}</h3>
                                        </div>
                                        <ul className="footer-quick-links">
                                            <li><Link to="about-us">{i18n.t("about")}</Link></li>
                                            <li><Link to="/coming-soon">{i18n.t("career")}</Link></li>
                                            <li><Link to="/contact">{i18n.t("contact_us")}</Link></li>
                                            <li><Link to="/coming-soon">{i18n.t("privacy_policy")}</Link></li>
                                            <li><Link to="/coming-soon">{i18n.t("terms_conditions")}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <div className="footer-heading">
                                            <h3>{i18n.t("contact_info")}</h3>
                                        </div>
                                        <div className="footer-info-contact">
                                            <i className="flaticon-phone-call"></i>
                                            <h3>{i18n.t("phone")}</h3>
                                            <span><a href="tel:+84938167211">+84 93816 7211</a></span>
                                        </div>
                                        <div className="footer-info-contact">
                                            <i className="flaticon-envelope"></i>
                                            <h3>{i18n.t("email")}</h3>
                                            <span><a href="mailto:contact@hyperbpo.com">contact@hyperbpo.com</a></span>
                                        </div>
                                        <div className="footer-info-contact">
                                            <i className="flaticon-placeholder"></i>
                                            <h3>{i18n.t("address")}</h3>
                                            <span>{i18n.t("address_detail")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- End Footer Section -->*/}
                </section>
                {/*<!-- End Footer & Subscribe Section -->*/}
                {/*<!-- Start Copy Right Section -->*/}
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p><i className="far fa-copyright"></i> {i18n.t("copy_right")}</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li><a href="/coming-soon">{i18n.t("terms_conditions")}</a></li>
                                    <li><a href="/coming-soon">{i18n.t("privacy_policy")}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Copy Right Section -->*/}
                {/*<!-- Start Go Top Section -->*/}
                <div className="go-top">
                    <i className="fas fa-chevron-up"></i>
                    <i className="fas fa-chevron-up"></i>
                </div>
                {/*<!-- End Go Top Section -->*/}
            </div>
        );
    }
}
