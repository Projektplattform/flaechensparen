import { useContext } from "react";

import { Dropdown } from "../atoms";

import { StateContext } from "../../context";

import { StateType } from "../../data/states";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  &,
  & * {
    padding-left: 0.5em;
  }
`;

type DropdownType = {
  states: StateType[];
};

const MapFallback = ({ states }: DropdownType) => {
  const { currentState, selectState } = useContext(StateContext);
  const onChange = (e) => selectState(e.target.value);

  return (
    <Wrapper>
      <Dropdown
        includeBlank={true}
        blankLabel="-- Flächengewinnendes Bauen --"
        currentOption={currentState}
        onChange={onChange}
        options={states.map((s) => [s.code, s.name])}
      />
    </Wrapper>
  );
};

export default MapFallback;
