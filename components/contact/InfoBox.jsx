import React from 'react';
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <ul>
                <li>
                    <h5 className="title-block mb-15">Contact</h5>
                    <p className="text-p ">+91 9004276206</p>
                    <div className="over-hidden mt-5">
                        <a className="link-hover" data-hover-text="info@example.com"
                           href="#">info@bztech.in</a>
                    </div>

                </li>
                <li>
                    <h5 className="title-block mb-15">Address</h5>
                    <p className="text-p">PINNACLE BUSINESS PARK, Mahakali Caves Rd, <br />next to Ahrua center, next to M.I.D.C, Gundavli, 
                    <br/>Andheri East, Mumbai, Maharashtra 400093 East</p>
                </li>
                <li>
                    <h5 className="title-block mb-15">Follow Us</h5>
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Instagram." href="#"
                           target="_blank" rel="nofollow">LINKEDIN.</a>
                    </div>
                    {/* <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Facebook." href="#"
                           target="_blank" rel="nofollow">Facebook.</a>
                    </div> */}
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;