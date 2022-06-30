import { forwardRef } from "react";
import { styled } from "./../../stitches.config";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  regex: RegExp;
  error?: string;
}

const StyledInput = styled("input", {
  position: "relative",
});

export const Input: React.FC = forwardRef(({ ...props }, ref) => {
  return <StyledInput />;
});
