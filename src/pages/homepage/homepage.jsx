import { useState } from "react";
import BigImage from "../../components/bigimage/bigimage";
import {
  homeOne,
  homeThree,
  homeTwo,
} from "../../components/firstsection/data";
import FirstSection from "../../components/firstsection/firstsection";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import Services from "../../components/services/service";
import Sidebar from "../../components/sidebar/sidebar";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <BigImage />
      <FirstSection {...homeOne} />
      <FirstSection {...homeTwo} />
      <Services />
      <FirstSection {...homeThree} />
      <Footer />
    </>
  );
};
export default HomePage;
