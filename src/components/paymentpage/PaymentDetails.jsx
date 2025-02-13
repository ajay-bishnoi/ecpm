import CommonHeadingBlack from "../common/CommonHeadingBlack";
import CommonParagraph from "../common/CommonParagraph";
import CommonOrangeHeading from "../common/CommonOrangeHeading";
import { PAYMENT_DATA_LIST } from "../../utils/helper";
import payment from "../../assets/images/webp/payment.webp";
const PaymentDetails = () => {
  return (
    <div
      id="paymentHero"
      className="max-sm:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36"
    >
      <div className="container max-w-[1180px]">
        <div className="flex items-center flex-col">
          <CommonOrangeHeading
            text="Payment"
            className="mb-3 text-center mx-auto"
          />
          <CommonHeadingBlack
            text="Payment Details"
            className="mb-4 max-sm:mb-3 max-w-[557px] text-center mx-auto"
          />
          <CommonParagraph
            text="Experience fast, safe, and seamless online transactions with our trusted payment solutions"
            className="max-w-[890px] opacity-70 text-black text-center"
          />
          <div className="w-full max-w-[1140px] max-sm:mt-8 mt-10 rounded-2xl max-sm:p-3 p-8 flex justify-center items-center lg:p-10 xl:p-[60px_72px] bg-off-grey">
            <img
              className="xl:max-w-[996px] max-md:hidden xl:h-[331px] rounded-2xl object-cover max-xl:max-w-[990px] w-full"
              width={996}
              height={331}
              src={payment}
              alt="payment-details"
            />
            <div className="w-full md:hidden bg-white rounded-2xl p-3 flex flex-col gap-6">
              <CommonHeadingBlack
                text="Payment"
                className="text-center mx-auto"
              />
              <div className="flex flex-col gap-5">
                {PAYMENT_DATA_LIST.map((item, index) => (
                  <div
                    key={index}
                    className="flex max-sm:items-start items-center gap-5 justify-between max-sm:max-w-[400px] max-md:max-w-[500px] mx-auto w-full"
                  >
                    <span className="text-base max-sm:text-sm leading-125 text-black font-medium">
                      {item.name}:
                    </span>
                    {index === 0 ? (
                      <span className="text-base max-sm:text-sm leading-125 text-black font-medium max-sm:max-w-[185px]">
                        {item.value}
                      </span>
                    ) : (
                      <span className="text-base max-sm:text-sm leading-125 text-black font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
