import { MouseEventHandler, useRef, useEffect } from "react";
import { InlineSvg, InlineSvgType } from "../atoms";
type InteractiveSvgType = {
  onClick: MouseEventHandler;
  onMouseOver: MouseEventHandler;
};

const InteractiveSvg = ({
  onClick,
  onMouseOver,
  src,
  styles
}: InteractiveSvgType & InlineSvgType) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef.addEventListener("mouseover", onMouseOver);
    return () => {
      currentRef.removeEventListener("mouseover", onMouseOver);
    };
  }, [onMouseOver]);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef.addEventListener("click", onClick);
    return () => {
      currentRef.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return <InlineSvg ref={ref} src={src} styles={styles} />;
};

export default InteractiveSvg;
