import { forwardRef } from "react";
import { ReactSVG } from "react-svg";
import styled from "@emotion/styled";

export type Props = {
  src?: string;
  styles?: string;
};

const Styles = styled("div")<Props>`
  ${(props) => props.styles}
`;

const InlineSvg = forwardRef(({ src, styles }, ref) => (
  <Styles ref={ref} styles={styles}>
    <ReactSVG renumerateIRIElements={false} src={src} />
  </Styles>
));

export default InlineSvg;
