import Hero from "../common/Hero";
import RealTimeTracking from "../trackingpage/RealTimeTracking";

const Tracking = () => {
  return (
    <>
      <Hero
        pageId="trackingHero"
        orangeText="Best Packers and Movers in Jaipur"
        headingText="Real-Time Tracking for Your Peace of Mind"
        headingClass="max-w-[480px] max-lg:max-w-[400px] max-sm:max-w-[320px]"
        paragraph="Stay updated on your shipment's location and status with our reliable, real-time tracking system, ensuring safe and timely deliveries every step of the way."
        btnClass="!hidden"
        background="bg-tracking"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <RealTimeTracking />
    </>
  );
};

export default Tracking;
