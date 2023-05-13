import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img10 from "../../../assets/clithes3.jpg";
import img11 from "../../../assets/clothes 2.jfif";
import img12 from "../../../assets/clothes.jpg";


import { AiFillStar } from "react-icons/ai";

const productsDetalis = ({

  text1,
  text2,
  title,
  money,
  currency,
  rate,
  
}) => {
   const settings = {
     dots: true,
     infinite: true,
     autoplay: true,
     speed: 1000,
     slidesToShow: 1,
     slidesToScroll: 1,
   };


  return (
    <>
      <div className="row align-items-center py-3 productsDetalis">
        <div className="col-md-4">
          <Slider {...settings}>
            <img className="w-100 p-2" height={300} src={img10} />
            <img className="w-100 p-2" height={300} src={img11} />
            <img className="w-100 p-2" height={300} src={img12} />
          </Slider>
        </div>

        <div className="col-md-8 col-sm-8 d-flex align-items-center textPro text-start">
          <div className="info">
            <h2 className="h5 fw-bold text-capitalize mb-2 p-2">{text1}</h2>
            <p className="mb-3 text-muted p-2">{text2}</p>
            <span className="text-success">{title}</span>
            <div className="d-flex justify-content-between p-2 ">
              <p >
                {money} {currency}
              </p>
              <i>
                <AiFillStar className="icon-star" /> {rate}
              </i>
            </div>{" "}
            <button className="btn btn-success w-100 p-2">+ Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};


export default productsDetalis;
