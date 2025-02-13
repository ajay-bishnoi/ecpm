import React from "react";
import CommonHeadingBlack from "../common/CommonHeadingBlack";
import CommonParagraph from "../common/CommonParagraph";
import pricingChart from "../../assets/images/webp/charges-sheet.webp";
import CommonOrangeHeading from "../common/CommonOrangeHeading";

const HomepageCharges = () => {
  return (
    <div className="bg-dark-blue">
      <div className="container max-w-[1180px]">
        <div className="flex flex-row flex-wrap -mx-3 max-sm:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[104px]">
          <div className="w-full max-xl:justify-center xl:w-4/12 px-3 flex lg:items-center">
            <div className="flex max-xl:items-center flex-col">
              <CommonOrangeHeading text="Charges" className="mb-3" />
              <CommonHeadingBlack
                text="Packers and Movers Jaipur Charges for Shifting"
                className="max-sm:max-w-[350px] max-w-[505px] max-xl:text-center max-lg:mx-auto !text-white"
              />
              <CommonParagraph
                text="Packers and Movers Jaipur approx Cost Calculation as Standard Rates and charges for shifting depend upon distance between the old location and the new one, Size of move, Packing materials used, type of vehicle used for transportation, Manpower that is required to complete the relocation."
                className="!text-white opacity-70 max-sm:max-w-[450px] max-xl:text-center max-xl:mx-auto mt-4 max-w-[460px]"
              />
            </div>
          </div>
          <div className="w-full max-xl:mt-10 max-sm:mt-8 max-lg:justify-center xl:w-8/12 px-3 flex lg:justify-end">
            <img
              rel="preload"
              width={608}
              height={348}
              className="w-full"
              src={pricingChart}
              alt="pricingChart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCharges;
