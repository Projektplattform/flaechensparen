import styled from "@emotion/styled";

type RichTextType = {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
};

const StyledHeading = styled("h1")``;

const Heading = (props: React.PropsWithChildren<RichTextType>) => (
  <StyledHeading {...props} />
);
export default Heading;
