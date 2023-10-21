import React from "react";

let roughNotation =
  typeof window !== `undefined` ? require("react-rough-notation") : null;

const RoughNotation = ({
  content,
  type,
  color,
  width,
  padding,
  order,
  className,
  delay,
}) => {
  const notationType = type || "underline";
  const multiline = true;
  const penColor = color || "white";
  const penWidth = width || 1;
  const paddingSize = padding || 5;
  const animationDelay = delay || "500";
  const animationDuration = 800;
  const brackets = "right";

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
            brackets={brackets}
          >
            {content}
          </RoughNotation>
        </RoughNotationGroup>
      )}
    </React.Fragment>
  );
};

export default RoughNotation;
