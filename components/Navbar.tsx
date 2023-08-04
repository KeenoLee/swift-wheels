import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommonButton from "@/components/common-ui/CommonButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="flex justify-center items-center">
          <Image
            src="/swift-wheels-logos_transparent.png"
            alt="Swift Wheels Logo"
            className="object-contain"
            width={180}
            height={180}
          />
        </Link>
        <CommonButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
