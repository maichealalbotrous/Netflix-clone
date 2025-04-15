import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="container">
        <div className="Logos">
          <img  style={{maxWidth:"30px"}} src="/facebook_icon.png" />
          <img  style={{maxWidth:"30px"}} src="/instagram_icon.png" />
          <img  style={{maxWidth:"30px"}} src="/twitter_icon.png" />
          <img  style={{maxWidth:"30px"}} src="/youtube_icon.png" />
        </div>
        <div className="Childreen">
        
        <div className="child_one">
          <p>Audio Descreption</p>
          <p>Investor Rlation</p>
          <p>legal Notics</p>
        </div>
     

      <div className="Child_two">
        <p>Help Center</p>
        <p> Jobs</p>
        <p>Cookies preferance</p>
      </div>

      <div className="Child_three">
        <p> Git cards</p>
        <p>terams of Use </p>
        <p> corborate information</p>
      </div>

      <div className="Child_four">
        <p>Media Center</p>
        <p>Privacy</p>
        <p>Contact Us</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
