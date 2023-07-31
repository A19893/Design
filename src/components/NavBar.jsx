import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <div className="container">
          <div className="navFlex">
            <a href="/" className="nav-Brand">
              <img
                src="https://assets.website-files.com/5f3bbdaac308ab3dd8660bfd/5ffd992363d919ec1a4ffd1e_konsept-fasade-logo.svg"
                className="logo"
                alt="logo"
              />
            </a>
            <div className="headings">Products</div>
            <div className="headings">Refrences</div>
            <div className="headings">The Process</div>
            <div className="headings">Manufactures</div>
            <div className="headings">Current Affairs</div>
            <div className="headings">About us</div>
            <div className="headings">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
