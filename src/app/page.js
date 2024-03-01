import Image from "next/image";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import FooterForm from "@/components/FooterForm";
import hero1 from "/public/images/heros/hero1.png";
import hero2 from "/public/images/heros/hero2.png";
import hero3 from "/public/images/heros/hero3.png";
import hero4 from "/public/images/heros/hero4.png";
import logo1 from "/public/images/logos/logo1.png";
import logo2 from "/public/images/logos/logo2.png";
import logo3 from "/public/images/logos/logo3.png";
import logo4 from "/public/images/logos/logo4.png";
import logo5 from "/public/images/logos/logo5.png";
import feature1 from "/public/images/features/feature1.png";
import feature2 from "/public/images/features/feature2.png";
import feature3 from "/public/images/features/feature3.png";
import feature4 from "/public/images/features/feature4.png";
import feature5 from "/public/images/features/feature5.png";


export default function Home() {
    return (
        <>

            <div className="homemenu">
                <NavMenu/>
                <div className="container">
                    <div className="row">


                        <div className="col-md-6">
                            <p className="hometext1">Increase Your Customers Loyalty and Satisfaction</p>
                            <p className="hometext2">We help businesses like yours earn more customers, standout from
                                competitors, make more money</p>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-8 p-3">

                                    <div className="card">
                                        <div style={{display: 'flex', flexDirection: 'column'}}>

                                            <Image
                                                className="center-block2"
                                                src={hero1}
                                                alt=" images of all"
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}

                                            />

                                        </div>


                                    </div>


                                </div>
                                <div className="col-md-4 p-3">

                                    <div className="card">
                                        <div style={{display: 'flex', flexDirection: 'column'}}>

                                            <Image
                                                className="center-block2"
                                                src={hero2}
                                                alt=" images of all"
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}

                                            />

                                        </div>


                                    </div>


                                </div>


                                <div className="col-md-5 p-3">

                                    <div className="card">
                                        <div style={{display: 'flex', flexDirection: 'column'}}>

                                            <Image
                                                className="center-block2"
                                                src={hero3}
                                                alt=" images of all"
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}

                                            />

                                        </div>


                                    </div>


                                </div>
                                <div className="col-md-7 p-3">

                                    <div className="card">
                                        <div style={{display: 'flex', flexDirection: 'column'}}>

                                            <Image
                                                className="center-block2"
                                                src={hero4}
                                                alt=" images of all"
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}

                                            />

                                        </div>


                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light">
                    <div className="container">
                        <div className=" d-flex justify-content-center pt-4 pb-4">

                            <Image
                                className="center-block2"
                                src={logo1}
                                alt=" images of all"
                                sizes="100vw"
                                style={{
                                    width: '10%',
                                    height: 'auto',
                                }}

                            /> <Image
                            className="center-block2"
                            src={logo2}
                            alt=" images of all"
                            sizes="100vw"
                            style={{
                                width: '12%',
                                height: 'auto',
                            }}

                        /> <Image
                            className="center-block2"
                            src={logo3}
                            alt=" images of all"
                            sizes="100vw"
                            style={{
                                width: '12%',
                                height: 'auto',
                            }}

                        /> <Image
                            className="center-block2"
                            src={logo4}
                            alt=" images of all"
                            sizes="100vw"
                            style={{
                                width: '12%',
                                height: 'auto',
                            }}

                        /> <Image
                            className="center-block2"
                            src={logo5}
                            alt=" images of all"
                            sizes="100vw"
                            style={{
                                width: '12%',
                                height: 'auto',
                            }}

                        />

                        </div>

                    </div>
                </div>
                .
            </div>


            <div className="bg-white">
                <div className="container">
                    <p className="pt-5 btx1">Work List</p>
                    <p className="btx2 wdth1">We provide the Perfect Solution to your business growth</p>

                    <div className="row mb-5">
                        <div className="col-md-4 pt-5">
                            <Image
                                className="center-block3"
                                src="/images/symbols/symbol1.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle">Grow Your Business</p>
                            <p className="featuretext">We help identify the best ways to improve your business</p>

                            <p className="d-inline-flex featuretext p-3">  Learn more
                                <Image
                                    src="/svg/arrow-r.svg"
                                    alt="arrow"
                                    width={12}
                                    height={12}
                                />
                            </p>
                        </div><div className="col-md-4 pt-5">
                            <Image
                                className="center-block3"
                                src="/images/symbols/symbol2.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle">Improve brand loyalty</p>
                            <p className="featuretext">We help identify the best ways to improve your business</p>

                            <p className="d-inline-flex featuretext p-3">  Learn more
                                <Image
                                    src="/svg/arrow-r.svg"
                                    alt="arrow"
                                    width={12}
                                    height={12}
                                />
                            </p>
                        </div>
                        <div className="col-md-4 pt-5 p">
                            <Image
                                className="center-block3"
                                src="/images/symbols/symbol3.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle">Improve Business Model</p>
                            <p className="featuretext">We help identify the best ways to improve your business</p>

                            <p className="d-inline-flex featuretext p-3">  Learn more
                                <Image
                                    src="/svg/arrow-r.svg"
                                    alt="arrow"
                                    width={12}
                                    height={12}
                                />
                            </p>
                        </div>


                        <div className="col-md-3 pt-5">
                            <div className="card m-2 pt-5 pb-3">
                            <Image
                                className="center-block"
                                src="/images/symbols/symbol3.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle2">240452</p>
                            <p className="featuretext2">Follower</p>

                            </div>
                        </div><div className="col-md-3 pt-5">
                            <div className="card m-2 pt-5 pb-3">
                            <Image
                                className="center-block"
                                src="/images/symbols/symbol3.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle2">240452</p>
                            <p className="featuretext2">Follower</p>

                            </div>
                        </div><div className="col-md-3 pt-5">
                            <div className="card m-2 pt-5 pb-3">
                            <Image
                                className="center-block"
                                src="/images/symbols/symbol3.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle2">240452</p>
                            <p className="featuretext2">Follower</p>

                            </div>
                        </div><div className="col-md-3 pt-5">
                            <div className="card m-2 pt-5 pb-3">
                            <Image
                                className="center-block"
                                src="/images/symbols/symbol3.png"
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                            <p className="featuretitle2">240452</p>
                            <p className="featuretext2">Follower</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="homebg">
                <div className="container">
                    <p className="pt-5 btx1">Featured Project</p>
                    <p className="btx2 wdth1">We provide the Perfect Solution to your business growth</p>

                    <div className="row ">
                        <div className="col-md-6 ">
                            <div className="" style={{display: 'flex', flexDirection: 'column'}}>
                                <Image
                                    className="center-block2 homebg"
                                    src={feature1}
                                    alt=" images of all"
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}

                                />

                            </div>

                            <p className="featuretext ">App Design - June 20, 2022</p>
                            <p className="featuretitle ">App Redesign</p>


                        </div>
                        <div className="col-md-6 row">
                            <div className="col-md-6">
                                <div className="" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block2 homebg"
                                        src={feature2}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}

                                    />

                                </div>

                                <p className="featuretext ">App Design - June 20, 2022</p>
                                <p className="featuretitle ">Redesign channel website landng page</p>


                            </div>
                            <div className="col-md-6">
                                <div className="" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block2 homebg"
                                        src={feature3}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}

                                    />

                                </div>

                                <p className="featuretext ">App Design - June 20, 2022</p>
                                <p className="featuretitle ">Redesign channel website landng page</p>


                            </div>
                            <div className="col-md-6">
                                <div className="" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block2 homebg"
                                        src={feature4}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}

                                    />

                                </div>

                                <p className="featuretext ">App Design - June 20, 2022</p>
                                <p className="featuretitle ">Redesign channel website landng page</p>


                            </div>
                            <div className="col-md-6">
                                <div className="" style={{display: 'flex', flexDirection: 'column'}}>
                                    <Image
                                        className="center-block2 homebg"
                                        src={feature5}
                                        alt=" images of all"
                                        sizes="100vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}

                                    />

                                </div>

                                <p className="featuretext ">App Design - June 20, 2022</p>
                                <p className="featuretitle ">Redesign channel website landng page</p>


                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <FooterForm/>
            <Footer/>
        </>


    )
        ;
}
