import { animateScroll as scroll } from "react-scroll";

import {
  Fcontainer,
  Fwrap,
  Flcontainer,
  Flwrap,
  Flitems,
  Fltitle,
  Flink,
  Smedia,
  Swrap,
  Sicon,
  Slogo,
  Silink,
  Wright,
} from "./footer.styles";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Fcontainer>
      <Fwrap>
        <Flcontainer>
          <Flwrap>
            <Flitems>
              <Fltitle> About Us</Fltitle>
              <Flink to="/signin">How it works</Flink>
              <Flink to="/signin">Testimonials</Flink>
              <Flink to="/signin">Careers</Flink>
              <Flink to="/signin">Investors</Flink>
              <Flink to="/signin">Terms of Service</Flink>
            </Flitems>
            <Flitems>
              <Fltitle> Video</Fltitle>
              <Flink to="/signin">Submit your video</Flink>
              <Flink to="/signin">Ambassadors</Flink>
              <Flink to="/signin">Agency</Flink>
              <Flink to="/signin">Influencers</Flink>
            </Flitems>
          </Flwrap>

          <Flwrap>
            <Flitems>
              <Fltitle> Contact Us</Fltitle>
              <Flink to="/signin">Contact</Flink>
              <Flink to="/signin">Support</Flink>
              <Flink to="/signin">Destination</Flink>
              <Flink to="/signin">Sponsorship</Flink>
            </Flitems>
            <Flitems>
              <Fltitle> Social Media</Fltitle>
              <Flink to="/signin">Youtube</Flink>
              <Flink to="/signin">Facebook</Flink>
              <Flink to="/signin">Instagram</Flink>
              <Flink to="/signin">Twitter</Flink>
            </Flitems>
          </Flwrap>
        </Flcontainer>

        <Smedia>
          <Swrap>
            <Slogo to="/" onClick={toggleHome}>
              Marvelous Banking Hall
            </Slogo>
            <Wright>
              Marvelous Bank &#169; {new Date().getFullYear()} all right
              reserved.
            </Wright>
            <Sicon>
              <Silink href="/" target="_blank" arial-label="facebook">
                <FaFacebook />
              </Silink>
              <Silink href="/" target="_blank" arial-label="twitter">
                <FaTwitter />
              </Silink>
              <Silink href="/" target="_blank" arial-label="youtube">
                <FaYoutube />
              </Silink>
              <Silink href="/" target="_blank" arial-label="instagram">
                <FaInstagram />
              </Silink>
              <Silink href="/" target="_blank" arial-label="linkedin">
                <FaLinkedin />
              </Silink>
            </Sicon>
          </Swrap>
        </Smedia>
      </Fwrap>
    </Fcontainer>
  );
};
export default Footer;
