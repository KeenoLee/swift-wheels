import { MouseEventHandler } from "react";

export interface CommonButtonProps {
  title: string;
  btnType?: "submit" | "button";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
