import {
  SecContainer,
  SecWrapper,
  SecRow,
  Column1,
  Column2,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  Btnwrap,
  Imgwrap,
  Img,
} from "./firstsection.styles";

import { Button } from "../button/button.styles";

const FirstSection = ({
  lightText,
  lightBg,
  imgStart,
  topline,
  buttonlabel,
  heading,
  darkText,
  id,
  description,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <SecContainer lightBg={lightBg} id={id}>
      <SecWrapper>
        <SecRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Topline>{topline}</Topline>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <Btnwrap>
                <Button
                  to="home"
                  smooth={true}
                  spy={true}
                  duration={500}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonlabel}
                </Button>
              </Btnwrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <Imgwrap>
              <Img src={img} alt={alt} />
            </Imgwrap>
          </Column2>
        </SecRow>
      </SecWrapper>
    </SecContainer>
  );
};
export default FirstSection;
