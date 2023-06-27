import { useState } from "react";

import { Drawer, Map, MapFallback } from "../organisms";
import { RichText } from "../molecules";

import { StateContext } from "../../context";

import { states } from "../../data/states";

import { Global, css } from "@emotion/react";

const States = () => {
  const [currentState, setCurrentState] = useState("");

  const context = {
    currentState,
    selectState: (state) => {
      setCurrentState(state);
    }
  };

  return (
    <StateContext.Provider value={{ ...context, currentState }}>
      <h1>Flächensparen? Flächen gewinnen!</h1>
      <h2>Bauen macht Bayern größer</h2>

      <div>
        <Global
          styles={css`
            .some-class {
              color: #1b5182 !important;
              padding-left: 1rem;
              padding-right: 35rem;
            }
          `}
        />
        <Global
          styles={{
            ".some-class": {
              fontSize: 15,
              textAlign: "left"
            }
          }}
        />
        <div className="some-class">
          Der Begriff „Flächenverbrauch“ ist ein Unwort, Flächen werden durch
          Nutzung nicht verbraucht. Umgekehrt gilt aber: wer nachhaltig baut,
          wird Fläche gewinnen – Gut für Mensch, Natur und Klima.
        </div>
      </div>

      <br />

      {/* MOBILE VIEW */}
      <MapFallback states={states} />
      {/* DESKTOP VIEW */}
      <Map />

      {/* OVERLAYS */}
      {states.map(({ code, name, content }) => (
        <Drawer key={`drawer-${code}`} state={code}>
          <RichText title={name} content={content} />
        </Drawer>
      ))}
    </StateContext.Provider>
  );
};

export default States;
