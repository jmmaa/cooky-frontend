import { Logo } from "./Logo";

import Cog from "../assets/cog.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function Navbar() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["auth"]);

  return (
    <nav className="h-[80px] w-full bg-10">
      <div className="flex h-full w-full items-center justify-between px-5">
        <Logo className="h-[51.35px] w-[165px] text-50" />
        <a
          className="font-[20px] text-50"
          onClick={() => {
            setCookie("auth", "", { path: "/" });

            navigate("/login");
          }}
        >
          Logout
        </a>
      </div>
    </nav>
  );
}
