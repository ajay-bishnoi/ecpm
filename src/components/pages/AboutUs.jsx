import AboutDetails from "../aboutpage/AboutDetails";
import WhyUs from "../aboutpage/WhyUs";
import Hero from "../common/Hero";

const AboutUs = () => {
  return (
    <>
      <Hero
        orangeText="Express Cargo Packers and Movers"
        headingText="Real-Time Tracking for Your Peace of Mind"
        headingClass="max-w-[700px] max-lg:max-w-[600px] max-md:max-w-[450px] max-sm:max-w-[320px]"
        paragraph="Stay updated on your shipment's location and status with our reliable, real-time tracking system, ensuring safe and timely deliveries every step of the way."
        btnClass="!hidden"
        background="bg-about"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <AboutDetails />
      <WhyUs />
    </>
  );
};

export default AboutUs;
