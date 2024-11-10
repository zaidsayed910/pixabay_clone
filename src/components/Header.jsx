import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Header = () => {
  const naviagate = useNavigate()
  console.log(naviagate)

  const location = useLocation()
  console.log(location)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark  " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Pixabay Clone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/features'}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/pricing'}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={'/about'}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {location.pathname == '/' && 
      <Navbar/>
      }
    </>
  );
};

export default Header;
