import { styled } from "./../../stitches.config";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Logo from "assets/ignite-lab-logo.svg";
import useSidebar from "hooks/useSidebar";

const Container = styled("header", {
  backgroundColor: "$gray700",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: "16px 18px",
  gap: "$2",
  "@bp1": {
    justifyContent: "center",
  },
});

const Menu = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
  span: {
    fontWeight: "bold",
    color: "$gray200",
    fontSize: "$3",
  },
  "@bp1": {
    display: "none",
  },
});

const MenuIcon = styled(HamburgerMenuIcon, {
  color: "$blue500",
  size: "$5",
  cursor: "pointer",
  transition: "all 300ms",
  "&:hover": {
    opacity: "0.3",
  },
});

const CloseMenuIcon = styled(Cross1Icon, {
  color: "$blue500",
  size: "$5",
  cursor: "pointer",
  transition: "all 300ms",
  "&:hover": {
    opacity: "0.3",
  },
});

const HeaderLogo = styled("img", {
  width: 162,
  height: 30,
  "@bp1": {
    width: 262,
    height: 33,
  },
});

export const Header: React.FC = () => {
  const { toggle, isOpen } = useSidebar();
  return (
    <Container>
      <HeaderLogo src={Logo} alt="Ignite Lab Logo" />
      <Menu>
        <span>Aulas</span>
        {isOpen ? (
          <CloseMenuIcon onClick={toggle} />
        ) : (
          <MenuIcon onClick={toggle} />
        )}
      </Menu>
    </Container>
  );
};
