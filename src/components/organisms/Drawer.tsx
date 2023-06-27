import React, { useContext, useState } from "react";
import styled from "@emotion/styled";

import { CloseButton } from "../atoms";
import { StateContext } from "../../context";

const DRAWER_WIDTH = "40vw";

type DrawerType = {
  state: string;
};

type DrawerWrapperType = {
  visible: boolean;
};

const DrawerWrapper = styled("div")<DrawerWrapperType>`
  background: #fff;
  border-left: 1px solid #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${DRAWER_WIDTH};
  padding: 2rem;
`;

const Drawer = ({ state, children }: React.PropsWithChildren<DrawerType>) => {
  const { currentState, selectState } = useContext(StateContext);
  var visible = currentState === state;
  const { hidden, setHidden } = useState(false);
  return (
    <div>
      {currentState === state ? (
        <DrawerWrapper visible={currentState === state}>
          <CloseButton
            onClick={() => {
              selectState("");
            }}
          />
          {children}
        </DrawerWrapper>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Drawer;
