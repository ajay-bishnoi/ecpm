import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { READ_PATH_LINK } from "../../utils/constants";

const CommonAbout = ({ ...props }) => {
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
    <div className="max-sm:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-36">
      <div className="container max-w-[1180px] relative z-20">
        <div className="flex flex-row max-lg:flex-col-reverse flex-wrap">
          <div className="w-full relative max-lg:mt-10 max-sm:mt-8 max-lg:justify-center flex lg:w-6/12 lg:pe-3">
            <img
              className={`xl:max-w-[558px] w-full max-sm:max-w-[450px] h-[250px] sm:h-[300px] object-cover lg:h-[490px] max-xl:max-w-[558px] ${props.imageClass}`}
              src={props.image}
              alt={props.imageAlt}
              rel="preload"
              width={558}
              height={490}
            />
            <div className="absolute z-10 max-xl:hidden xl:left-[-44px] xl:bottom-[-44px] w-[213px] h-[213px] bg-transparent-orange"></div>
          </div>
          <div className="w-full max-lg:justify-center lg:w-6/12 lg:ps-3 xl:mt-2 flex lg:items-center lg:justify-end">
            <div className="flex max-lg:items-center flex-col">
              <span
                className={`font-medium max-sm:text-base text-lg !leading-116 text-light-orange ${props.orangeTextClass}`}
              >
                {props.orangeText}
              </span>
              <h2
                className={`font-semibold max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-custom-6xl !leading-120 text-black ${props.blackHeadingClass}`}
              >
                {props.blackHeadingText}
              </h2>
              <p
                className={`font-medium text-light-orange max-sm:text-xl text-2xl lg:text-3xl !leading-120 max-lg:text-center ${props.orangeHeadingSecond}`}
              >
                Welcome to Express Cargo.
              </p>
              <p
                className={`${props.paraClass} font-normal max-sm:text-sm text-base !leading-125 text-black opacity-70`}
              >
                {props.paraText}
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
          </div>
        </div>
      </div>
      <span id="read"></span>
    </div>
  );
};

export default CommonAbout;
