import "./styles.scss";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ForgetPasswordForm from "./ForgetPasswordForm";

const LoginSignUpForm = () => {
  return (
    <>
      <div className="main overflow-hidden bg-primary">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <LoginForm />
        {/* <ForgetPasswordForm /> */}
        <SignUpForm />
      </div>
    </>
  );
};

export default LoginSignUpForm;
