import Hero from "../common/Hero";
import AllIndiaNetwork from "../networkpage/AllIndiaNetwork";

const Network = () => {
  return (
    <>
      <Hero
        pageId="networkHero"
        orangeText="Express Cargo Packers and Movers"
        headingText="All India Network"
        headingClass="max-w-[480px] max-lg:max-w-[400px] max-sm:max-w-[320px]"
        paragraph="Covering every corner of All India with reliable and efficient relocation services. Wherever you are, we’ve got your move covered!"
        btnClass="!hidden"
        background="bg-network"
        paraClass="max-w-[486px] max-sm:max-w-[320px] max-md:max-w-[390px]"
        spacing="xl:!pt-[180px]"
      />
      <AllIndiaNetwork />
    </>
  );
};

export default Network;
