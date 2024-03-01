import React from 'react';
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Image from "next/image";
import test1 from "/public/images/testimonials/test1.png";
import test2 from "/public/images/testimonials/test2.png";
import test3 from "/public/images/testimonials/test3.png";
import test4 from "/public/images/testimonials/test4.png";
import test5 from "/public/images/testimonials/test5.png";
import test6 from "/public/images/testimonials/test6.png";

const Testimonials = () => {
    return (
        <div>
            <div>
                <div className="bg-light">
                    <NavMenu/>
                    <div className="container">
                        <p className="pagetitle">Testimonial List</p>

                        <p className="d-inline-flex "> Home <Image src="/svg/right-arrow.svg" alt="arrow" width={24}
                                                                   height={24}/> <span
                            className="titlespan">Testimonial List </span>
                        </p>
                    </div>
                </div>

                <div className="container">
                    <p className="pt-5 btx1">Testimonial List</p>
                    <p className="btx2 wdth2">Better Agency/SEO Solution At Your Fingetips</p>


                    <div className="row">

                        <div className="col-md-4 p-3">

                            <div className="card">


                                <div className="p-5" style={{display: 'flex', flexDirection: 'column'}}>

                                    <Image
                                        className="center-block"
                                        src={test1}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                        }}

                                    />
                                </div>
                                <div className="d-flex justify-content-center">

                                    <p className="pl-5 pr-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle">Alice Bradley</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle2">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className="p-5" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block"
                                        src={test2}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="pl-5 pr-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle">Alice Bradley</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle2">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className="p-5" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block"
                                        src={test3}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="pl-5 pr-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle">Alice Bradley</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle2">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className="p-5" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block"
                                        src={test4}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="pl-5 pr-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle">Alice Bradley</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle2">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className="p-5" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block"
                                        src={test5}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="pl-5 pr-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle">Alice Bradley</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle2">Backend Developer</p>
                                </div>

                            </div>


                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className="p-5" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Image
                                        className="center-block"
                                        src={test6}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '40%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="pl-5 pr-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle">Alice Bradley</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <p className="testtitle2">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Testimonials;