import React from 'react';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
const Footer = () => {
    return (
        <div className="absolute-bottom content-center">
            <div className="d-flex justify-content-center pt-5 pb-5">

            <div className="frmw mt-5 mb-5">
                <p className=" text-uppercase tx1">Subscribe</p>
                <p className=" text-capitalize tx2 ">Subscribe to get the latest news About us</p>
                <p className="text-capitalize tx3">Please drop your email below to get daily update about what we do</p>
                <div className="input-group bdr4 ">
                    <input className="form-control tx4 m-2 text-capitalize" placeholder="Enter Your Email Address"/>
                    <button className="m-2 bttn">Subscribe</button>
                </div>

            </div>

            </div>

            <footer className="pt-md-5 border-top bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md text-light">
                            <h2 className="pb-4">WEB LOGO</h2>
                            <p className="pe-5">
                                Some footer text about the Agency. Just a little description to help people understand
                                you better
                            </p>
                        </div>
                        <div className="pb-3 col-6 col-md text-light">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled text-small">
                                <li className="pb-3">
                                    <Link href={"/service"} className="text-light text-decoration-none"> Services </Link>
                                </li>
                                <li className="pb-3">
                                    <Link href={"/team"} className="text-light text-decoration-none">Portfolio</Link>
                                </li>
                                <li className="pb-3">
                                    <Link href={"#"} className="text-light text-decoration-none">About Us</Link>
                                </li>
                                <li className="pb-3">
                                    <Link href={"#"} className="text-light text-decoration-none">Contact Us</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-6 col-md text-light">
                            <h5 className="text-light">Address</h5>
                            <p>
                                Design Agency Head Office. <br/> Airport Road <br/> United Arab Emirate
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;