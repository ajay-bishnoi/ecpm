import React from "react";
import CommonAbout from "../common/CommonAbout";
import ourProfile from "../../assets/images/webp/our-profile.webp";
import ourVision from "../../assets/images/webp/our-vision.webp";
import ourMission from "../../assets/images/webp/our-mission.webp";
import CommonAboutSecond from "../common/CommonAboutSecond";

const AboutDetails = () => {
  return (
    <div id="aboutHero">
      <CommonAbout
        image={ourProfile}
        imageAlt="ourProfile"
        imageClass="max-lg:!object-top"
        orangeHeadingSecond="hidden"
        orangeTextClass="mb-3"
        blackHeadingClass="max-sm:mb-3 mb-4"
        orangeText="About Us"
        blackHeadingText="Our Profile"
        paraText="At Express Cargo Packers and Movers Jaipur! We are one of the leading Packers and Movers in Jaipur, which has stepped forward to help the corporate and residents of Jaipur, by resolving their relocation issues in and out of the region. We deliver customized and integrated solutions to move you comfortably to or from Jaipur. Our company is confronting various moving needs and demands across India. And has continually improved our processes to adapt them to the present market scenario. We have established ourselves as a trusted organization that is diligent in shifting. A lot of households and offices move conveniently and safely.
"
        paraClass="max-w-[557px] max-md:max-w-[600px] max-lg:max-w-[750px] max-lg:text-center max-sm:max-w-[450px]"
        btnClass="!hidden"
      />
      <CommonAboutSecond
        image={ourMission}
        imageAlt="Our Mission"
        imageClass="max-lg:!object-top"
        orangeHeadingSecond="hidden"
        orangeTextClass="mb-3"
        blackHeadingClass="max-sm:mb-3 mb-4"
        orangeText="About Us"
        blackHeadingText="Our Mission"
        paraText="At Express Packers and Movers Jaipur, we goal to change how people experience packing and moving experiences. Many see it as an exhausting, time-consuming chore, while others focus on its drain on finances. At Express Packers and Movers, we recognize that accessing packing and moving services is not a luxury but an absolute requirement; therefore, we understand its significance for customers and clients. That is why we strive to make them affordable, accessible, and reliable - you can count on our professional and trustworthy team for an enjoyable moving experience while they remove your worries! Below is a comprehensive list of our services which can transform your frown into a smile:"
        paraClass="max-w-[557px] max-md:max-w-[600px] max-lg:max-w-[750px] max-lg:text-center max-sm:max-w-[450px]"
        btnClass="!hidden"
      />
      <CommonAbout
        image={ourVision}
        imageAlt="ourVision"
        imageClass="max-lg:!object-center"
        orangeHeadingSecond="hidden"
        orangeTextClass="mb-3"
        blackHeadingClass="max-sm:mb-3 mb-4"
        orangeText="About Us"
        blackHeadingText="Our Vision"
        paraText="Millions of people across Jaipur and the nation are struggling with one of life's greatest sources of anxiety: moving their homes or offices! Moving out of an old place and into a new one can significantly disrupt, leading to much mental strain and increasing stress levels considerably. These difficulties compound when we must do it all ourselves. Express Packers and Movers in Jaipur have assembled an empathetic team of professionals who understand both the significance and needs of moving services for our customers. We goal to make moving an enjoyable, stress-free experience where people don't waste days looking for the ideal movers in Jaipur!"
        paraClass="max-w-[557px] max-md:max-w-[600px] max-lg:max-w-[750px] max-lg:text-center max-sm:max-w-[450px]"
        btnClass="!hidden"
      />
    </div>
  );
};

export default AboutDetails;
