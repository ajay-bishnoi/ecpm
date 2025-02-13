import React from "react";
import Hero from "../common/Hero";
import Information from "../contact/Information";

const ContactUs = () => {
  return (
    <>
      <Hero
        orangeText="Express Cargo Packers and Movers"
        headingText="Contact Us"
        headingClass="max-w-[480px] max-lg:max-w-[400px] max-md:max-w-[380px] max-sm:max-w-[320px]"
        paragraph="Have any questions or need assistance? We're here to help. Reach out to us for quick support and inquiries."
        btnClass="!hidden"
        background="bg-contact"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <Information />
    </>
  );
};

export default ContactUs;
