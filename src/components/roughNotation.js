import React from "react";

let roughNotation =
  typeof window !== `undefined` ? require("react-rough-notation") : null;

const RoughNotation = ({ content, type, color, className }) => {
  const notationType = type || "underline";
  const multiline = false;
  const penColor = color || "white";
  const animationDelay = "500";
  const animationDuration = 800;

  const RoughNotation = roughNotation && roughNotation.RoughNotation;
  const RoughNotationGroup = roughNotation && roughNotation.RoughNotationGroup;

  return (
    <React.Fragment>
      {RoughNotationGroup && RoughNotation && (
        <RoughNotationGroup show={true}>
          <RoughNotation
            type={notationType}
            color={penColor}
            multiline={multiline}
            animationDelay={animationDelay}
            animationDuration={animationDuration}
            className={className}
          >
            {content}
          </RoughNotation>
        </RoughNotationGroup>
      )}
    </React.Fragment>
  );
};

export default RoughNotation;
