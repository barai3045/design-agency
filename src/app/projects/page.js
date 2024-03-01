import React from 'react';
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Image from "next/image";
import project1 from "/public/images/projects/project1.png";
import project2 from "/public/images/projects/project2.png";
import project3 from "/public/images/projects/project3.png";
import project4 from "/public/images/projects/project4.png";
import project5 from "/public/images/projects/project5.png";
import project6 from "/public/images/projects/project6.png";

const Projects = () => {
    return (
        <div>
            <div className="bg-light">
                <NavMenu/>
                <div className="container">
                    <p className="pagetitle">All Project</p>

                    <p className="d-inline-flex "> Home <Image src="/svg/right-arrow.svg" alt="arrow" width={24}
                                                               height={24}/> <span className="titlespan">All Project </span>
                    </p>
                </div>
            </div>

            <div className="container">
                <p className="pt-5 btx1">All Project</p>
                <p className="btx2 wdth2">Better Agency/SEO Solution At Your Fingetips</p>


                <div className="row">
                    <div className="col-md-6 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={project1}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">LOREM IPSUM DOLOR SIT CONSECTUTAR</p>
                            </div>

                        </div>


                    </div>
                    <div className="col-md-6 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={project2}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">LOREM IPSUM DOLOR SIT CONSECTUTAR</p>
                            </div>

                        </div>


                    </div>


                    <div className="col-md-6 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={project3}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">LOREM IPSUM DOLOR SIT CONSECTUTAR</p>
                            </div>

                        </div>


                    </div> <div className="col-md-6 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={project4}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">LOREM IPSUM DOLOR SIT CONSECTUTAR</p>
                            </div>

                        </div>


                    </div>
                    <div className="col-md-6 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={project5}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">LOREM IPSUM DOLOR SIT CONSECTUTAR</p>
                            </div>

                        </div>


                    </div>


                    <div className="col-md-6 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={project6}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">LOREM IPSUM DOLOR SIT CONSECTUTAR</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>


            <Footer/>
        </div>
    );
};

export default Projects;