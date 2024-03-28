import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import Layout from "../layout/Layout";

import Map from "../components/Map/Map";
import DsnGrid from "../layout/DsnGrid";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage2 from "../components/next/NextPage2";
import Footer from "../components/footer/Footer";
import Head from "next/head";

function Contact() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };

    return (
        <Layout>
            <Head>
                <title>Contact Us | Connect with BZ Tech to discuss your software needs. Reach out today for tailored solutions and expert support.</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal className="text-center">
                <p className="subtitle p-relative line-shape  mb-20">
                    <span className="pl-10 pr-10 background-section">Let's Talk</span>
                </p>
                <h1 className="title text-uppercase">
                    Contact Us
                </h1>
                {/* <p className="dsn-heading-title mt-15 max-w570">What if the time has come for you to
                    change?
                    Starting a collaboration is easy! Order a free consultation or call back. We are always in touch and
                    happy to cooperate with you
                </p> */}
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}
            {/*Start Map*/}
            {/* <Map
                mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
                zoom={10}
                height="80vh"
                defaultCenter={{lat: 19.2355, lng: 72.8468}}
            /> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7212379528287!2d72.86145047520648!3d19.11988138209383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c825662c7fc5%3A0xad3d66ac3ede302c!2sPinnacle%20Business%20Park!5e0!3m2!1sen!2sin!4v1709209407338!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/*Start Contact Form && Info Box*/}
            <div className="section-margin container">
                <DsnGrid col={2} colTablet={1}>
                    <ContactForm />
                    <InfoBox className="align-self-center" />
                </DsnGrid>
            </div>


            {/*========== Start Next Page Section ==========*/}
            <NextPage2 className={`background-section section-padding`} />
            {/*========== End Next Page Section ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Contact;
