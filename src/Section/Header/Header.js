import React from "react";
import "./Header.css";
import NavBar from "../../Compenent/NavBar";
import SwiperCompenent from "../../Compenent/SwiperCompenent";

const Header = () => {
  return (
    <div className="cont container-fluid">
      <NavBar />
      <div className="maincontent container">
        <div className="Title">
          <img className="TitleImg" src="/hero_title.png" />
        </div>
        <div className="content">
          <p>
            Discovering his ties to a secret ancient, a young man living in
            modern istanpol ambarks on a quest to save the city from an amortal
            anomy
          </p>
        </div>
        <div className="Buttons">
        <button className="Play"><img style={{width:"20px"}} src="/play_icon.png"/>Play</button>
        <button className="MorInfo"><img style={{width:"20px"}} src="/info_icon.png"/>MoreInfo</button>
        </div>
      </div>
      <div className="mb-3">
      <SwiperCompenent Title={"Upcoming"} Category={"upcoming"}/>
      </div>
      </div>
  );
};

export default Header;
