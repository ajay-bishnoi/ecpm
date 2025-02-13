import Hero from "../common/Hero";
import CommonAbout from "../common/CommonAbout";
import homeAbout from "../../assets/images/webp/home-about.webp";
import HomepageServices from "../homepage/HomepageServices";
import HomepageProcess from "../homepage/HomepageProcess";
import HomepageCharges from "../homepage/HomepageCharges";
import Quote from "../homepage/Quote";

const Home = () => {
  return (
    <>
    <Hero
        headingText="We Provide Best Relocation Service in India"
        headingClass="max-w-[685px] max-sm:max-w-[320px] max-md:max-w-[350px] max-lg:max-w-[500px]"
        orangeText="Best Packers and Movers in Jaipur"
        background="bg-hero" 
        paragraph="Express Cargo Packers and Movers offer packing and moving services with utmost care for your goods providing value to your household shifting needs. We are providing packaging and moving services for all types of goods. We offer complete solutions to varying relocating requirements through our flawless services and the mastery to handle all kinds of projects."
        paraClass="md:max-w-[583px] max-sm:max-w-[400px] max-md:max-w-[450px]"
      />
      <Quote />
      <CommonAbout
        image={homeAbout}
        imageAlt="worker"
        blackHeadingClass="mb-2 max-lg:max-w-[500px] mx-auto max-lg:!text-center max-md:max-w-[400px] max-sm:max-w-[320px]"
        blackHeadingText="Best Packers and Movers in Jaipur"
        orangeText="About Us"
        orangeTextClass="mb-3"
        paraText="Welcome to Express Cargo Packers and Movers Jaipur! We are one of the leading Packers and Movers in Jaipur, which has stepped forward to help the corporate and residents of Jaipur, by resolving their relocation issues in and out of the region. We deliver customized and integrated solutions to move you comfortably to or from Jaipur. Our company is confronting various moving needs and demands across India. And has continually improved our processes to adapt them to the present market scenario. We have established ourselves as a trusted organization that is diligent in shifting. A lot of households and offices move conveniently and safely."
        paraClass="max-w-[557px] max-sm pt-4 max-lg:text-center max-sm:max-w-[450px]"
      />
      <HomepageProcess />
      <HomepageCharges />
      <HomepageServices />
    </>
  );
};

export default Home;
