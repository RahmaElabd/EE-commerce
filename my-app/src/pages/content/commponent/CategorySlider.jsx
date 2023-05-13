import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo from '../../../assets/slider-image-1.jpeg';

const CategorySlider = () => {
    const settings = {
  dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="container ">
      <h2> Category </h2>
      <Slider {...settings} >
        <img className="w-100 p-2 item" height={200} src={photo} alt="" />
        <img className="w-100 p-2 item" height={200} src={photo} alt="" />
        <img className="w-100 p-2" height={200} src={photo} alt="" />
        <img className="w-100 p-2" height={200} src={photo} alt="" />
        <img className="w-100 p-2" height={200} src={photo} alt="" />
        <img className="w-100 p-2" height={200} src={photo} alt="" />
        <img className="w-100 p-2" height={200} src={photo} alt="" />
      </Slider>
    </div>
  );
}

export default CategorySlider