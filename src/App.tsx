import { useState } from "react";

import styled from "@emotion/styled";
import { AppContext } from "./context";
import { States } from "./components/pages";

const Wrapper = styled("div")`
  &,
  & * {
    box-sizing: border-box;
    font-family: "TT Norms Pro", sans-serif;
    font-weight: bold;
    line-height: 1.4;
    color: #1b5182;
  }
`;

export default function App() {
  const [page, setCurrentPage] = useState("states");
  return (
    <AppContext.Provider value={{ page, setCurrentPage }}>
      <Wrapper>{page === "states" && <States />}</Wrapper>
    </AppContext.Provider>
  );
}
