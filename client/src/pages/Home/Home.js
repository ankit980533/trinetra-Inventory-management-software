import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Let's start</Link>
            </button>
          </div>
          
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};



export default Home;
