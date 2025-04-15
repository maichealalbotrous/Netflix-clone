import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [Scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid">
      <nav
        class={
          Scroll === true
            ? " fixed  navbar navbar-expand-lg bg-body-tertiary"
            : "navbar navbar-expand-lg bg-body-tertiary"
        }
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              className="NetFlix_logo"
              src="/logo.png"
              style={{ maxWidth: "100px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              className="navbaricon"
              src="/icons8-fries-menu-48.png"
            />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div className="Links">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    tv Shows
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Movies
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    News
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    My List
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Browse By language
                  </a>
                </li>
              </ul>
            </div>
            <div className="Icons d-flex justify-content-around">
              <div className="Search">
                <img src="/search_icon.svg" />
              </div>
              <div className="input_search">
                <input placeholder="Search" />
              </div>
              <div className="Children">Children</div>
              <div className="Notice">
                <img src="/bell_icon.svg" />
              </div>


              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  <img src="/profile_img.png" />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="Login">Login</Link>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
