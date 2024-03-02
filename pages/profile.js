import Layout from "../layout/Layout";
import HeaderNormal from "../components/header/HeaderNormal";
import DsnGrid from "../layout/DsnGrid";
import TitleSection from "../components/heading/TitleSection";
import BgDot from "../components/header/BgDot";
import Facts from "../components/facts/Facts";
import TitleCover from "../components/heading/TitleCover";
import List from "../components/list/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ServiceGrid } from "../components/services/Service";
import { IdeaIcon } from "../components/svg";
import ButtonProject from "../components/button/ButtonProject";
import { getServiceData } from "../data/service";
import Team from "../components/Team/Team";
import React from "react";
import { getTeamData } from "../data/team";
import Image from "next/image";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";

function Profile(params) {
    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>
                <title>Portfolio | Explore a diverse collection of my work showcased in my portfolio. From innovative web designs to captivating graphic illustrations, discover how my creative expertise can elevate your projects. Browse through my portfolio to witness a blend of skill, passion, and dedication, tailored to meet your unique needs. Let's collaborate and bring your ideas to life. Contact me today.</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal backgroundColor="background-section" className="text-center">
                <p className="subtitle p-relative line-shape   mb-30">
                    <span className="pl-10 pr-10 background-main">OUR PROJECT'S</span>
                </p>
                <h1 className="title">
                    From Vision to Reality:<br /> Discover Our Portfolio's Evolutionary Journey
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}
            {/*Start Img1 */}
            <div className="container p-relative" data-dsn-title="Vidya Samiksha Kendra">
                <Image className="w-100" alt={""} src={"/img/project/project2/1.png"} width={1400} height={688} style={{borderRadius:'32px'}} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
            </div>
            {/*End Img1 */}

            {/*Start Intro Project1 */}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{ desktop: "40% 60%" }}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Agency</strong>NDEAR Vidya Samiksha Kendra
                            </li>
                            {/* <li className="p-relative">
                                <strong>creating</strong>vere
                            </li> */}
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            At NDEAR Vidya Samiksha Kendra, we excel in delivering comprehensive support and development services.
                            Our collaborative approach with their team ensures the seamless maintenance of existing projects while spearheading innovative new developments.
                            With our dedicated developers at the helm, we guarantee not only the optimization of operational efficiency but also the timely delivery of enhancements,
                            setting new benchmarks for excellence in project management."
                        </p>
                        {/* <div className="intro-project-cat mt-30">
                            <span className="cat-item"> Arthur Kenzo</span>
                            <span className="cat-item"> Smart Speaker </span>
                            <span className="cat-item">Voice Speaker </span>
                            <span className="cat-item">design</span>
                        </div> */}
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project1 */}
            {/*Start Img 2 */}
            <div className="container p-relative" data-dsn-title="Pixalive">
                <Image className="w-100" alt={""} src={"/img/project/project2/2.png"} width={1400} height={688} style={{borderRadius:'32px'}} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
            </div>
            {/*End Img 2 */}

            {/*Start Intro Project 2 */}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{ desktop: "40% 60%" }}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Agency</strong>Pixalive
                            </li>
                            {/* <li className="p-relative">
                                <strong>creating</strong>vere
                            </li> */}
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            Vin tries to reflect Diesel’s vision and combines the universe of
                            the rock of the 80’s with a clear and essential design to be more
                            confident with its customers who need strong symbols through which
                            express themselves
                        </p>
                        {/* <div className="intro-project-cat mt-30">
                            <span className="cat-item"> Arthur Kenzo</span>
                            <span className="cat-item"> Smart Speaker </span>
                            <span className="cat-item">Voice Speaker </span>
                            <span className="cat-item">design</span>
                        </div> */}
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project 2 */}
            {/*Start Img 3 */}
            <div className="container p-relative" data-dsn-title="Zuno">
                <Image className="w-100" alt={""} src={"/img/project/project2/3.png"} width={1400} height={688} style={{borderRadius:'32px'}} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
            </div>
            {/*End Img 3 */}

            {/*Start Intro Project 4 */}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{ desktop: "40% 60%" }}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Agency</strong>Zuno
                            </li>
                            {/* <li className="p-relative">
                                <strong>creating</strong>vere
                            </li> */}
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            Zuno, a company seeking developer outsourcing,
                            enlisted our help in enhancing their ongoing development
                            by creating a customized SaaS insurance product
                        </p>
                        {/* <div className="intro-project-cat mt-30">
                            <span className="cat-item"> Arthur Kenzo</span>
                            <span className="cat-item"> Smart Speaker </span>
                            <span className="cat-item">Voice Speaker </span>
                            <span className="cat-item">design</span>
                        </div> */}
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project 3 */}

            {/*Start Img 4 */}
            <div className="container p-relative" data-dsn-title="Pet Aahar">
                <Image className="w-100" alt={""} src={"/img/project/project2/4.png"} style={{borderRadius:'32px'}} width={1400} height={688} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
            </div>
            {/*End Img 4 */}

            {/*Start Intro Project 4 */}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{ desktop: "40% 60%" }}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Agency</strong>Pet Aahar
                            </li>
                            {/* <li className="p-relative">
                                <strong>creating</strong>vere
                            </li> */}
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            We went on a transformative journey with BZ Tech to improve The Pet Aahar's online presence.
                            Our aim was clear: to improve their brand,
                            streamline lead generation, and give an optimal user experience.
                        </p>
                        {/* <div className="intro-project-cat mt-30">
                            <span className="cat-item"> Arthur Kenzo</span>
                            <span className="cat-item"> Smart Speaker </span>
                            <span className="cat-item">Voice Speaker </span>
                            <span className="cat-item">design</span>
                        </div> */}
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project 4 */}

            {/*Start Img 5 */}
            <div className="container p-relative" data-dsn-title="Velzon">
                <Image className="w-100" alt={""} src={"/img/project/project2/5.png"} style={{borderRadius:'32px'}} width={1400} height={688} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
            </div>
            {/*End Img 5 */}

            {/*Start Intro Project 5 */}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{ desktop: "40% 60%" }}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Agency</strong>Velzon
                            </li>
                            {/* <li className="p-relative">
                                <strong>creating</strong>vere
                            </li> */}
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            Vin tries to reflect Diesel’s vision and combines the universe of
                            the rock of the 80’s with a clear and essential design to be more
                            confident with its customers who need strong symbols through which
                            express themselves
                        </p>
                        {/* <div className="intro-project-cat mt-30">
                            <span className="cat-item"> Arthur Kenzo</span>
                            <span className="cat-item"> Smart Speaker </span>
                            <span className="cat-item">Voice Speaker </span>
                            <span className="cat-item">design</span>
                        </div> */}
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project 5 */}

            {/*Start Img 6 */}
            <div className="container p-relative" data-dsn-title="Vivek Bhole Architect">
                <Image className="w-100" alt={""} src={"/img/project/project2/6.png"} style={{borderRadius:'32px'}} width={1400} height={688} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
            </div>
            {/*End Img 6 */}

            {/*Start Intro Project 6 */}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{ desktop: "40% 60%" }}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <li className="p-relative">
                                <strong>Agency</strong>Vivek Bhole Architect
                            </li>
                            {/* <li className="p-relative">
                                <strong>creating</strong>vere
                            </li> */}
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li>
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            Vin tries to reflect Diesel’s vision and combines the universe of
                            the rock of the 80’s with a clear and essential design to be more
                            confident with its customers who need strong symbols through which
                            express themselves
                        </p>
                        {/* <div className="intro-project-cat mt-30">
                            <span className="cat-item"> Arthur Kenzo</span>
                            <span className="cat-item"> Smart Speaker </span>
                            <span className="cat-item">Voice Speaker </span>
                            <span className="cat-item">design</span>
                        </div> */}
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project 6 */}


            {/*========== Next Page ==========*/}
            <NextPage className="section-padding border-top background-section" />
            {/*========== End Next Page ==========*/}

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}



        </Layout>
    )
}

export default Profile
