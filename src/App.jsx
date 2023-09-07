import React from "react";
import "./App.css";
import FlexContainer from "./components/FlexContainer";
import Note from "./components/Note";
import { COLORS, FLEX } from "./constants";

function App() {
  return (
    <>
      <FlexContainer>
        <Note title="Pitfall" bgColor={COLORS.PITFALL}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
        <Note>
          <p>
            Lorem ipsum <em>dolor sit amet consectetur adipisicing elit.</em>{" "}
            Eius, cum. Rorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius, cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
        <Note title="Deprecated" bgColor={COLORS.DEPRECATE}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
      </FlexContainer>
      <FlexContainer fd="row" jc="flex-start" fw="nowrap">
        <Note title="Pitfall" bgColor={COLORS.PITFALL}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
        <Note>
          <p>
            Lorem ipsum <em>dolor sit amet consectetur adipisicing elit.</em>{" "}
            Eius, cum. Rorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius, cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
        <Note title="Deprecated" bgColor={COLORS.DEPRECATE}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
      </FlexContainer>
      <FlexContainer fd="column-reverse" jc="center" fw="wrap-reverse">
        <Note title="Pitfall" bgColor={COLORS.PITFALL}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
        <Note>
          <p>
            Lorem ipsum <em>dolor sit amet consectetur adipisicing elit.</em>{" "}
            Eius, cum. Rorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius, cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
        <Note title="Deprecated" bgColor={COLORS.DEPRECATE}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
          </p>
        </Note>
      </FlexContainer>
    </>
  );
}

export default App;
