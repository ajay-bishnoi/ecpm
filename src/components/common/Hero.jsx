import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { READ_PATH_LINK } from "../../utils/constants";

const Hero = ({ ...props }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  let pathName = location.pathname;

  return (
    <div
      id={props.pageId}
      className={`xl:h-[640px] sm:h-[500px] h-[330px] relative after:z-10 after:absolute after:inset-0 after:opacity-50 after:w-full after:h-full after:bg-black bg-cover bg-center bg-black ${
        pathName === "/" ? "sm:!h-[640px] !h-[560px]" : ""
      } ${props.background}`}
    >
      <div className="container max-w-[1180px] relative z-20">
        <div
          className={`flex flex-col max-lg:py-24 max-sm:py-16 lg:pt-[106px] ${props.spacing}`}
        >
          <span className="font-medium max-sm:text-base text-lg !leading-116 text-light-orange">
            {props.orangeText}
          </span>
          <h1
            className={`font-bold max-sm:text-3xl sm:text-4xl md:text-5xl lg:text-custom-8xl text-white !leading-119 mt-[10px] ${props.headingClass}`}
          >
            {props.headingText}
          </h1>
          <p
            className={`font-normal max-sm:text-base text-base !leading-125 text-white max-sm:mt-3 mt-4 ${props.paraClass}`}
          >
            {props.paragraph}
          </p>
          {pathName === "/" && (
            <Link
              to={READ_PATH_LINK}
              className="text-white hover:text-light-orange hover:border-light-orange hover:bg-white bg-light-orange max-sm:text-sm text-nowrap max-md:px-5 max-md:py-3 !w-full px-[30px] md:py-[14px] font-semibold !leading-118 border border-transparent duration-300 ease-linear max-w-fit hover:shadow-[0px_0px_10px_0px_inset_#FD8447] max-sm:mt-6 mt-7"
            >
              Read More
            </Link>
          )}
        </div>
        <span id="quote"></span>
      </div>
    </div>
  );
};

export default Hero;
