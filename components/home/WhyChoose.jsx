import Image from "next/image";
import React from "react";
import MarriedCouple from "../../asset/images/married-couple-image.png";
import Ellipse from "../../asset/images/others/Ellipse.svg";

const WhyChoose = () => {
  return (
    <div className="flex flex-col md:flex-row gap-40 mt-10 md:mt-25 mb-5 w-[90%] m-auto max-w-[1400px]">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-15 ">
        <div className="flex flex-col gap-6  md:w-[50%] m-auto px-3">
          <p className="heading text-center md:text-start p-3">
            {" "}
            Why Choose <span className="text-[#A42D2B]">Triyuginarayan</span>  for Your Destination Wedding
          </p>
          <div className="flex gap-4 ">
            <Image src={Ellipse} alt="image"  className='w-[14px] md:w-[16px]'/>
            <p className="para">
              Host your wedding at the only temple where Shiva and Parvati were
              married.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[14px] md:w-[16px]'/>
            <p className="para">
              Seamless planning by a professional Triyuginarayan wedding
              planner.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[14px] md:w-[16px]'/>
            <p className="para">
              Authentic Triyuginarayan destination wedding experience.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[14px] md:w-[16px]'/>
            <p className="para">
              Transparent pricing and customizable packages.
            </p>
          </div>
          <div className="flex gap-4">
            <Image src={Ellipse} alt="image" className='w-[14px] md:w-[16px]'/>
            <p className="para">
              Warm hospitality: bonfires, electric blankets, and local meals.
            </p>
          </div>
        </div>
        <div className="flex m-auto">
          <Image
            src={MarriedCouple}
            alt="image"
            className="w-[300px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
