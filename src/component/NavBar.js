import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";


const NavBar =() =>{
 
    return (
      <>
            {/* <Link to="about">About</Link> */}

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              MonkeyNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> <Link className="nav-link active"  to="/">Home</Link> </li>
                {/* <li className="nav-item"> <Link className="nav-link active"  to="/general">general</Link></li> */}
                <li className="nav-item"> <Link className="nav-link active"  to="/business"> business</Link></li>
                <li className="nav-item"> <Link className="nav-link active"  to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"> <Link className="nav-link active"  to="/health">health</Link></li>
                <li className="nav-item"> <Link className="nav-link active"  to="/science">science</Link></li>
                <li className="nav-item"> <Link className="nav-link active"  to="/sports">sports</Link></li>
                <li className="nav-item"> <Link className="nav-link active"  to="/technology">technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  
}

export default NavBar;
