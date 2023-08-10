"use client";

import { SearchManufacturerProps } from "@/types/search";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full"></div>
        <Combobox.Button className="absolute top-[14px]">
          <Image
            src="/car-logo.svg"
            width={20}
            height={20}
            className="ml-4"
            alt="Car Logo"
          />
        </Combobox.Button>
        <Combobox.Input
          className="search-bar-input"
          placeholder="car"
          displayValue={(manufacturer: string) => manufacturer}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options>
            {filteredManufacturers.map((item: string) => (
              <Combobox.Option
                key={item}
                value={item}
                className={({ active }) =>
                  `relative search-manufacturer-option ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`
                }
              >
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;