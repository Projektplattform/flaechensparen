import { useEffect, useContext, useState } from "react";
import { InteractiveSvg } from "../molecules";

import { StateContext } from "../../context";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  &,
  & * {
    padding-left: 1em;
    padding-top: 1em;
    //transform: scaleX(1.1) scaleY(1.1);
    display: "flex";

    width: 200px;
    height: 200px;
    transform: scaleX(1.1) scaleY(1.1);
  }
`;

const Map = () => {
  const [mapCSS, setMapCSS] = useState("");

  const { currentState, selectState } = useContext(StateContext);
  const onMapClick = (e) => {
    if (e.target.classList.contains("state")) {
      selectState(e.target.id);
    }
  };

  function changeBackground(e) {
    if (e.target.classList.contains("state")) {
      selectState(e.target.id);
    }
  }

  useEffect(() => {
    setMapCSS(`
      .state {
        fill: #10069F;
        &:hover,
        &#${currentState} {
          fill: #009CDE;
          cursor: pointer;
          
        }
      }
    `);
  }, [currentState, setMapCSS]);

  return (
    <Wrapper>
      <InteractiveSvg
        onMapClick={changeBackground}
        onMouseOver={changeBackground}
        src="map.svg"
        styles={mapCSS}
      />
    </Wrapper>
  );
};

export default Map;
