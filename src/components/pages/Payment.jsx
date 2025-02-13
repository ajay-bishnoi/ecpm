import React from "react";
import Hero from "../common/Hero";
import PaymentDetails from "../paymentpage/PaymentDetails";

const Payment = () => {
  return (
    <>
      <Hero
        orangeText="Best Packers and Movers in Jaipur"
        headingText="Secure Payments Made Simple"
        headingClass="max-w-[480px] max-lg:max-w-[400px] max-md:max-w-[380px] max-sm:max-w-[320px]"
        paragraph="Experience fast, safe, and seamless online transactions with our trusted payment solutions."
        btnClass="!hidden"
        background="bg-payment"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <PaymentDetails />
    </>
  );
};

export default Payment;
