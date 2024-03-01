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

function Service() {

    TitleSection.defaultProps = {
        classDesInner: "line-bg-left",
    };
    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>
                <title>Service | Discover BZ Tech's premier software solutions: SaaS products, web development, mobile apps, and cloud security services </title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal backgroundColor="background-section" className="text-center">
                <p className="subtitle p-relative line-shape   mb-30">
                    <span className="pl-10 pr-10 background-main">OUR SERVICES</span>
                </p>
                <h1 className="title">
                    Transforming digital landscapes with <br /> innovative solutions.
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*========== About Section  ==========*/}
            <DsnGrid className="container section-margin" customGrid={{ desktop: "70% 30%" }} rowGapTablet={50} data-dsn-title="What We Do">
                <div className="box-left">
                    <TitleSection defaultSpace={false} description="What We Do" />
                    <h4 className="mt-25">
                        We design products that are more than pretty. We make them shippable and usable.
                        Ignite Your Potential with BZ Tech, Where Transformation Begins.
                    </h4>
                </div>
                <div className="box-right">
                    <TitleSection defaultSpace={false} description="Our Services" />
                    <ul className="mt-25">
                        <li className="mb-15">Software developemt</li>
                        <li className="mb-15">Web and Mobile App Design</li>
                        <li className="mb-15">Marketing Management</li>
                    </ul>

                </div>
            </DsnGrid>
            {/*========== End About Section  ==========*/}

            {/*<!-- ========== facts-section ==========*/}
            <div className="section-margin p-relative" >
                <BgDot />
                <BgDot rightPosition />
                <div className="container">
                    <Facts className="text-center" col={4} colTablet={2} />
                </div>
            </div>
            {/*<!-- ========== end facts-section ========== */}


            {/*<!-- ========== About section ========== */}
            <div className="p-relative background-section section-padding" data-dsn-title="Experties">
                <DsnGrid className="container" col={2} colTablet={1}>
                    <div className="p-relative box-left">
                        <div className="box-im h-100 ">
                            <Image className="cover-bg-img " src="https://www.vkreate.in/storage/services_image/2019-10-02-17-55-54-5d94e4aa809b3-web-development.gif" alt="" fill sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
                        </div>
                    </div>

                    <div className="p-relative box-right">
                        <TitleCover>BZ Tech</TitleCover>
                        <TitleSection className="mb-30" description="What you can expert" defaultSpace={false}>
                            From inception to launch, we provide end-to-end project strategy and development services
                        </TitleSection>
                        <List className="border-top  pt-30 mb-30" col={2} iconSize={"15px"}>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Web and Mobile App Design </List.item>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> UI/UX Design & Optimization </List.item>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Project Strategy & Developmen </List.item>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Application Audit & Debugging </List.item>
                        </List>
                        <ServiceGrid className="icon-left p-0 border-top  pt-30 align-items-center"

                            iconOption={{ className: "background-main p-15 align-self-center" }}
                            data={[{
                                icon: IdeaIcon,
                                title: "Success merges passion and expertise. Our team of devoted professionals delivers exceptional results by going above and beyond for clients ",
                                description: "So whether you're looking to streamline your operations, enhance your digital presence, or transform your business for the future, BZ TECH is here to help."
                            }]} />

                    </div>
                </DsnGrid>
            </div>
            {/*<!-- ========== End About section ========== */}


            {/*<!-- ========== About section ========== */}
            <div className="p-relative section-margin" data-dsn-title="About Us">
                <DsnGrid className="container" col={2} colTablet={1}>
                    <div className="p-relative box-left order-md-2">
                        <TitleCover>BZ Tech</TitleCover>
                        <TitleSection className="mb-30" description="About us" defaultSpace={false}>
                            We super-charge your business today!
                        </TitleSection>
                        <p className="max-w570 dsn-up mb-10 border-top pt-30">
                            When you choose BZ Tech, you're not just getting a service provider -
                            you're entering into a partnership built on trust, transparency, and collaboration.
                        </p>
                        <p className="max-w570 dsn-up border-bottom pb-30">
                            We take the time to truly understand your business, its goals, and its challenges.
                            This allows us to develop customized solutions that drive real, measurable results.
                        </p>
                        <ButtonProject href="#0" className="mt-30"> BZ TECH </ButtonProject>

                    </div>
                    <div className="p-relative box-right order-md-1">
                        <div className="box-im h-100 ">
                            <Image className="cover-bg-img " src="https://i.pinimg.com/originals/68/45/e3/6845e3e3b96d3ccb85dcbb9880351074.gif" alt="" fill sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw" />
                        </div>
                    </div>


                </DsnGrid>
            </div>
            {/*<!-- ========== End About section ========== */}


            {/*<!-- ========== About section ========== */}
            <div className="p-relative background-section section-padding" data-dsn-title="BUSINESS CONSULTING">

                <div className="container">
                    <TitleSection className="text-center" description="Other Services" defaultSpace={false}>
                        BUSINESS CONSULTING
                    </TitleSection>
                    <TitleSection className="text-center mt-15" tag="p" dirDescription="after" classDesInner="max-w570"
                        description="We’ve designed a culture that allows our stewards to assimilate
                                   with our clients and bring."/>


                    <DsnGrid className="background-main" col={2} colTablet={1} rowGapTablet={0} rowGapMobile={0}>
                        <div className="p-relative box-padding box-left order-md-2">
                            <TitleCover>BZ Tech</TitleCover>
                            <TitleSection className="mb-15" defaultSpace={false} description="Creative Tech Synthesis" />
                            <h4 className="mb-50">We leverage evolving tech, expertise, and collaboration for efficient solutions!</h4>
                            <ServiceGrid className="icon-left p-0" rowGapTablet={30} rowGapMobile={30}
                                data={[
                                    {
                                        icon: <Image src="/img/team/1.png" alt="" width={70} height={70} />,
                                        title: "In-House Talent",
                                        description: `We leverage our in-house expertise alongside outsourced resources to optimize development efficiency and deliver high-quality solutions `
                                    }, {
                                        icon: <Image src="/img/team/2.png" alt="" width={70} height={70} />,
                                        title: " Customized Suite of E-Commerce, HRMS,SAAS ,CMM, and CRM",
                                        description: `We seamlessly integrate our customized e-commerce, HRMS, CMM, and CRM solutions, serving over 100 satisfied customers, empowering them in their daily business operations. `
                                    }, {
                                        icon: <Image src="/img/team/3.png" alt="" width={70} height={70} />,
                                        title: "How We Work? ",
                                        description: `Navigating tech advancements poses challenges. From digitization to custom software, identifying needs, planning, and resource management can be overwhelming. `
                                    }
                                ]}
                            />
                        </div>
                        <div className="p-relative box-right order-md-1">
                            <div className="box-im h-100 ">
                                <Image className="cover-bg-img " src="https://www.binarycode.co.nz/wp-content/uploads/2023/02/SharePoint-Consulting.gif" alt="" fill sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw" />
                            </div>
                        </div>
                    </DsnGrid>
                    <ServiceGrid className="mt-50 p-0 text-center" data={getServiceData()} col={3} colTablet={2}
                        colGap={50} />
                </div>


            </div>
            {/*<!-- ========== End About section ========== */}

            {/*========== team Section ========== */}
            {/* <section className="container section-margin " data-dsn-title="Best Team Ever">
                <TitleSection description={"Our Team"}>
                    The Best Team Ever!
                </TitleSection>

                <Team data={getTeamData().slice(0,3)} className={"team-classic"} col={3} colTablet={2}/>
            </section> */}
            {/*========== End team Section ========== */}

            {/*========== Next Page ==========*/}
            <NextPage className="section-padding border-top background-section" />
            {/*========== End Next Page ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}

        </Layout>
    )
        ;
}


export default Service;
