import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../../assets/b1.jpg";
import img2 from "../../../assets/slider-image-3.jpeg";
import img3 from "../../../assets/b2.jpg";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row g-0 py-4">
          <div className="col-md-9 ">
            <OwlCarousel className="owl-theme" autoplay={true} items={1} loop>
              <img className="w-100" height={400} src={img1} alt="" />
              <img className="w-100" height={400} src={img2} alt="" />
              <img className="w-100" height={400} src={img3} alt="" />
            </OwlCarousel>
          </div>

          <div className="col-md-3 hidePhoto">
            <img className="w-100" height={200} src={img2} alt="" />
            <img className="w-100" height={200} src={img3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
