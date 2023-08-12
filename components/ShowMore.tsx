"use client";

import { ShowMoreBtnProps } from "@/types/button";
import { useRouter } from "next/navigation";
import { CommonButton } from ".";
import { updatedSearchParams } from "@/utiles";

const ShowMore = ({ pageNumber, isNext }: ShowMoreBtnProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = ((pageNumber + 1) * 10).toString();
    const newPathName = updatedSearchParams("limit", newLimit);
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CommonButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
