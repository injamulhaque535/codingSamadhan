import React from "react";
import { RxCross1 } from "react-icons/rx";
import "./styles.scss";

const ModalOne = ({ showpopup, closepopup, children }) => {
  if (!showpopup) {
    return null;
  }
  return (
    <>
      <div className="popup_area_wrapper absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
        <div className="popup_area bg-white rounded-md flex items-center justify-center relative z-10">
          <RxCross1
            className="btnclose text-white absolute top-0 right-0 text-3xl cursor-pointer bg-secondary p-1 border-0 outline-0"
            onClick={closepopup}
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalOne;
