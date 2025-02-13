import React from "react";
import CommonOrangeHeading from "../common/CommonOrangeHeading";
import CommonHeadingBlack from "../common/CommonHeadingBlack";
import CommonParagraph from "../common/CommonParagraph";
import { SLIDER_CARDS_DATA } from "../../utils/helper";
import CommonButton from "../common/CommonButton";

const Service = () => {
  return (
    <div
      id="servicesHero"
      className="max-sm:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36"
    >
      <div className="container max-w-[1180px]">
        <div className="max-w-[682px] w-full text-center mx-auto">
          <CommonOrangeHeading text="Service" className="mb-3" />
          <CommonHeadingBlack
            text="Our Services"
            className="mb-4 !text-dark-blue"
          />
          <CommonParagraph
            className="!text-off-blue"
            text="We Provide All These Relocation Services in India to fulfill every requirement of Our Customers.  For All these Services We made a team of Experience And Professional Staff."
          />
        </div>
        <div className="row !mx-0 w-full mt-[45px] xl:gap-y-6 gap-y-5">
          {SLIDER_CARDS_DATA.map((item, index) => (
            <div
              key={index}
              className={`lg:col-4 sm:col-6 col-12  ${
                index === 1
                  ? "xl:!px-3 lg:px-2 max-lg:!pr-0 !ps-2 max-sm:justify-center flex max-sm:!p-0"
                  : index === 4
                  ? "xl:!px-3 lg:px-2 max-lg:ps-0 !pr-2 max-lg:justify-end max-sm:justify-center flex max-sm:!p-0"
                  : index === 0
                  ? "xl:!pr-3 !pr-2 !ps-0  max-lg:justify-end flex max-sm:!p-0 max-sm:justify-center "
                  : index === 3
                  ? "xl:!pr-3 lg:!pr-2 lg:!ps-0 !ps-2 !pr-0 max-sm:justify-center flex max-sm:!p-0"
                  : index === 2
                  ? "xl:!ps-3 lg:!ps-2 lg:!pr-0 !pr-2 !ps-0 max-lg:justify-end max-sm:justify-center flex max-sm:!p-0"
                  : index === 5
                  ? "xl:!ps-3 !ps-2 !pr-0 max-sm:justify-center flex max-sm:!p-0"
                  : null
              }`}
            >
              <div className="max-w-[364px] h-full group overflow-hidden w-full border border-light-grey shadow-service-cards flex flex-col justify-between md:gap-[22px] gap-[18px]">
                <div className="flex flex-col">
                  <div className="flex flex-col md:gap-[22px] gap-[18px] h-full justify-between">
                    <img
                      className="group-hover:scale-105 duration-300 ease-linear max-w-[364px] w-full object-cover !h-[199px]"
                      src={item.image}
                      alt={item.imageAlt}
                      width={364}
                      height={199}
                      rel="preload"
                    />
                    <div
                      className={`flex flex-col items-center gap-4 xl:px-6 px-5 ${
                        index === 4 ? "max-md:px-[18px]" : ""
                      }`}
                    >
                      <h3
                        className={`text-dark-blue text-center font-medium leading-118 text-xl xl:text-custom-3xl `}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`mt-4 xl:px-6 px-5 ${
                      index === 2 ? "xl:px-[26px]" : ""
                    }`}
                  >
                    <CommonParagraph
                      text={`${item.description} ${item.content}`}
                      className="!text-off-blue text-center "
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full xl:p-6 p-5 !pt-0">
                  <CommonButton
                    href="tel:+91 92262 18651"
                    text="Enquiry Now"
                    className="text-white bg-dark-blue hover:shadow-[0px_0px_10px_0px_inset_#141F3D] hover:bg-transparent text-nowrap sm:py-3.5 !py-3 !px-6 max-sm:!px-4 hover:text-dark-blue hover:border-dark-blue max-w-[146px] max-sm:max-w-[130px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
