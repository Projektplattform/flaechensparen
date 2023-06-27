import { createContext } from "react";

const StateContext = createContext({
  selectState: (state: string) => {},
  currentState: "AL"
});

export default StateContext;
