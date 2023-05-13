import React from "react";
import { Link } from "react-router-dom";
import imggg from "../../../assets/images.png";
const Brands = () => {
  return (
    <>
      <div className="container pb-5 pt-3">
        <div className="row p-4">
          <h2 className="pb-3">Brands</h2>
          <div className="col-sm-5 col-lg-3 col-xl-2 col-xxl-1 ">
            <div className=" ">
              <Link>
                <img
                  src={imggg}
                  height={100}
                  width={100}
                  className="brandBox m-4 "
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
          <div className="col-sm-5 col-lg-3 col-xl-2 col-xxl-1 ">
            <div className=" ">
              <Link>
                <img
                  src={imggg}
                  height={100}
                  width={100}
                  className="brandBox m-4 "
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
          <div className="col-sm-5 col-lg-3 col-xl-2 col-xxl-1 ">
            <div className=" ">
              <Link>
                <img
                  src={imggg}
                  height={100}
                  width={100}
                  className="brandBox m-4 "
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
          <div className="col-sm-5 col-lg-3 col-xl-2 col-xxl-1 ">
            <div className=" ">
              <Link>
                <img
                  src={imggg}
                  height={100}
                  width={100}
                  className="brandBox m-4 "
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
          <div className="col-sm-5 col-lg-3 col-xl-2 col-xxl-1 ">
            <div className=" ">
              <Link>
                <img
                  src={imggg}
                  height={100}
                  width={100}
                  className="brandBox m-4 "
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
          <div className="col-sm-5 col-lg-3 col-xl-2 col-xxl-1 ">
            <div className=" ">
              <Link>
                <img
                  src={imggg}
                  height={100}
                  width={100}
                  className="brandBox m-4 "
                  alt=""
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Brands;
