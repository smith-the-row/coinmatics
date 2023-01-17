import AuthNav from "../../../components/AuthNav/AuthNav";
import ForgottenPasswordForm from "../../../components/forgot-password/forgotten-password";

const ForgottenPassword = () => {
  return (
    <>
      {/* page Wrapper class */}
      <div className="w-screen h-screen">
        {/* parent div container */}
        <div className="flex justify-between h-screen relative">
          {/* CTA Markups */}
          <div className="flex-1 p-6 text-white bg-green hidden md:flex flex-col justify-center items-start font-semibold font-main">
            <h1 className="text-2xl text-gray-200/90">
              Your Account isn't lost
            </h1>
            <h4 className="text-6xl my-3 underline">Recover Account Today</h4>
          </div>
          {/* Sign Up forms */}
          <div className="flex-1">
            <AuthNav
              cta="Already Have An Account ?"
              path="sign-in"
              urlName={"Sign in today"}
            />
            <ForgottenPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgottenPassword;
