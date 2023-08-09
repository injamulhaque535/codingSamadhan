import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className=" top_menu_wrapper bg-primary">
        <div className="top_menu container flex justify-between items-center m-auto py-1.5">
          <div className="">
            <div className="top_menu_left">
              <ul className="flex gap-5">
                <li>
                  <a
                    className="duration-300 text-white hover:text-hover"
                    href="mailto:sale@trickysolution.net"
                  >
                    <FaRegEnvelope className="inline-block" />{" "}
                    sale@trickysolution.net
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300  text-white hover:text-hover"
                    href="tel:+917076816461"
                  >
                    <BiSolidPhoneCall className="inline-block" />
                    +917076816461
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="top_menu_right">
              <ul className="flex justify-end align-middle gap-5">
                <li>
                  <a
                    className="duration-300  text-white hover:text-hover"
                    href="#"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300  text-white hover:text-hover"
                    href="#"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300  text-white hover:text-hover"
                    href="#"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300  text-white hover:text-hover"
                    href="#"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="duration-300  text-white hover:text-hover"
                    href="#"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
