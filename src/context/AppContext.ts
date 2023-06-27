import { createContext } from "react";

const AppContext = createContext({
  setPage: (page: string) => {},
  currentPage: ""
});

export default AppContext;
