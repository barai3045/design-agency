import React from 'react';
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Image from "next/image";
import pic12 from "/public/images/services/allservice12.png";
import pic11 from "/public/images/services/allservice11.png";
import pic21 from "/public/images/services/allservice21.png";
import pic22 from "/public/images/services/allservice22.png";
import pic31 from "/public/images/services/allservice31.png";
import pic32 from "/public/images/services/allservice32.png";
import pic41 from "/public/images/services/allservice41.png";
import pic42 from "/public/images/services/allservice42.png";

const Page = () => {
    return (
        <div>
            <div className="bg-light">
                <NavMenu/>
                <div className="container">
                    <p className="pagetitle">Our Services</p>

                    <p className="d-inline-flex "> Home <Image src="/svg/right-arrow.svg" alt="arrow" width={24}
                                                               height={24}/> <span className="titlespan">Our Services </span>
                    </p>
                </div>
            </div>

            <div className="container">
                <p className="pt-5 btx1">Our All Services</p>
                <p className="btx2 wdth2">We Provide BestWeb design services</p>

                <div className="row">

                    <div className="col-md-6 p-4 ">
                        <div className="card ps-2 row">
                            <p className="btx3">Build & launce without problem</p>
                            <p className="btx4">Increase your team's productivity and save time with a bot that answers and fields customer inquries</p>
                            <div className="row">
                                <div className="col-md-8 p-3">

                                    <div style={{display: 'flex', flexDirection: 'column'}}>

                                        <Image
                                            className="center-block2"
                                            src={pic11}
                                            alt="images of all"
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                            }}

                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 p-3">
                                    <Image
                                        className="center-block2"
                                        src={pic12}

                                        alt="images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 170,
                                        }}

                                    />

                                </div>
                                <div className="col-md-6 p-3">
                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice13.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />

                                </div>
                                <div className="col-md-6 p-3">

                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice14.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="card ps-2 row">
                            <p className="btx3">Build & launce without problem</p>
                            <p className="btx4">Increase your team's productivity and save time with a bot that answers and fields customer inquries</p>
                            <div className="row">
                                <div className="col-md-8 p-3">

                                    <div style={{display: 'flex', flexDirection: 'column'}}>

                                        <Image
                                            className="center-block2"
                                            src={pic21}
                                            alt="images of all"
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                            }}

                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 p-3">
                                    <Image
                                        className="center-block2"
                                        src={pic22}

                                        alt="images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 170,
                                        }}

                                    />

                                </div>
                                <div className="col-md-6 p-3">
                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice23.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />

                                </div>
                                <div className="col-md-6 p-3">

                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice24.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-4 ">
                        <div className="card ps-2 row">
                            <p className="btx3">Build & launce without problem</p>
                            <p className="btx4">Increase your team's productivity and save time with a bot that answers and fields customer inquries</p>
                            <div className="row">
                                <div className="col-md-8 p-3">

                                    <div style={{display: 'flex', flexDirection: 'column'}}>

                                        <Image
                                            className="center-block2"
                                            src={pic31}
                                            alt="images of all"
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                            }}

                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 p-3">
                                    <Image
                                        className="center-block2"
                                        src={pic32}

                                        alt="images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 170,
                                        }}

                                    />

                                </div>
                                <div className="col-md-6 p-3">
                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice33.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />

                                </div>
                                <div className="col-md-6 p-3">

                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice34.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="card ps-2 row">
                            <p className="btx3">Build & launce without problem</p>
                            <p className="btx4">Increase your team's productivity and save time with a bot that answers and fields customer inquries</p>
                            <div className="row">
                                <div className="col-md-8 p-3">

                                    <div style={{display: 'flex', flexDirection: 'column'}}>

                                        <Image
                                            className="center-block2"
                                            src={pic41}
                                            alt="images of all"
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                            }}

                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 p-3">
                                    <Image
                                        className="center-block2"
                                        src={pic42}

                                        alt="images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 170,
                                        }}

                                    />

                                </div>
                                <div className="col-md-6 p-3">
                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice43.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />

                                </div>
                                <div className="col-md-6 p-3">

                                    <Image
                                        className="center-block2"
                                        layout="responsive"
                                        src="/images/services/allservice44.png"
                                        alt="images of all"
                                        width={250}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <Footer/>
        </div>
    )
        ;
};

export default Page;