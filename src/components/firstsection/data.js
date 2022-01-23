import sav from "../../images/sav.svg";
import trans from "../../images/trans.svg";
import pfin from "../../images/pfin.svg";

export const homeOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: "Premium Bank",
  heading: "Unlimited Access to Premium Offer",
  description:
    "Get access to our exclusive app that allow you send unlimited transactions without getting charged any fees",
  buttonlabel: "Get Started",
  imgStart: false,
  img: sav,
  alt: "piggy bank",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topline: "Premium Bank",
  heading: "Login to your Account",
  description:
    "we got you covered no matter we you are. Alll you need is a internet phone with an connection",
  buttonlabel: "Learn More",
  imgStart: true,
  img: trans,
  alt: "chart",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeThree = {
  id: "register",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: "Join Our Team",
  heading: "Creating an Account is Extremely Easy",
  description:
    "Get everything set up and ready with 10 minutes. All you need to do is add your information and ready to go",
  buttonlabel: "Start Now",
  imgStart: false,
  img: pfin,
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};
