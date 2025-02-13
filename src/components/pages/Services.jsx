import React from "react";
import Hero from "../common/Hero";
import Service from "../servicepage/Service";

const Services = () => {
  return (
    <>
      <Hero
        orangeText="Express Cargo Packers and Movers"
        headingText="All Services"
        headingClass="max-w-[700px] max-lg:max-w-[600px] max-md:max-w-[450px] max-sm:max-w-[320px]"
        paragraph="Express Cargo Packers and Movers offer packing and moving services with utmost care for your goods providing value to your household shifting needs. We are providing packaging and moving services for all types of goods. We offer complete solutions to varying relocating requirements through our flawless services and the mastery to handle all kinds of projects."
        btnClass="!hidden"
        background="bg-services"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <Service />
    </>
  );
};

export default Services;
