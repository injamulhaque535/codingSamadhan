import { useState } from "react";
import LogoColor from "./LogoColor";
import NavMenu from "./NavMenu";
import TopBar from "./TopBar";
import ModalOne from "../popup/ModalOne";
import LoginSignUpBox from "../forms/LoginSignUpBox";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  const [showpopup, setShowpopup] = useState(false);
  return (
    <section className="header_section">
      <TopBar />
      <section className="bg-gray ">
        <div className="container py-4 desktop_header m-auto">
          <div className="flex justify-between items-center">
            <div className="">
              <div className="logo_section w-44">
                <LogoColor />
              </div>
            </div>
            <div className="">
              <div className="nav_menu_section">
                <NavMenu />
              </div>
            </div>
            <div className="">
              <div className="search_section flex items-center justify-end">
                <div className="button_area ml-8">
                  <button
                    className="primary_button"
                    onClick={() => setShowpopup(true)}
                  >
                    <a className="btn_text">Login / Sign Up</a>
                  </button>
                  <ModalOne
                    showpopup={showpopup}
                    closepopup={() => setShowpopup(false)}
                  >
                    <LoginSignUpBox />
                  </ModalOne>
                </div>
                <div className="search_area ml-8">
                  <BiSearchAlt2 className="search_button text-3xl text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
