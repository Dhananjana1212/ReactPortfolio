import React from "react";

function MyWorks() {
  return (
    <section style={{ backgroundColor: "#222831" }}>
      <div id="works">
        <div className="container">
          <div className="has-text-centered">
            <h2 className="section-title has-text-warning is-family-primary has-text-weight-bold" style={{fontSize: "60px"}}>
              My Recent Works
            </h2>
            <a href="#" className="button is-extra-small is-primary">
              All
            </a>{" "}
            <a href="#" className="button is-extra-small is-dark">
              Web Dev
            </a>{" "}
            <a href="#" className="button is-extra-small is-dark">
              Mobile Apps Dev
            </a>{" "}
            <a href="#" className="button is-extra-small is-dark">
              Web Design
            </a>
          </div>
          <br />
          <br />
          <div className="columns is-multiline">
            <div className="column is-4-desktop is-6-tablet">
              <figure className="image is-4by3">
                <img src="images/tile1.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="column is-4-desktop is-6-tablet">
              <figure className="image is-4by3">
                <img src="images/tile2.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="column is-4-desktop is-6-tablet">
              <figure className="image is-4by3">
                <img src="images/tile3.png" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWorks;
