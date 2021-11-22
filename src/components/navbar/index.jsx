import React from 'react';
import navImg1 from '../../img/navbar1.png';
import navImg2 from '../../img/navbar2.jpeg';
import './index.css';


function Navbar() {
    return(
        <div className="container-fluid d-flex align-items-center justify-content-between">
            <img className="image-navbar-1" src={navImg1} alt="logo SelfCeckin" />
            <img className="image-navbar-2" src={navImg2} alt="logo 2 SelfCheckin" />
        </div>
    );
}

export default Navbar;