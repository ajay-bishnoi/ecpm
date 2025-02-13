import React from "react";

const CommonButton = ({ ...props }) => {
  return (
    <a
      className={`max-w-[147px] ${props.aClass}`}
      href={props.href}
      target={props.target}
    >
      <button
        className={`${props.className} max-md:px-4 max-md:py-3 !w-full md:px-6 md:py-[14px] font-semibold !leading-118 border border-transparent duration-300 ease-linear`}
      >
        {props.text}
      </button>
    </a>
  );
};

export default CommonButton;
