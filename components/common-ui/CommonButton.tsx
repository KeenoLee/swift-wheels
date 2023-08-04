"use client";

import { CommonButtonProps } from "@/types/button";

const CommonButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  disabled,
}: CommonButtonProps) => {
  return (
    <button
      disabled={disabled ?? false}
      type={btnType ?? "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CommonButton;
