import React, { Component } from 'react';
import { useState } from 'react';
/*import './NavMenu.css';*/
import { Link } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import { LANGUAGES } from "../constants";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = '/abc.js';
    script.async = true;
    document.body.appendChild(script);
}
export class NavMenu extends Component {
    static displayName = NavMenu.name;
    componentDidMount() {
        const script = document.createElement("script");
        script.innerHTML = '$("nav").meanmenu();' +
            ' var lang = window.localStorage.i18nextLng;' +
            ' $("#cbxLang").val(lang);' +
            ' ';
        script.async = true;
        document.body.appendChild(script);
    }
    constructor(props) {
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
        if (!localStorage.getItem('i18nextLng')) {
            localStorage.setItem('i18nextLng', 'vn')
        } else {
            this.language = localStorage.getItem('i18nextLng');
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }   
    handleChange(e){
        i18n.changeLanguage(e.toLowerCase());
        localStorage.setItem('i18nextLng', e.toLowerCase());
        window.location.reload();
    }
    getLanguage() {
        if (localStorage.getItem('i18nextLng') && localStorage.getItem('i18nextLng') == "vn") {
            return "VN";
        } else if (localStorage.getItem('i18nextLng') && localStorage.getItem('i18nextLng') == "jp") {
            return "JP";
        } else {
            return "US";
        }
    }
    
    render() {
        return (
            <div className="navbar-section">
                
                <div className="techvio-responsive-nav">
                    <div className="container">
                        <div className="techvio-responsive-menu">
                            <div className="mean-bar">
                            <div className="language-option-mean-bar">
                                <div className="lang-option">
                                    <ReactFlagsSelect className="ddLang"
                                        countries={["US", "VN","JP"]}
                                        selected={this.getLanguage()}
                                        onSelect={this.handleChange.bind(this)}

                                        showOptionLabel={false}
                                        showSelectedLabel={false}
                                    ></ReactFlagsSelect>
                                </div>
                            </div>
                            </div>
                            <div className="logo">
                                <a href="/">
                                    <img src="assets/img/logo.png" className="white-logo" alt="logo"></img>
                                    <img src="assets/img/logo-black.png" className="black-logo" alt="logo"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="techvio-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="/">
                                <img src="assets/img/logo.png" className="white-logo" alt="logo" />
                                <img src="assets/img/logo-black.png" className="black-logo" alt="logo" />
                            </a>
                            <div className="navbar-collapse mean-menu" id="navbarSupportedContent" >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">{i18n.t("home")}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about-us" className="nav-link">{i18n.t("about")}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link">{i18n.t("sevices")} <i className="fas fa-chevron-down"></i></Link>
                                        <ul className="dropdown-menu" >
                                            <li className="nav-item">
                                                <Link to="/data-entry" className="nav-link">{i18n.t("data_entry_service")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/document-scanning" className="nav-link">{i18n.t("doc_scanning")}</ Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/document-adjusting" className="nav-link">{i18n.t("doc_adjusting")}</ Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/coming-soon" className="nav-link">{i18n.t("img_processing")}</ Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/data-labeling" className="nav-link">{i18n.t("data_labeling")}</ Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/coming-soon" className="nav-link">{i18n.t("call_center")}</ Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    <Link to="#" className="nav-link">{i18n.t("portfolio")} <i className="fas fa-chevron-down"></i></Link>*/}
                                    {/*    <ul className="dropdown-menu">*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link to="/coming-soon" className="nav-link">{i18n.t("portfolio")}</Link>*/}
                                    {/*        </li>*/}
                                    {/*        <li className="nav-item">*/}
                                    {/*            <Link to="/coming-soon" className="nav-link">{i18n.t("portfolio_detail")}</Link>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">{i18n.t("contact")}</Link>
                                    </li>
                                </ul>
                                <div className="other-option">
                                    <Link className="default-btn" to="mailto:contact@hyperbpo.com">{i18n.t("get_it_support")} <span></span></Link>
                                </div>
                                <div className="language-option">
                                    <div className="lang-option">
                                        <ReactFlagsSelect className="ddLang"
                                            countries={["US", "VN", "JP"]}
                                            selected={this.getLanguage()}
                                            onSelect={this.handleChange.bind(this)}
                                        
                                            showOptionLabel={false}
                                            showSelectedLabel={false}
                                        ></ReactFlagsSelect>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
