import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const Formwrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  font-weight: 700;
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Formcontent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const Formh1 = styled.h1`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: #fff;
`;

export const Formlabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const Forminput = styled.input`
  margin-bottom: 32px;
  pading: 16px 16px;
  height: 30px;
  border: none;
  border-radius: 4px;
`;

export const Formbutton = styled.button`
  background: #01bf71;
  padding: 16px 0px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export const Text = styled.span`
  align-text: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
