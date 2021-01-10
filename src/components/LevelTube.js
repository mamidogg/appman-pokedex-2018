import React from "react";

//////////////// APP COMPONENTS ////////////////
import {
  TubeContainer,
  TubeBackground,
  TubeProgress,
} from "./shared/StyledComponents";

const LevelTube = (props) => (
  <TubeContainer>
    <TubeBackground />
    <TubeProgress percent={props.percent} />
  </TubeContainer>
);

export default LevelTube;
