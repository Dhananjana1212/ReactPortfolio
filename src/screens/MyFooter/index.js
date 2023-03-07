import React from "react";

function MyFooter() {
  return (
    <section style={{ backgroundColor: "#222831" }}>
      <div className="section">
        <div className="container">
          <center>
            <div className="columns">
              <div className="column is-3-tablet">
                <i
                  className="fa fa-home"
                  style={{ fontSize: "18px", color: "aliceblue" }}
                />{" "}
                <a href="#home">Home</a>
              </div>
              <div className="column is-3-tablet">
                <i
                  className="fa fa-user"
                  style={{ fontSize: "18px", color: "aliceblue" }}
                />{" "}
                <a href="#about">About Me</a>
              </div>
              <div className="column is-3-tablet">
                <i
                  className="fa fa-eye"
                  style={{ fontSize: "18px", color: "aliceblue" }}
                />{" "}
                <a href="#works">My Works</a>
              </div>
              <div className="column is-3-tablet">
                <i
                  className="fa fa-envelope"
                  style={{ fontSize: "18px", color: "aliceblue" }}
                />{" "}
                <a href="#contact">Contact Me</a>
              </div>
            </div>
          </center>
        </div>
      </div>
      <figure>
        <center>
          <img src="images/social.JPG" width={300} />
        </center>
      </figure>
      <br />
      <br />
      <div className="section is-small has-text-centered has-border-top is-border-dark">
        <p className="has-text-light">
          Copyright © Developed by <a href="#">Dhananjana Rathnayaka</a>
        </p>
      </div>
    </section>
  );
}

export default MyFooter;
