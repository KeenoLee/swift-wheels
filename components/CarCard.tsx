"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types/car";
import { calculateCarRent, generateCarImageUrl } from "@/utiles";
import { CarDetails, CommonButton, CommonIcon } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, drive, make, model, transmission, year } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card-content">
        <h2 className="car-card-content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $ {carRent}
        </span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <CommonIcon
            title={transmission === "a" ? "Automatic" : "Manual"}
            src="/steering-wheel.svg"
            width={20}
            height={20}
            altText="steering wheel"
          />
          <CommonIcon
            title={drive.toUpperCase()}
            src="/tire.svg"
            width={20}
            height={20}
            altText="tire"
          />
          <CommonIcon
            title={`${city_mpg} MPG`}
            src="/gas.svg"
            width={20}
            height={20}
            altText="gas"
          />
        </div>
        <div className="car-card-btn-container">
          <CommonButton
            title="View More"
            btnType="button"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
