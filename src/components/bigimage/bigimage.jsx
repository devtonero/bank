import { useState } from "react";
import { Button } from "../button/button.styles";
import {
  BigContainer,
  BigBg,
  BigVid,
  BigContent,
  BigH1,
  BigP,
  Bigbtnwrap,
  ArrowForward,
  ArrowRight,
} from "./bigimage.styles";
import Video from "../../videos/vid.mp4";

const BigImage = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };
  return (
    <BigContainer id="home">
      <BigBg>
        <BigVid autoPlay Loop muted src={Video} type="video/mp4" />
      </BigBg>
      <BigContent>
        <BigH1>VIrtual Banking Made Easy</BigH1>
        <BigP>
          Sign Up for a new account today and receive$250 in credit towards your
          next payment.
        </BigP>
        <Bigbtnwrap>
          <Button
            to="register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </Bigbtnwrap>
      </BigContent>
    </BigContainer>
  );
};

export default BigImage;
