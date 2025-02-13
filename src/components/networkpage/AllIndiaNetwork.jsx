import CommonOrangeHeading from "../common/CommonOrangeHeading";
import CommonHeadingBlack from "../common/CommonHeadingBlack";
import CommonParagraph from "../common/CommonParagraph";
import indiaMap from "../../assets/images/webp/india-map.webp";

const AllIndiaNetwork = () => {
  return (
    <div className="max-sm:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36 md:-mb-[10px] lg:-mb-[26px] xl:-mb-[74px]">
      <div className="container max-w-[1180px]">
        <div className="flex items-center flex-col">
          <CommonOrangeHeading
            text="Network"
            className="mb-3 text-center mx-auto"
          />
          <CommonHeadingBlack
            text="Our All India Network"
            className="mb-4 max-sm:mb-3 max-w-[557px] text-center mx-auto"
          />
          <CommonParagraph
            text="Express Cargo Packers and Movers provide all India door to door packind and moving service as per your specific requirements. We ensure that your household shifting from Jaipur to any corner of India is absolutely hassle-free and timely delivered."
            className="max-w-[890px] opacity-70 text-black text-center"
          />
          <img
            height={696}
            width={621}
            className="mt-7 object-cover max-xl:max-w-[500px] max-md:max-w-[400px] max-sm:max-w-[300px] w-full xl:max-w-[621px] xl:h-[696px]"
            src={indiaMap}
            alt="india"
          />
        </div>
      </div>
    </div>
  );
};

export default AllIndiaNetwork;
