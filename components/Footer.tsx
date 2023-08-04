import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-200">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <h1 className="font-bold">Swift Wheels</h1>
          <p className="text-base text-gray-700">
            All rights reserved 2023 &copy; Swift Wheels Ltd
          </p>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <div className="footer-link" key={link.title}>
              <h2 className="font-bold">{link.title}</h2>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between item-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>&copy; 2023 SwiftWheels. All Rights Reserved</p>
        <div className="footer-copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Term of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
