import React from "react";
import CommonParagraph from "./CommonParagraph";
import { QUOTE_PATH_LINK } from "../../utils/constants";
import { Link } from "react-router-dom";

const GetFreeQuote = () => {
  return (
    <div className="container max-w-[1180px]">
      <div className="max-sm:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-36">
        <div className="max-w-[1140px] mx-auto w-full max-lg:px-10 lg:px-16 xl:px-20 shadow-free-quote bg-light-orange py-4 max-sm:px-4 max-sm:min-h-[240px] min-h-[275px] flex flex-col justify-center items-center">
          <div className="flex items-center lg:justify-between lg:w-full lg:gap-4">
            <div className="flex flex-col max-sm:gap-3 gap-4">
              <h2 className="max-w-[694px] max-md:max-w-[550px] max-lg:mx-auto max-sm:max-w-[400px] max-lg:max-w-[650px] max-lg:text-center text-white font-semibold max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-custom-6xl leading-120">
                Get Relocated any where, any time across India.
              </h2>
              <CommonParagraph
                text="We provide you custom-made shifting solutions in Jaipur as per your explicit needs."
                className="max-sm:text-sm text-white max-lg:text-center max-lg:mx-auto"
              />

              <Link
                to={QUOTE_PATH_LINK}
                className="text-light-orange mt-3 hover:text-white hover:border-white hover:bg-light-orange lg:hidden  bg-white  max-sm:text-sm text-nowrap max-md:px-4 max-md:py-3 !w-full px-4 md:py-[14px] font-semibold !leading-118 border border-transparent duration-300 ease-linear max-w-fit mx-auto"
              >
                Get Free Quote
              </Link>
            </div>

            <Link
              to={QUOTE_PATH_LINK}
              className="text-light-orange shadow-[0px_0px_7px_0px_inset_#fff] hover:text-white hover:border-white hover:bg-light-orange max-lg:hidden bg-white max-w-[146px]  max-sm:text-sm text-nowrap max-md:px-4 max-md:py-3 px-4 !w-full  md:py-[14px] font-semibold !leading-118 border border-transparent duration-300 ease-linear"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFreeQuote;
