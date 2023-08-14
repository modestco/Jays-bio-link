import React from "react";
import { SocialIcon } from "react-social-icons";
import "../../styles/Home.module.css";

export default function Socials() {
  return (
    <div className="social">
      <SocialIcon
        className="socials"
        url="https://twitter.com/theshamingofjay"
        network="twitter"
        bgColor="white"
        fgColor="#ff3131"
      />

      <SocialIcon
        className="socials"
        url="https://www.tiktok.com/@theshamingofjay"
        network="tiktok"
        bgColor="white"
        fgColor="#ff3131"
      />

      <SocialIcon
        className="socials"
        url="https://www.instagram.com/theshamingofjay"
        network="instagram"
        bgColor="white"
        fgColor="#ff3131"
      />

      <SocialIcon
        className="socials"
        url="https://www.facebook.com/profile.php?id=100091070141123&mibextid=LQQJ4d"
        network="facebook"
        bgColor="white"
        fgColor="#ff3131"
      />
    </div>
  );
}
