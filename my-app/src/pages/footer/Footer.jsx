import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGoogleSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4 ">
            <AiFillFacebook className="icons  fs-3 m-2" />

            <AiFillTwitterSquare className="icons  fs-3  m-2" />

            <AiFillGoogleSquare className="icons  fs-3  m-2" />

            <AiOutlineInstagram className="icons  fs-3 m-2" />

            <AiFillLinkedin className="icons  fs-3 m-2" />

            <AiFillGithub className="icons  fs-3 m-2" />
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <label className="form-label  p-1" for="form5Example21">
                    Email address :
                  </label>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-5 ">
                    <input
                      type="email"
                      id="form5Example21"
                      placeholder="Email address"
                      className=" form-control "
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className=" ">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
                <h5 className="text-uppercase mb-3">Get to Know Us</h5>

                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-muted linkInfo ">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
                <h5 className="text-uppercase mb-3">LET US HELP YOU</h5>

                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      How to shop on E-Commerce ?
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Delivery options and timelines
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
                <h5 className="text-uppercase mb-3">
                  MAKE MONEY WITH E-Commerce
                </h5>

                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Sell on E-Commerce
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Become a Sales Consultant
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Become a Logistics Service Partner
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Join the E-Commerce KOL Program
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
                <h5 className="text-uppercase mb-3">
                  E-Commerce INTERNATIONAL
                </h5>

                <ul className="list-unstyled mb-4 text-start ">
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Algeria
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Egypt
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Ghana
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-muted linkInfo">
                      Kenya
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center pb-3 footerInfo">
          © 2023 Copyright :
          <a className="text-white linkInfo" href="https://google.com">
            {" "}
            E-Commerce
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
