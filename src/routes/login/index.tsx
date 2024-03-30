import { LogoGroup } from "./Logo";
import { LoginForm } from "./LoginForm";
import LoginCoverPic from "../../assets/login_cover_pic.png";

export function LoginPage() {
  //   const theme = useContext(ThemeContext);

  return (
    <div className="flex-end relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="z-30 flex h-full w-full flex-col items-start justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center md:w-[768px]">
          <LogoGroup />
          <LoginForm />
        </div>
      </div>

      <div className="cover-linear-gradient absolute z-20 h-full w-full"></div>
      <img className="absolute z-10 m-0 ml-[55%] p-0" src={LoginCoverPic} />
    </div>
  );
}
