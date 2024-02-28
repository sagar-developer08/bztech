import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        // {link: "#0", name: "Dribbble."},
        // {link: "#0", name: "Behance."},
        {link: "https://www.linkedin.com/company/bztechonologies/", name: "Linkedin."},
        // {link: "#0", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Head Office</h5>
                    <p>
                    PINNACLE BUSINESS PARK, Mahakali Caves Rd,
                    next to Ahura center, next to M.I.D.C <br/>  Gundavali, Andheri East, Mumbai, Maharashtra 400093 East
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+91 9004276206" data-hover-text="+91 9004276206">
                        +91 9004276206
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:info@bztech.in"
                           data-hover-text="info@bztech.in">info@bztech.in</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;