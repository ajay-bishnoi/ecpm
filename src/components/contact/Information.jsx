import React, { useState } from "react";
import infoEllipse from "../../assets/images/webp/info-ellipes.webp";
import arrowEllipse from "../../assets/images/webp/arrow-ellipse.webp";
import { INFO_DATA } from "../../utils/helper";

const Information = () => {
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    contact: "",
    message: "",
  });

  const validateInput = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) {
          return "First Name is required.";
        }
        break;
      case "lastName":
        if (!value.trim()) {
          return "Last Name is required.";
        }
        break;
      case "contact":
        if (!value.trim()) {
          return "Phone Number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          return "Phone Number must be 10 digits.";
        }
        break;
      case "emailAddress":
        if (!value.trim()) {
          return "Email is required.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email as (@example.com).";
        }
        break;
      case "message":
        if (!value.trim()) {
          return "Message is required.";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const validateFields = () => {
    let validationErrors = {};
    Object.keys(formValues).forEach((key) => {
      const errorMessage = validateInput(key, formValues[key]);
      if (errorMessage) {
        validationErrors[key] = errorMessage;
      }
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const errorMessage = validateInput(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowError(true);
    if (validateFields()) {
      console.log("Form submitted successfully!", formValues);
      setFormValues({
        firstName: "",
        lastName: "",
        emailAddress: "",
        contact: "",
        message: "",
      });
      setErrors({});
      setShowError(false);
    }
  };

  return (
    <div
      id="contactHero"
      className="max-sm:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36"
    >
      <div className="container max-w-[1180px]">
        <div className="rounded-[10px] shadow-info-cards lg:p-4 p-3 overflow-hidden">
          <div className="flex flex-row flex-wrap w-full h-full mx-auto">
            <div className="lg:pr-4 lg:w-5/12 w-full">
              <div className="bg-dark-blue rounded-tl-[10px] max-lg:rounded-tr-[10px] lg:rounded-bl-[10px] xl:p-10 p-8 relative z-10">
                <div className="lg:mt-14">
                  <p className="font-semibold text-custom-4xl leading-118 text-white ">
                    Contact Information
                  </p>
                  <div className="xl:mt-24 lg:mt-20 mt-16 xl:mb-[175px] lg:mb-[140px] flex  flex-col xl:gap-[50px] gap-9 max-w-[337px] w-full">
                    {INFO_DATA.map((obj, index) => (
                      <div key={index} className="flex gap-6 items-center">
                        <span>{obj.icon()}</span>
                        <a
                          href={obj.url}
                          target={index > 1 ? "_blank" : "_self"}
                          className="font-normal text-base leading-135 text-white duration-300 ease-linear transition-all hover:text-light-orange"
                        >
                          {obj.value}
                        </a>
                      </div>
                    ))}
                  </div>
                  <img
                    src={infoEllipse}
                    width={185}
                    height={209}
                    alt="ellipse"
                    className="xl:max-w-[185px] max-w-[130px] xl:h-[209px] h-[140px] absolute right-0 bottom-0 pointer-events-none -z-10"
                  />
                </div>
              </div>
            </div>
            <div className="lg:ps-4 lg:w-7/12 w-full relative max-lg:pb-10">
              <form onSubmit={onSubmit} className="flex flex-col mt-[50px]">
                <div className="flex sm:gap-10 gap-6  sm:flex-row flex-col">
                  <div className="flex flex-col sm:w-1/2 w-full">
                    <label className="font-medium text-xs leading-166 text-mix-grey ">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      className="info-input"
                    />
                    {errors.firstName && (
                      <span className="error text-red-700 text-xs">
                        {errors.firstName}*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:w-1/2 w-full">
                    <label className="font-medium text-xs leading-166 text-mix-grey ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      className="info-input"
                    />
                    {errors.lastName && (
                      <span className="error text-red-700 text-xs">
                        {errors.lastName}*
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex sm:gap-10 gap-6  sm:flex-row flex-col lg:mt-[45px] mt-8">
                  <div className="flex flex-col sm:w-1/2 w-full">
                    <label className="font-medium text-xs leading-166 text-mix-grey ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formValues.emailAddress}
                      onChange={handleChange}
                      className="info-input"
                    />
                    {errors.emailAddress && (
                      <span className="error text-red-700 text-xs">
                        {errors.emailAddress}*
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:w-1/2 w-full">
                    <label className="font-medium text-xs leading-166 text-mix-grey ">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="contact"
                      value={formValues.contact}
                      onChange={handleChange}
                      className="info-input"
                    />
                    {errors.contact && (
                      <span className="error text-red-700 text-xs">
                        {errors.contact}*
                      </span>
                    )}
                  </div>
                </div>
                <div className="lg:mt-[45px] mt-8">
                  <div className="flex flex-col w-full">
                    <label className="font-medium text-xs leading-166 text-mix-grey ">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      placeholder="Write your message.."
                      className="quote-input h-10 !text-sm font-medium !opacity-100 !leading-166 !text-mix-grey !py-2.5 !pr-1.5 ps-0 resize-none border-b border-solid border-mix-grey"
                    />
                    {errors.message && (
                      <span className="error text-red-700 text-xs">
                        {errors.message}*
                      </span>
                    )}
                  </div>
                </div>
                <div className="sm:mt-[50px] mt-9 flex justify-end">
                  <button
                    type="submit"
                    className="font-semibold shadow-[0px_0px_10px_0px_inset_#FD8447] text-nowrap !leading-118 border border-transparent duration-300 ease-linear max-sm:text-sm bg-light-orange text-white hover:bg-transparent hover:border-light-orange hover:text-light-orange py-2.5 px-4 sm:py-3.5 max-w-fit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <img
                src={arrowEllipse}
                alt="arrowEllipse"
                width={240}
                height={112}
                className="max-w-[240px] lg:h-[112px] h-20 absolute lg:bottom-[7%] bottom-[3%] lg:right-[16%] left-[17%] xl:-rotate-[30deg] -z-10 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
