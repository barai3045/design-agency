import React from 'react';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'

const NavMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <a className="navbar-brand logo" href="#">Design<span  className="logospan">Agency</span></a>

                <ul className="navbar-nav">
                    <li className="nav-item p-3">
                        <Link  className="textnone" href={"/"}>Home</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="textnone" href={"/team"}>Team</Link>
                    </li>

                    <li className="nav-item p-3">
                        <Link className="textnone" href={"/service"}>Service</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="textnone" href={"/projects"}>Projects</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="textnone" href={"/testimonials"}>Testimonials</Link>
                    </li>
                    <li className="nav-item p-2">
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </li>
                    <li className="nav-item p-2">
                        <button className="btn btn-success" type="submit">Register</button>
                    </li>

                </ul>

                </div>
        </nav>
    );
};

export default NavMenu;