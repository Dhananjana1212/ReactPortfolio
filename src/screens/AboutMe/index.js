import React from "react";

function AboutMe() {
  return (
    <section style={{ backgroundColor: "#222831" }}>
      <div id="about">
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
                <center>
                  <h1 className="titled title is-1 mb-6 has-text-warning is-family-primary has-text-weight-bold">
                    About Me
                  </h1>
                  <h2 className="subtitled subtitle has-text-white is-family-primary">
                    I am an energetic, ambitious person who has developed a
                    mature and responsible approach to any task that I
                    undertake, or situation that I am presented with.
                  </h2>
                </center>{" "}
                <br />
                <br />
                <figure>
                  <img src="images/sitting.JPG" />
                </figure>
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
                <h4 className="has-text-white is-family-primary">
                  <b>Name :</b> R.M.Sanduni Dhananjana Rathnayake
                  <br />
                  <br />
                  <b>Address :</b> 204/2,“Rathnavilla”, Galahitiyawa,
                  Kuliyapitiya
                  <br />
                  <br />
                  <b>University :</b> University of Colombo School of Computing
                  <br />
                  <br />
                  <b>Birthday :</b> 24/04/1999
                  <br />
                  <br />
                  <b>Contact No :</b> 0768115987
                  <br />
                  <br />
                  <b>Email :</b> dhanarathnayake99@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
