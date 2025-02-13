import React, { useEffect, useState } from "react";
import CommonHeadingBlack from "../common/CommonHeadingBlack";
import SelectOption from "../common/SelectOption";
import { useLocation } from "react-router-dom";

const Quote = () => {
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    date: "",
    from: "",
    to: "",
    message: "",
    moveSize: "",
  });

  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Name is required.";
        }
        break;
      case "contact":
        if (!value.trim()) {
          return "Phone Number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          return "Phone Number must be 10 digits.";
        }
        break;
      case "date":
        if (!value.trim()) {
          return "Date is required.";
        }
        break;
      case "from":
        if (!value.trim()) {
          return "From is required.";
        }
        break;
      case "to":
        if (!value.trim()) {
          return "To is required.";
        }
        break;
      case "moveSize":
        if (!value.trim()) {
          return "Move Size is required.";
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
        name: "",
        contact: "",
        date: "",
        from: "",
        to: "",
        message: "",
        moveSize: "",
      });
      setErrors({});
      setShowError(false);
    }
  };
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="container max-w-[1180px] max-sm:-mt-[70px] -mt-[105px] relative z-20">
      <div className="bg-dark-blue shadow-sm lg:px-[52px] lg:py-[55px] sm:px-8 px-5 py-6 sm:py-10">
        <CommonHeadingBlack text="Free Quote" className="!text-white mb-4" />
        <form onSubmit={onSubmit} className="w-full flex gap-2.5 flex-col">
          <div className="flex gap-2.5 w-full sm:flex-row flex-col">
            <div className="md:w-[32.69%] w-full sm:w-1/2 relative">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="quote-input"
                onChange={handleChange}
                value={formValues.name}
              />
              {errors.name && (
                <span className="error text-white">{errors.name}*</span>
              )}
            </div>

            <div className="md:w-[32.69%] w-full sm:w-1/2 relative">
              <input
                type="number"
                placeholder="Phone Number"
                name="contact"
                onWheel={(e) => e.target.blur()}
                className="quote-input"
                onChange={handleChange}
                value={formValues.contact}
              />
              {errors.contact && (
                <span className="error text-white">{errors.contact}*</span>
              )}
            </div>
            <div className="md:w-[32.69%] w-full sm:w-1/2 relative">
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="quote-input"
                onChange={handleChange}
                value={formValues.date}
              />
              {errors.date && (
                <span className="error text-white">{errors.date}*</span>
              )}
            </div>
          </div>
          <div className="flex gap-2.5 w-full sm:flex-row flex-col">
            <div className="md:w-[32.69%] w-full sm:w-1/2 relative">
              <input
                type="text"
                placeholder="From"
                name="from"
                className="quote-input"
                onChange={handleChange}
                value={formValues.from}
              />
              {errors.from && (
                <span className="error text-white">{errors.from}*</span>
              )}
            </div>
            <div className="md:w-[32.69%] w-full sm:w-1/2 relative">
              <input
                type="text"
                placeholder="To"
                name="to"
                className="quote-input"
                onChange={handleChange}
                value={formValues.to}
              />
              {errors.to && (
                <span className="error text-white">{errors.to}*</span>
              )}
            </div>
            <div className="md:w-[32.69%] w-full sm:w-1/2 relative">
              <SelectOption
                name="moveSize"
                placeholder="Move Size"
                className="!border-none !shadow-none"
                value={formValues.moveSize}
                onChange={handleChange}
                error={errors.moveSize}
              />
              {errors.moveSize && (
                <span className="error text-white">{errors.moveSize}*</span>
              )}
            </div>
          </div>
          <div className="flex gap-2.5 w-full md:flex-row flex-col">
            <textarea
              onChange={handleChange}
              name="message"
              value={formValues.message}
              placeholder="Write Your Message"
              className="resize-none quote-input h-10 md:w-[66.39%] w-full"
            ></textarea>
            <button
              type="submit"
              className="font-semibold hover:shadow-[0px_0px_10px_0px_inset_#FD8447] !leading-118 border border-transparent duration-300 ease-linear max-sm:text-sm bg-light-orange text-white hover:bg-transparent hover:border-light-orange hover:text-light-orange h-10 !py-2.5 md:!w-[32.69%] !w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
