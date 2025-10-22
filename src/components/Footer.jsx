import React from "react";
import image from "../assets/banner/bg_08.png";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaPinterestP,
} from "react-icons/fa";
import { AiFillCaretLeft } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {/* 1 */}
        <div className="">
          <h3 className="text-xl font-semibold mb-5">About Info</h3>
          <p className="text-sm leading-relaxed mb-6">
            This is the perfect place to find a nice and cozy spot to sip some.
            You'll find the Java Jungle.
          </p>
          <div className="flex items-start gap-2 mb-3">
            <LuMapPin className="mt-1" />
            <h4>Address: 123 Pall Mall, London</h4>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <MdOutlineMailOutline className="mt-1" />
            <h4>Email: hello@example.com</h4>
          </div>
          <div className="flex items-start gap-2">
            <FaPhoneAlt className="mt-1" />
            <h4>Phone: (012) 345 6789</h4>
          </div>
        </div>

        {/* 2 */}
        <div className="">
          <h3 className="text-xl font-semibold mb-5">Information</h3>
          {["Home", "About Us", "Gallery", "Wishlist", "Food Menu"].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-2 mb-3">
                <AiFillCaretLeft className="text-sm" />
                <h4 className="cursor-pointer hover:text-[#c0aa83]">{item}</h4>
              </div>
            )
          )}
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          {["Home", "About Us", "Gallery", "Wishlist", "Food Menu"].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-2 mb-3">
                <AiFillCaretLeft className="text-sm" />
                <h4 className="cursor-pointer hover:text-[#c0aa83]">{item}</h4>
              </div>
            )
          )}
        </div>

        {/* 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Follow Us On</h3>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-3 hover:text-[#c0aa83] transition-colors duration-300"
          >
            <FaFacebookF />
            <h4>Facebook</h4>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-3 hover:text-[#c0aa83] transition-colors duration-300"
          >
            <IoLogoTwitter />
            <h4>Twitter</h4>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-3 hover:text-[#c0aa83] transition-colors duration-300"
          >
            <FaInstagram />
            <h4>Instagram</h4>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-3 hover:text-[#c0aa83] transition-colors duration-300"
          >
            <FiYoutube />
            <h4>Youtube</h4>
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#c0aa83] transition-colors duration-300"
          >
            <FaPinterestP />
            <h4>Pinterest</h4>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4 border-t border-white/20 text-sm">
        © 2025 MyCoffeeShop. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
