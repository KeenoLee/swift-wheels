"use client";

import { CommonButtonProps } from "@/types/button";
import Image from "next/image";

const CommonButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  isDisabled,
  textStyles,
  rightIcon,
}: CommonButtonProps) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={btnType ?? "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CommonButton;
