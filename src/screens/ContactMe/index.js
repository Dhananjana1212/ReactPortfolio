import React from "react";

function ContactMe() {
  return (
    <section style={{ backgroundColor: "#222831" }}>
      <div id="contact">
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
                    Got a project in
                    <br />
                    mind?
                  </h1>
                </center>{" "}
                <br />
                <br />
                <figure>
                  <img src="images/arrow.JPG" />
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
                <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-12-desktop">
                      <div className="has-background-dark card-content has-text-centered shadow-down">
                        <form
                          action="#"
                          className="columns is-multiline is-centered"
                        >
                          <div className="column is-6-tablet">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              className="input"
                            />
                          </div>
                          <div className="column is-6-tablet">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              className="input"
                            />
                          </div>
                          <div className="column is-full">
                            <textarea
                              name="message"
                              id="message"
                              className="input"
                              placeholder="Your Message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="column is-6-tablet is-10">
                            <button className="button is-primary is-fullwidth is-family-primary">
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}

export default ContactMe;
