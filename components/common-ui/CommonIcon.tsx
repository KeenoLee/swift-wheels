import { IconProps } from "@/types/icon";
import Image from "next/image";

const CommonIcon = ({ title, src, width, height, altText }: IconProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src={src} width={width} height={height} alt={altText} />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CommonIcon;
