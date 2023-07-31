import React from "react";

const Title = () => {
  return (
    <>
      <div className="herowrap">
        <div className="container">
          <div className="title-flex">
            <div className="title-leftwrap">
              <h1>
                Architects.
                <br />
                <br />
                <br />
                <br />
                Builders.
                <br />
                <br />
                <br />
                <br />
                Builders.
                <br />
              </h1>
            </div>
            <div className="title-rightWrap">
              <p className="hero-Text">
                Konsept Fasade is a professional partner for builders and
                architects who seek high competence and the delivery of quality
                windows and doors for building projects.
              </p>
              <p className="read-text">
                Read about how we support builders and architects in the design
                and construction process.
              </p>
              <div className="hero-producers">
                <a href="/" className="hero-producer-block">
                  <img
                    className="hero-producer-logo"
                    src="https://assets.website-files.com/5f3bbdaac308ab3dd8660bfd/607c5312c684c28094f819e0_schuco-til-forsiden.jpg"
                    alt="Missing"
                  />
                </a>
                <a href="/" className="hero-producer-block">
                  <img
                    className="hero-producer-logo"
                    src="https://assets.website-files.com/5f3bbdaac308ab3dd8660bfd/5ffd96b707915df5f0139c40_PinClipart.com_boycott-clipart_4964021-p-500.png"
                    alt="Missing"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
