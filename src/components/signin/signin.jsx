import {
  Container,
  Form,
  Formbutton,
  Formcontent,
  Formh1,
  Forminput,
  Formlabel,
  Formwrap,
  Icon,
  Text,
} from "./signin.styles";

const SignIn = () => {
  return (
    <Container>
      <Formwrap>
        <Icon to="/">Marvelous Bank</Icon>
        <Formcontent>
          <Form action="#">
            <Formh1>Login To Your Account</Formh1>
            <Formlabel htmlFor="for">Email</Formlabel>
            <Forminput type="email" required />
            <Formlabel htmlFor="for">Password</Formlabel>
            <Forminput type="password" required />
            <Formbutton type="submit"> Login</Formbutton>
            <Text>Forget Password</Text>
          </Form>
        </Formcontent>
      </Formwrap>
    </Container>
  );
};
export default SignIn;
