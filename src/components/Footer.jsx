import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#e8eaed]">
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-2">
          <div className="container mx-auto">
            <div className="grid grid-cols-3">
              <div className="text-gray-600">
                <p className="font-bold">BROWSE</p>
                <p className="py-1">
                  <a href="/#">Streaming Library</a>
                </p>
                <p className="py-1">
                  <a href="/#">Live TV</a>
                </p>
                <p className="py-1">
                  <a href="/#">Live News</a>
                </p>
                <p className="py-1">
                  <a href="/#">Live Sports</a>
                </p>
              </div>
              <div className="text-gray-600">
                <p className="font-bold">&nbsp;</p>
                <p className="py-1">
                  <a href="/#">TV Shows</a>
                </p>
                <p className="py-1">
                  <a href="/#">Movies</a>
                </p>
                <p className="py-1">
                  <a href="/#">Originals</a>
                </p>
                <p className="py-1">
                  <a href="/#">Networks</a>
                </p>
                <p className="py-1">
                  <a href="/#">Kids</a>
                </p>
                <p className="py-1">
                  <a href="/#">FX</a>
                </p>
              </div>
              <div className="text-gray-600">
                <p className="font-bold">&nbsp;</p>
                <p className="py-1">
                  <a href="/#">HBO Max™</a>
                </p>
                <p className="py-1">
                  <a href="/#">Cinemax</a>
                </p>
                <p className="py-1">
                  <a href="/#">Showtime</a>
                </p>
                <p className="py-1">
                  <a href="/#">STARZ</a>
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-3">
              <div className="text-gray-600">
                <p className="font-bold">&nbsp;</p>
                <p className="py-1">
                  <a href="/#">Hulu, Disney+, and ESPN+</a>
                </p>
                <p className="py-1">
                  <a href="/#">Hulu (No Ads), Disney+, and ESPN+</a>
                </p>
                <p className="py-1">
                  <a href="/#">Student Discount</a>
                </p>
              </div>
              <div className="text-gray-600">
                <p className="font-bold">HELP</p>
                <p className="py-1">
                  <a href="/#">Account & Billing</a>
                </p>
                <p className="py-1">
                  <a href="/#">Plans & Pricing</a>
                </p>
                <p className="py-1">
                  <a href="/#">Supported Devices</a>
                </p>
                <p className="py-1">
                  <a href="/#">Accessibility</a>
                </p>
              </div>
              <div className="text-gray-600">
                <p className="font-bold">ABOUT US</p>
                <p className="py-1">
                  <a href="/#">Shop Hulu</a>
                </p>
                <p className="py-1">
                  <a href="/#">Press</a>
                </p>
                <p className="py-1">
                  <a href="/#">Jobs</a>
                </p>
                <p className="py-1">
                  <a href="/#">Contact</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-300 my-8"></div>
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex">
            <FaFacebookF className="mr-5 w-5 h-5" />
            <FaTwitter className="mx-5 w-5 h-5" />
            <FaYoutube className="mx-5 w-5 h-5" />
            <FaInstagram className="mx-5 w-5 h-5" />
          </div>
            <p className="text-sm"><a href="/#">© 2022 Hulu, LLC</a></p>
            <p className="text-sm"><a href="/#">About Ads</a></p>
            <p className="text-sm"><a href="/#">Terms of Use</a></p>
            <p className="text-sm"><a href="/#">Privacy Policy</a></p>
            <p className="text-sm"><a href="/#">Do Not Sell My Personal Information</a></p>
            <p className="text-sm"><a href="/#">Your California Privacy Rights</a></p>
            <p className="text-sm"><a href="/#">TV Parental Guidelines</a></p>
            <p className="text-sm"><a href="/#">Sitemap</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
