import React from "react";

let roughNotation =
  typeof window !== `undefined` ? require("react-rough-notation") : null;

const RoughNotation = ({ content, type, color, width, padding, className }) => {
  const notationType = type || "underline";
  const multiline = false;
  const penColor = color || "white";
  const penWidth = width || 1;
  const paddingSize = padding || 5;
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
            strokeWidth={penWidth}
            padding={paddingSize}
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
