const CommonAboutSecond = ({ ...props }) => {
  return (
    <div className="container max-w-[1180px] relative z-20">
      <div className="flex flex-row flex-wrap">
        <div className="w-full max-lg:items-center lg:w-6/12 lg:pe-3 xl:mt-2 flex flex-col justify-center">
          <span
            className={`font-medium max-sm:text-base text-lg !leading-116 text-light-orange ${props.orangeTextClass}`}
          >
            {props.orangeText}
          </span>
          <h2
            className={`font-semibold max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-custom-6xl !leading-120 text-black ${props.blackHeadingClass}`}
          >
            {props.blackHeadingText}
          </h2>
          <p
            className={`font-medium text-light-orange max-sm:text-xl text-2xl lg:text-3xl !leading-120 max-lg:text-center ${props.orangeHeadingSecond}`}
          >
            Welcome to Relocation Shifting.
          </p>
          <p
            className={`${props.paraClass} font-normal max-sm:text-sm text-base !leading-125 text-black opacity-70`}
          >
            {props.paraText}
          </p>
          <button
            className={`${props.btnClass} max-md:px-4 max-md:py-3 !w-full md:px-6 md:py-[14px] font-semibold !leading-118 border border-transparent duration-300 ease-linear`}
          >
            {props.btnText}
          </button>
        </div>
        <div className="w-full relative max-lg:mt-10 max-sm:mt-8 max-lg:justify-center lg:justify-end flex lg:w-6/12 lg:ps-3">
          <img
            className={`xl:max-w-[558px] max-sm:max-w-[450px] max-sm:max-h-[250px] max-lg:max-h-[300px] object-cover xl:h-[490px] max-xl:max-w-[558px] w-full ${props.imageClass}`}
            src={props.image}
            alt={props.imageAlt}
            width={558}
            height={490}
            loading="lazy"
          />
          <div className="absolute z-10 max-xl:hidden xl:right-[-44px] xl:bottom-[-44px] w-[213px] h-[213px] bg-transparent-orange"></div>
        </div>
      </div>
    </div>
  );
};

export default CommonAboutSecond;
