import React from "react";

function MyHeader() {
  return (
    <header>
      <nav
        className="navbar is-dark is-fixed-top nav-bg"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navigation" className="navbar-menu">
          <div className="navbar-end">
            <a href="#home" className="navbar-item">
              Home
            </a>
            <a href="#about" className="navbar-item">
              About Me
            </a>
            <a href="#works" className="navbar-item">
              My Works
            </a>
            <a href="#contact" className="navbar-item">
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MyHeader;
