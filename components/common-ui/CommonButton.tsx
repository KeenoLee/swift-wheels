"use client";

import { CommonButtonProps } from "@/types/button";

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
    </button>
  );
};

export default CommonButton;
