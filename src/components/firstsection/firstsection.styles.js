import styled from "styled-components";

export const SecContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const SecWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1100px;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 500px;0;
  }
`;

export const SecRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1" ` : `"col1 col2 "`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2" ` : `"col1 col1 " "col2 col2"`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  padding-top: 0;
  max-width: 540px;
  padding-bottom: 60px;
`;

export const Topline = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606 ")};
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? " #010606 " : "#fff ")};
  font-size: 18px;
  line-height: 24px;
`;

export const Btnwrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Imgwrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
