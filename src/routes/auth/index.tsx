import { LoginLogoGroup, SingupLogoGroup } from "../../components/Logo";
import { LoginForm } from "./LoginForm";
import LoginCoverPic from "../../assets/login_cover_pic.png";
import SignupCoverPic from "../../assets/signup_cover_pic.png";
import { SignupForm } from "./SignupForm";

export function LoginPage() {
  return (
    <div className="flex-end relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="z-30 flex h-full w-full flex-col items-start justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center md:w-[768px]">
          <LoginLogoGroup />
          <LoginForm />
        </div>
      </div>

      <div className="absolute z-20 h-full w-full cover-linear-gradient"></div>
      <img className="absolute z-10 m-0 ml-[55%] p-0" src={LoginCoverPic} />
    </div>
  );
}

export function SignupPage() {
  return (
    <div className="flex-end relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="z-30 flex h-full w-full flex-col items-start justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center md:w-[768px]">
          <SingupLogoGroup />
          <SignupForm />
        </div>
      </div>

      <div className="absolute z-20 h-full w-full cover-linear-gradient"></div>
      <img className="absolute z-10 m-0 ml-[55%] p-0" src={SignupCoverPic} />
    </div>
  );
}
