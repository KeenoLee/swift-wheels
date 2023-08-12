import { MouseEventHandler } from "react";

export interface CommonButtonProps {
  title: string;
  btnType?: "submit" | "button";
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  rightIcon?: string;
}

export interface ShowMoreBtnProps {
  pageNumber: number;
  isNext: boolean;
}
