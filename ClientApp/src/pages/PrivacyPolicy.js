import React, { Component } from 'react';
/*import { Helmet } from "fusion-plugin-react-helmet-async";*/
//import test from '../assets/js/main.js'
import i18n from 'i18next';
import { Trans } from 'react-i18next';
import parse from 'html-react-parser';
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
export class PrivacyPolicy extends Component {
    static displayName = PrivacyPolicy.name;
    render() {
        return (
            <div>
                <div className="page-title-area about-us">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content ">
                                    <h2>{i18n.t("privacy_policy")}</h2>
                                    <ul>
                                        <li>{i18n.t("last_updated")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="overview-section pt-100 operation-section pb-100 privacy-policy">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="overview-content">
                                    <h2>{i18n.t("notice")}</h2>
                                    <p>{parse(i18n.t("notice_detail"))}</p>
                                    
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("collection_and_use_of_information")}</h2>
                                    <p>
                                        {parse(i18n.t("collection_and_use_of_information_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("choices_and_data_processing")}</h2>
                                    <p>
                                        {parse(i18n.t("choices_and_data_processing_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("data_transfer_and_disclosure")}</h2>
                                    <p>
                                        {parse(i18n.t("data_transfer_and_disclosure_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("data_integrity")}</h2>
                                    <p>
                                        {parse(i18n.t("data_integrity_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("access_rights")}</h2>
                                    <p>
                                        {parse(i18n.t("access_rights_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("compliance_and_enforcement")}</h2>
                                    <p>
                                        {parse(i18n.t("compliance_and_enforcement_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("cookies")}</h2>
                                    <p>
                                        {parse(i18n.t("cookies_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("legal_disclosure")}</h2>
                                    <p>
                                        {parse(i18n.t("legal_disclosure_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("changes_to_this_privacy_policy")}</h2>
                                    <p>
                                        {parse(i18n.t("changes_to_this_privacy_policy_detail"))}
                                    </p>
                                </div>
                                <div className="overview-content">
                                    <h2>{i18n.t("privacy_policy_contact")}</h2>
                                    <p>
                                        {parse(i18n.t("privacy_policy_contact_detail"))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}