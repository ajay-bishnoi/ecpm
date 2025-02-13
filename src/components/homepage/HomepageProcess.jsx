import { PROCESS_CARDS_DATA } from "../../utils/helper";
import CommonHeadingBlack from "../common/CommonHeadingBlack";
import CommonOrangeHeading from "../common/CommonOrangeHeading";
import CommonParagraph from "../common/CommonParagraph";

const HomepageProcess = () => {
  return (
    <div className="container max-w-[1180px]">
      <div className="max-sm:pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-36 flex flex-col">
        <CommonOrangeHeading text="Process" className="mb-3 text-center" />
        <CommonHeadingBlack
          text="Working Process of Packers and Movers in Jaipur"
          className="text-center max-lg:max-w-[500px] max-md:max-w-[400px] max-sm:max-w-[320px] max-w-[557px] mx-auto"
        />
        <CommonParagraph
          text="We Provide All These Relocation Services in India to fulfill every requirement of Our Customers.  For All these Services We made a team of Experience And Professional Staff."
          className="text-center max-sm:max-w-[450px] mx-auto max-w-[768px] opacity-70 max-sm:mt-3 mt-4"
        />
        <div className="flex flex-row flex-wrap -mx-3 max-sm:pt-8 sm:pt-12 md:pt-14 lg:pt-[60px]">
          {PROCESS_CARDS_DATA.map((item, index) => (
            <div
              key={index}
              className={`w-6/12 md:w-3/12 px-3 ${
                index === 2 && "max-md:mt-8"
              } ${index === 3 && "max-md:mt-8"}`}
            >
              <div className="flex items-center flex-col">
                <img
                  className={`w-10 h-10 ${index === 0 ? "!w-[46px]" : ""}`}
                  src={item.image}
                  alt="icons"
                />
                <h3 className="max-w-[177px] max-lg:max-w-[160px] text-black font-medium text-lg text-center mx-auto lg:text-custom-3xl leading-118 mt-3">
                  {item.title}
                </h3>
                <p className="max-w-[244px] opacity-70 text-sm text-black font-normal text-center mx-auto lg:text-base leading-125 mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageProcess;
