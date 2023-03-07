import React from "react";

function HeroBody() {
  return (
    <section style={{ backgroundColor: "#222831" }}>
      <div id="home">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered">
              <div
                data-aos="fade-left"
                className="column
        is-10-mobile is-offset-1-mobile
        is-10-tablet is-offset-1-tablet
        is-4-desktop is-offset-1-desktop
        is-4-widescreen is-offset-1-widescreen
        is-4-fullhd is-offset-1-fullhd"
              >
                <br />
                <br />
                <h1 className="has-text-white is-family-primary has-text-weight-bold" style={{fontSize: "80px"}}>
                  {" "}
                  {/*font-tertiary */}
                  Hi!
                  <br />
                  I’m Dhananjana
                </h1>
                <br />
                <h1 className="has-text-white is-family-primary has-text-weight-bold has-text-warning "style={{fontSize: "80px"}}>
                  Web Developer
                </h1>
                <br />
                <a
                  href="#contact"
                  className="button is-extra-small is-primary is-family-primary"
                >
                  Hire Me
                </a>{" "}
                &nbsp;&nbsp;
                <a
                  href="images/dhananjana-cv.pdf"
                  className="button is-extra-small is-dark is-family-primary"
                  download
                >
                  Download CV&nbsp;&nbsp;
                  <i
                    className="fa fa-download"
                    style={{ fontSize: "18px", color: "aliceblue" }}
                  />
                </a>
              </div>
              <div
                data-aos="fade-down"
                className="column
        is-10-mobile is-offset-1-mobile
        is-10-tablet is-offset-1-tablet
        is-5-desktop is-offset-1-desktop
        is-5-widescreen is-offset-1-widescreen
        is-5-fullhd is-offset-1-fullhd"
              >
                <br />
                <br />
                <figure className="image is-square">
                  <img src="images/dhana-new.png" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBody;
