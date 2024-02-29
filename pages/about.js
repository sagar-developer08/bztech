import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import ParallaxImage from "../components/Image/ParallaxImage";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import List from "../components/list/List";
import DsnGrid from "../layout/DsnGrid";
import Layout from "../layout/Layout";
import BoxGallery, {
    BoxGalleryItem,
} from "../components/box-gallery/BoxGallery";
import Team from "../components/Team/Team";
import Testimonial from "../components/testimonial/Testimonial";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import NextPage from "../components/next/NextPage";
import BrandClient from "../components/brand-client/BrandClient";
import Awards from "../components/awards/Awards";
import {getTeamData} from "../data/team";
import Service from "../components/services/Service";
import {getServiceData} from "../data/service";
import Image from "next/image";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";

function About() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>About Us | Learn about BZ Tech, a leading provider of innovative software solutions for businesses worldwide.</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal className="">
                <p className="subtitle p-relative line-shape line-shape-after mb-30">
                    <span className="pl-10 pr-10 background-section">BZ Tech</span>
                </p>
                <h1 className="title text-uppercase">
                   Inovation Begins Here
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={"/img/about/5.jpg"}
                           parallaxFrom={{scale: 1.3}} parallax={{scale: 1}}
                           overlay={5}/>
            {/*End Parallax Img*/}

            {/*<!-- ========== About Section ========== */}
            <div className="container section-margin" data-dsn-title="About">

                <TitleSection className="mb-15" description={"What We Do"} defaultSpace={false}/>
                <DsnGrid col={2} colTablet={1}>
                    <div className="box-left">
                        <h4> Design Strategy, Web and Mobile App Design,Front-end Development & Back-end Development </h4>
                    </div>
                    <div className="box-right">
                        <p className="max-w570 dsn-up mb-15 ">
                        BZ Tech offers comprehensive design, development, and business strategy services while prioritizing social responsibility,
                        guiding businesses towards success in a competitive landscape.
                        </p>
                    </div>
                </DsnGrid>
                <List className="pt-50 mt-50 border-top pt-md-30 mt-md-30" col={3} iconSize={"21px"}>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> Crafting Code, Inspiring Futures </List.item>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> Where Innovation Meets Functionality</List.item>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> Empowering Tomorrow's Solutions, Today.</List.item>
                </List>
            </div>
            {/*<!-- ========== End About Section ========== */}

            {/*Start Gallery List*/}
            <BoxGallery className="section-margin container" col={2}>
                <BoxGalleryItem src="/img/3.jpg" groupPopup="gallery"/>
                <BoxGalleryItem src="/img/plan-project.jpg" groupPopup="gallery"/>
            </BoxGallery>
            {/*End Gallery List*/}

            {/*Start awards Section*/}
            <section className="section-padding background-section" data-dsn-title="Services">
                <div className="container">
                    <TitleSection description="Our Services">
                    Crafting exquisite digital solutions for <br/>  software, SaaS, and eCommerce needs. 
                    </TitleSection>
                    <Service.grid className="icon-left" styleBox="list" data={getServiceData()}/>
                </div>
            </section>
            {/*End awards Section*/}


            {/* <section className="awards-section section-margin" data-dsn-title="Awards">
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-left">
                            <TitleSection description={" Awards & Honors"} defaultSpace={false}>
                                The awards won by our project.
                            </TitleSection>
                            <Awards/>
                        </div>

                        <div className="box-right">
                            <div className="container-img p-relative">
                                <Image className="cover-bg-img" alt={""} src={"/img/agency-1.jpg"} width={1280}
                                       height={840}
                                       sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
                                />
                            </div>
                        </div>
                    </DsnGrid>
                </div>
            </section> */}

            {/*========== team Section ========== */}
            {/* <section className="container section-margin " data-dsn-title="Team">
                <TitleSection description={"Our Team"}>
                    The Best Team Ever!
                </TitleSection>

                <Team data={getTeamData().slice(0, 4)} col={2} colTablet={2}/>
            </section> */}
            {/*========== End team Section ========== */}

            {/*Start testimonial Section*/}
            <div className="container section-margin" data-dsn-title="testimonials">
                <TitleSection description={" Feedback"}>What Clients Say</TitleSection>

                <Testimonial
                    className=" text-center"
                    styleBox={"corner"}
                    skin={["testimonials-personal", "box-line"]}
                    centeredSlides
                    desktop={{slidesPerView: 3}}
                    tablet={{slidesPerView: 1}}
                    mobile={{slidesPerView: 1}}
                    speed={1000}
                    grabCursor
                    loop
                    loopedSlides={2}
                    parallax
                    parallaxImage={{"data-swiper-parallax-scale": 0.7}}
                    parallaxContent={{
                        "data-swiper-parallax-opacity": 0,
                        "data-swiper-parallax": "30%",
                    }}
                >
                    <SwiperPagination
                        className={`justify-content-between dsn-container mt-30`}
                    />
                </Testimonial>
            </div>
            {/*End testimonial Section*/}

            {/*========== Start brand-client Section ==========*/}
            <section className="container section-margin" data-dsn-title="Client">
                <TitleSection description={"Our clients"}>
                    Your Success, Our <br/>
                    Reputation
                </TitleSection>

                <BrandClient col={4} colTablet={2} colGap={0} rowGap={0}/>
            </section>
            {/*========== End brand-client Section ==========*/}

            {/*========== Start Next Page Section ==========*/}
            <NextPage className={`background-section section-padding`}/>
            {/*========== End Next Page Section ==========*/}
        </Layout>
    );
}

export default About;
