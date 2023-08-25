import Checkbox from "@mui/material/Checkbox";
import "./styles.scss";

const LoginForm = () => {
  return (
    <>
      {/* Login Form */}
      <div className="login relative w-full h-full px-14">
        <form>
          <label
            htmlFor="chk"
            aria-hidden="true"
            className="chk login_chk text-white flex justify-center text-4xl my-8 font-bold uppercase cursor-pointer duration-300 ease-in-out"
          >
            Login
          </label>
          <div className="LogininputBox relative w-full mb-5">
            <input
              className="login_input w-full border border-white rounded-none outline-0 text-white bg-primary text-base"
              type="text"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-white uppercase duration-500 tracking-wider">
              Username or Email
            </span>
          </div>
          <div className="LogininputBox relative w-full mb-5">
            <input
              className="login_input w-full border border-white rounded-none outline-0 text-white bg-primary text-base"
              type="password"
              required="required"
            />
            <span className="absolute left-0 pointer-events-none text-sm text-white uppercase duration-500 tracking-wider">
              Password
            </span>
          </div>
          <Checkbox
            defaultChecked
            id="remember_me"
            value="remember_me"
            className="remember_me !p-0 !text-white"
          />
          <label
            className="remember_me_label ml-2 text-white"
            htmlFor="remember_me"
          >
            Remember Me
          </label>
        </form>
        <button className="button buttonGreen login_submit_btn w-full !rounded-none !p-2 mt-5">
          <span className="buttonText">Login</span>
        </button>
        <div className="forget_password mt-3 text-right">
          <button className="text-white">Forget Password?</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
