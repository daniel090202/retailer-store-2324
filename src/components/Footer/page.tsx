import Image from "next/image";

import icons from "@/assets/Icons/index";
import images from "@/assets/Images/index";
import { appRoutes } from "@/config/pathConfig";

const Footer = () => {
  const footerContactAddresses = [
    { title: "Domain website", icon: icons.shopify, path: appRoutes.home },
    {
      title: "Facebook",
      icon: icons.facebook,
      path: "http://www.facebook.com",
    },
    {
      title: "Instagram",
      icon: icons.instagram,
      path: "http://www.instagram.com",
    },
  ];

  return (
    <footer className="max-w-screen-xl bg-white mx-auto p-6 text-gray-600 flex items-center justify-between md:p-8">
      <div className="flex items-center py-4 md:block">
        <a
          href={appRoutes.home}
          className="font-bold hidden md:text-2xl md:flex md:items-center lg:text-4xl"
        >
          <Image
            src={images.logo}
            width={84}
            height={28}
            alt="Website application logo."
          />
          <span>No Brand</span>
        </a>
        <span className="italic">Developed by Daniel Nguyen</span>
      </div>
      <div className="mx-4">
        <p className="text-2xl text-gray-800 font-medium">Contact us</p>
        <ul>
          {footerContactAddresses.map((contactAddress, index) => {
            return (
              <li key={index} className="my-2 text-lg">
                <a href={contactAddress.path}>
                  <span className="mr-4">{contactAddress.icon}</span>
                  <span>{contactAddress.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
