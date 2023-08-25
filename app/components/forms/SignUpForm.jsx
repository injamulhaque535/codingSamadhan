import Checkbox from "@mui/material/Checkbox";
import "./styles.scss";

const SignUpForm = () => {
  return (
    <>
      {/* Signup Form */}
      <div className="signup bg-white relative z-10 px-14 duration-300 ease-in-out">
        <form>
          <label
            htmlFor="chk"
            aria-hidden="true"
            className="chk signup_chk text-primary flex justify-center text-4xl my-8 pt-5 font-bold uppercase cursor-pointer duration-300 ease-in-out"
          >
            Sign Up
          </label>
          <div className="SignUpinputBox relative w-full mb-5">
            <input
              className="signup_input w-full border rounded-none outline-0 text-text bg-white text-base"
              type="text"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-text uppercase duration-500 tracking-wider">
              Name
            </span>
          </div>
          <div className="SignUpinputBox relative w-full mb-5">
            <input
              className="signup_input w-full border rounded-none outline-0 text-text bg-white text-base"
              type="text"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-text uppercase duration-500 tracking-wider">
              Email
            </span>
          </div>
          <div className="SignUpinputBox relative w-full mb-5">
            <input
              className="signup_input w-full border rounded-none outline-0 text-text bg-white text-base"
              type="password"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-text uppercase duration-500 tracking-wider">
              Password
            </span>
          </div>
          <div className="SignUpinputBox relative w-full mb-5">
            <input
              className="signup_input w-full border rounded-none outline-0 text-text bg-white text-base"
              type="password"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-text uppercase duration-500 tracking-wider">
              Confirm Password
            </span>
          </div>
        </form>
        <button className="button buttonGreen signup_submit_btn w-full !rounded-none !p-2">
          <span className="buttonText">Sign Up</span>
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
