"use client";
import Image from "next/image";
import React, { useState } from "react";
import backicon from "../../asset/images/others/back-button.svg";
import { useRouter } from "next/navigation";

const WeddingBookingForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    city: "",
    agree: false,
  });

  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const phoneRegex = /^[0-9]{10}$/;
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      city: "",
      agree: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      valid = false;
    }
    if (!formData.date) {
      newErrors.date = "Please select a date.";
      valid = false;
    }
    if (!formData.guests) {
      newErrors.guests = "Please enter number of guests.";
      valid = false;
    }
    if (!formData.city) {
      newErrors.city = "Please select a city.";
      valid = false;
    }
    if (!formData.agree) {
      newErrors.agree = "You must agree before submitting.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      setLoading(false);
      return;
    }
    console.log(formData);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong");
    }
  };

 const steps = [
  {
    label: "Personal Info",
    content: (
      <>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full h-[42px] rounded-[7px]"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full h-[42px] rounded-[7px]"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="phone">Phone No.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full h-[42px] rounded-[7px]"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </>
    ),
  },
  {
    label: "Wedding Plans",
    content: (
      <>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="date">Preferred Wedding Date</label>
          <input
            id="date"
            name="date"
            type="date"
            placeholder="DD/MM/YYYY"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-[7px] w-full h-[42px] uppercase"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="guests">No. of guests</label>
          <input
            type="number"
            name="guests"
            placeholder="100"
            value={formData.guests}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full h-[42px] rounded-[7px]"
          />
          {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <label htmlFor="city">Name of the city</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full !h-[42px] rounded-[7px]"
          >
            <option value="">Select</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Haridwar">Haridwar</option>
            <option value="New Tehri">New Tehri</option>
          </select>
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="flex gap-2 items-start mb-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-[#A42D2B] w-[20px] h-[20px]"
          />
          <label htmlFor="agree" className="!text-[14px] open-sans">
            I'm happy to be contacted by the Triyuginarayan Shaadi team about my enquiry.
          </label>
        </div>
        {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
      </>
    ),
  },
];


  return (
    <div className="flex flex-col items-center justify-center p-4 mb-5 mt-25">
      <p className="text-center mb-10 px-5 heading">
        Book your <span className="text-[#A42D2B] font-bold">Dream</span>{" "}
        Wedding!
      </p>

      {/* Desktop Form */}
      <div className="hidden md:block max-w-[1200px] w-full min-h-[600px] rounded-[22px] bg-white shadow-[0px_4px_31.8px_rgba(0,0,0,0.18)] px-15 py-8 bg-image1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex gap-10 justify-between"
        >
          <div>
            <p className="text-[32px] font-semibold mb-8">Personal Details</p>
            <div className=" flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="border border-gray-300 w-[400px] p-2 mb-4 rounded-[7px]"
              />
              {errors.name && (
                <p className="text-red-500 !text-[14px] mt-[-12px]">
                  {errors.name}
                </p>
              )}
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="phone">Phone No.</label>
              <input
                id="phone"
                name="phone"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleChange}
                type="text"
                inputMode="numeric"
                className="border border-gray-300 w-[400px] p-2 mb-4 rounded-[7px]"
              />
              {errors.phone && (
                <p className="text-red-500 !text-[14px] mt-[-12px]">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col gap-1">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                placeholder="Xyz123@gmail.com"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="border border-gray-300 w-[400px] p-2 mb-4 rounded-[7px]"
              />
              {errors.email && (
                <p className="text-red-500 !text-[14px] mt-[-12px]">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="accent-[#A42D2B] w-[20px] h-[20px]"
                />
                <label htmlFor="agree" className=" open-sans">
                  I'm happy to be contacted by the Triyuginarayan Shaadi team
                  about my enquiry.
                </label>
              </div>

              <div>
                {errors.agree && (
                  <p className="text-red-500 !text-[14px]">{errors.agree}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-[32px] font-semibold mb-8">Wedding Plans</p>
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-2 w-[200px] ">
                <label htmlFor="date">Preferred Wedding Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full mb-4 rounded-[7px] uppercase"
                />
                {errors.date && (
                  <p className="text-red-500 !text-[14px] mt-[-12px]">
                    {errors.date}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-[200px]">
                <label htmlFor="guests">No. of guests</label>
                <input
                  id="guests"
                  name="guests"
                  placeholder="eg.20"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full mb-4 rounded-[7px]"
                />
                {errors.guests && (
                  <p className="text-red-500 !text-[14px] mt-[-12px]">
                    {errors.guests}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 w-[250px]">
              <label htmlFor="city">City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full mb-4 rounded-[7px]"
              >
                <option value="">Select</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Haridwar">Haridwar</option>
                <option value="New Tehri">New Tehri</option>
              </select>
              {errors.city && (
                <p className="text-red-500 !text-[14px] mt-[-12px]">
                  {errors.city}
                </p>
              )}
            </div>
          </div>
        </form>

        <div className="text-center mt-15 mb-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className={`bg-[#FFB52C] text-black font-semibold px-6 py-4 rounded-md shadow-md cursor-pointer m-auto  ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading...
              </div>
            ) : (
              "Start my wedding journey"
            )}
          </button>
        </div>
      </div>

      {/* Mobile Multi-step Form */}
      <div className="md:hidden max-w-md w-full mt-10 bg-white shadow-[0px_4px_31.8px_rgba(0,0,0,0.18)] rounded-[22px] p-6">
        {step > 0 && (
          <Image
            src={backicon}
            alt="Back"
            className="cursor-pointer mb-4"
            onClick={() => setStep(step - 1)}
          />
        )}
        <p className="text-[16px] font-semibold m-6 text-center ">
          {steps[step].label}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="transition-all duration-300 ease-in-out">
            {steps[step].content}
          </div>
        </form>
        <div className="flex justify-between mt-10">
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="w-[219px] py-4 bg-[#FFB52C] rounded-[7px] m-auto mb-10 font-semibold"
            >
              Next
            </button>
          ) : (
             <button
            type="submit"
            onClick={handleSubmit}
            className={`bg-[#FFB52C] rounded-[7px] py-4  m-auto w-[219px] font-semibold  ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading...
              </div>
            ) : (
              "Start my wedding journey"
            )}
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingBookingForm;
