import Checkbox from "@mui/material/Checkbox";
import "./styles.scss";

const ForgetPasswordForm = () => {
  return (
    <>
      {/* Forgot Password Form */}
      <div className="login relative w-full h-full px-14 ">
        <form>
          <label
            htmlFor="chk"
            aria-hidden="true"
            className="chk login_chk text-white flex justify-center text-4xl text-center mt-10 mb-16 font-bold uppercase cursor-pointer duration-300 ease-in-out"
          >
            Recover
          </label>
          <div className="LogininputBox relative w-full mb-5">
            <input
              className="login_input w-full border border-white rounded-none outline-0 text-white bg-primary text-base"
              type="text"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-white uppercase duration-500 tracking-wider">
              Enter Email Address
            </span>
          </div>
        </form>
        <button className="primary_button login_submit_btn w-full !rounded-none !p-2 mt-5 !bg-green">
          <span className="btn_text">Continue</span>
        </button>
      </div>
    </>
  );
};

export default ForgetPasswordForm;
