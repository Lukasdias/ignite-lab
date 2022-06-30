import { css, styled } from "./../../stitches.config";
import {
  DiscordLogoIcon as Disc,
  LightningBoltIcon as Bolt,
} from "@radix-ui/react-icons";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "fill" | "outline";
}

const StyledButton = styled("button", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "257px",
  height: "56px",
  px: "24px",
  py: "16px",
  gap: "$2",
  borderRadius: "$1",
  cursor: "pointer",
  span: {
    fontSize: "14px",
    fontWeight: "$heavy",
  },
  transition: "all 300ms",
  variants: {
    variant: {
      fill: {
        color: "white",
        backgroundColor: "$green300",
        border: "none",
        "&:hover": {
          backgroundColor: "$green500",
        },
      },
      outline: {
        background: "transparent",
        border: "1.25px solid",
        borderColor: "$blue500",
        color: "$blue500",
        "&:hover": {
          backgroundColor: "$blue500",
          color: "black",
        },
      },
    },
  },
});

const IconStyles = css({
  size: "24px",
});

const DiscordLogoIcon = styled(Disc, {
  ...IconStyles,
  color: "white",
});

const LightningBoltIcon = styled(Bolt, {
  ...IconStyles,
  color: "$blue500",
});

const Icon: React.FC<{ type: "discord" | "bolt" }> = ({ type }) => {
  switch (type) {
    case "discord":
      return <DiscordLogoIcon />;
    case "bolt":
      return <LightningBoltIcon />;
  }
};

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledButton variant={props.variant} type={props.type}>
      <Icon type={props.variant === "fill" ? "discord" : "bolt"} />
      <span>{props.children}</span>
    </StyledButton>
  );
};
