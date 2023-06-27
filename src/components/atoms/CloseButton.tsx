import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

const StyledCloseButton = styled("button")`
  -webkit-appearance: none;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledCloseButton type="button" {...props}>
    &times;
  </StyledCloseButton>
);

export default CloseButton;
