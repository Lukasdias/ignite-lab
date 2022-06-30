import { styled } from "./../../stitches.config";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "./../../public/ignite-lab-logo.svg";

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

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Ignite Lab Logo" />
      <Menu>
        <span>Aulas</span>
        <MenuIcon />
      </Menu>
    </Container>
  );
};
