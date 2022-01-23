import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebtnWrap,
  Sidebarbtn,
} from "./sidebar.styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="register" onClick={toggle}>
            Register
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <Sidebarbtn to="/login">Login</Sidebarbtn>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
