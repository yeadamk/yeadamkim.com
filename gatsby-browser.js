import React from "react";
import ModeProvider from "./src/components/modeProvider";

const wrapRootElement = ({ element }) => {
  return <ModeProvider>{element}</ModeProvider>;
};

export { wrapRootElement };
