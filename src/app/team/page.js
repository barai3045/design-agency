import React from 'react';
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Image from "next/image";
import team1 from "/public/images/team/teamlist1.png";
import team2 from "/public/images/team/teamlist2.png";
import team3 from "/public/images/team/teamlist3.png";


const Team = () => {
    return (
        <div>
            <div className="bg-light">
                <NavMenu/>
                <div className="container">
                    <p className="pagetitle">Team</p>

                    <p className="d-inline-flex "> Home <Image src="/svg/right-arrow.svg" alt="arrow" width={24} height ={24} /> <span className="titlespan">Team </span> </p>
                </div>
            </div>

            <div className="container">
                <p className="pt-5 btx1">Our team member</p>
                <p className="btx2 wdth2">Check our awesome team members</p>


                <div className="row">
                    <div className="col-md-4 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={team1}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">Devon Lane</p>
                            </div>

                        </div>


                    </div>
                    <div className="col-md-4 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={team2}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">Danny Bailey</p>
                            </div>

                        </div>


                    </div>



                <div className="col-md-4 p-3">

                        <div className="card">
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                <Image
                                    className="center-block2"
                                    src={team3}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>
                            <div className="d-flex justify-content-center">
                                <p className="teamtitle">Alex Lov</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>


            <Footer/>
        </div>
    );
};

export default Team;