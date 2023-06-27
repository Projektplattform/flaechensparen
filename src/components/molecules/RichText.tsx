import { PropsWithChildren } from "react";
import { Heading, Markdown } from "../atoms";

type RichTextType = {
  title: string;
  content: string;
};

const RichText = ({ title, content }: PropsWithChildren<RichTextType>) => (
  <>
    <Heading>{title}</Heading>
    <Markdown children={content} />
  </>
);

export default RichText;
