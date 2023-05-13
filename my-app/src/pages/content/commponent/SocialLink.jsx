import React from "react";
import { Link } from "react-router-dom";
import socialMediaLinksData from "../../../../dummyData/data";
import {
  AiFillFacebook,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const SocialLink = () => {
  return (
    <div className="d-flex  justify-content-between align-items-center gap-2 ">
      {socialMediaLinksData.map((i, index) => (
        <Link to={i.url} className="linksNav text-black pointer " key={index}>
          {i.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
