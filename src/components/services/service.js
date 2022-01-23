import {
  SContainer,
  SH1,
  SWrap,
  SCard,
  SIcon,
  SH2,
  SP,
} from "./services.styles";
import wallet from "../../images/wallet.svg";
import fin from "../../images/fin.svg";
import rev from "../../images/rev.svg";

const Services = () => {
  return (
    <SContainer id="services">
      <SH1>Our Services</SH1>

      <SWrap>
        <SCard>
          <SIcon src={rev} />
          <SH2>Reduce Expenses</SH2>
          <SP>We help reduce your fees and increase your overall revenue</SP>
        </SCard>

        <SCard>
          <SIcon src={wallet} />
          <SH2>Virtual offices</SH2>
          <SP>You can access our platform online anywhere in the world</SP>
        </SCard>

        <SCard>
          <SIcon src={fin} />
          <SH2>Premium Benefits</SH2>
          <SP>Unlock our special membership card that returns 5% cash back </SP>
        </SCard>
      </SWrap>
    </SContainer>
  );
};

export default Services;
