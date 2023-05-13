import React from "react";
import { AiFillStar } from "react-icons/ai";
import img from "../../../assets/baby.webp";
const BabyClothes = () => {
  return (
    <>
      <div className="container pb-5 pt-3">
        <div className="row">
          <h2 className="pb-3">Baby Clothes</h2>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2 ">
            <div className="card card-products ">
              <img src={img} alt=".."></img>
              <div className="product-text">
                <span className="text-success">Clouthes</span>
                <h2 className="h6 fw-bold">Baby Clothe</h2>
                <div className="d-flex justify-content-between ">
                  <p>50 Egp</p>
                  <i>
                    <AiFillStar className="icon-star" /> 4.9
                  </i>
                </div>
                <button className="btn text-white w-100"> + ADD </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2  ">
            <div className="card card-products ">
              <img src={img} alt=".."></img>
              <div className="product-text">
                <span className="text-success">Clouthes</span>
                <h2 className="h6 fw-bold">Baby Clothe</h2>
                <div className="d-flex justify-content-between ">
                  <p>50 Egp</p>
                  <i>
                    <AiFillStar className="icon-star" /> 4.9
                  </i>
                </div>
                <button className="btn text-white w-100"> + ADD </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2  ">
            <div className="card card-products ">
              <img src={img} alt=".."></img>
              <div className="product-text">
                <span className="text-success">Clouthes</span>
                <h2 className="h6 fw-bold">Baby Clothe</h2>
                <div className="d-flex justify-content-between ">
                  <p>50 Egp</p>
                  <i>
                    <AiFillStar className="icon-star" /> 4.9
                  </i>
                </div>
                <button className="btn text-white w-100"> + ADD </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-2  ">
            <div className="card card-products ">
              <img src={img} alt=".."></img>
              <div className="product-text">
                <span className="text-success">Clouthes</span>
                <h2 className="h6 fw-bold">Baby Clothe</h2>
                <div className="d-flex justify-content-between ">
                  <p>50 Egp</p>
                  <i>
                    <AiFillStar className="icon-star" /> 4.9
                  </i>
                </div>
                <button className="btn text-white w-100"> + ADD </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BabyClothes;
