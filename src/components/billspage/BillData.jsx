import React from "react";
import CommonAbout from "../common/CommonAbout";
import billOne from "../../assets/images/webp/bill-one.webp";
import billTwo from "../../assets/images/webp/bill-two.webp";
import CommonAboutSecond from "../common/CommonAboutSecond";

const BillData = () => {
  return (
    <div id="aboutHero">
      <CommonAbout
        image={billOne}
        imageAlt="ourProfile"
        imageClass="max-lg:!object-top sm:!h-[560px] !h-[338px] !object-contain"
        orangeHeadingSecond="hidden"
        orangeTextClass="mb-3"
        blackHeadingClass="max-sm:mb-3 mb-4 max-lg:!max-w-[530px] max-lg:!text-center"
        blackHeadingText="Packers and Movers in India Bills For Claim - TAX INVOICE"
        paraText="At Om Packers and Movers in India, we are more than just a relocation service; we are your partners in ensuring a smooth and transparent moving experience. Operating in the heart of India, our primary goal is to make your transition as seamless as possible.
One of our most applauded services in India is our meticulous approach to packers and movers' bill claims. We, at Om Packers and Movers, believe in absolute transparency. Hence, when you engage with us in India, every penny you spend is accounted for. In the rare instance of any inconsistencies or disputes over the bill, our India clients can easily file a claim. We guarantee a swift and fair resolution, prioritizing customer satisfaction above all else.
"
        paraClass="max-w-[557px] max-md:max-w-[600px] max-lg:max-w-[750px] max-lg:text-center max-sm:max-w-[450px]"
        btnClass="!hidden"
      />
      <CommonAboutSecond
        image={billTwo}
        imageAlt="Our Mission"
        imageClass="max-lg:!object-top !h-[430px] !object-contain"
        orangeHeadingSecond="hidden"
        orangeTextClass="mb-3"
        blackHeadingClass="max-sm:mb-3 mb-4 max-lg:!max-w-[530px] max-lg:!text-center"
        blackHeadingText="PACKING LIST - Packers and Movers in India For Bill Claim"
        paraText="Om Packers and Movers in India stands as a beacon of trust and professionalism in the relocation industry. When it comes to ensuring a transparent and hassle-free moving experience in India, we lead the way with our comprehensive packing list system."
        paraClass="max-w-[557px] max-md:max-w-[600px] max-lg:max-w-[750px] max-lg:text-center max-sm:max-w-[450px]"
        btnClass="!hidden"
      />
    </div>
  );
};

export default BillData;
