import React from "react";

const CommonHeadingBlack = ({ ...props }) => {
  return (
    <h2
      className={`font-semibold max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-custom-6xl !leading-120 text-black ${props.className}`}
    >
      {props.text}
    </h2>
  );
};

export default CommonHeadingBlack;
