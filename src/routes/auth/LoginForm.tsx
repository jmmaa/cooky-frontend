import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Link,
} from "react-aria-components";

import React from "react";

import axios from "axios";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();

  const [cookie, setCookie, removeCookie] = useCookies(["auth"]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));

    axios
      .post("http://127.0.0.1:8000/api/users/login/", data)
      .then((response) => {
        setCookie("auth", response.data.token, { path: "/" });

        return navigate("/dashboard/", { replace: true });
      });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      //   onReset={() => setAction("reset")}
    >
      <TextField
        className="relative mb-[20px] flex h-[56.75px] flex-col items-start gap-1"
        name="username"
        isRequired
      >
        <Label className="font-lexend text-[12px] font-normal not-italic leading-[15px] text-10">
          Username
        </Label>
        <Input className="h-[37.75px] w-[288.61px] rounded-[50px] bg-60 p-3" />
        <FieldError className="absolute top-[55.75px] p-1 font-lexend text-xs text-red-600" />
      </TextField>
      <TextField
        className="relative mb-[20px] flex h-[88.8px] flex-col items-start gap-1"
        name="password"
        type="password"
        isRequired
      >
        <Label className="font-lexend text-[12px] font-normal not-italic leading-[15px] text-10">
          Password
        </Label>
        <Input className="h-[37.75px] w-[288.61px] rounded-[50px] bg-60 p-3" />
        <FieldError className="absolute top-[55.75px] p-1 font-lexend text-xs text-red-600" />
        <div className="flex h-full w-full justify-end">
          <Link
            href="/not-implemented-yet"
            className="font-lexend text-[12px] font-normal not-italic leading-[15px] text-20"
          >
            Forgot Password
          </Link>
        </div>
      </TextField>

      <Button
        className="mb-[20px] flex h-[37.75px] w-[288.61px] items-center justify-center rounded-[50px] bg-10 p-3 font-lexend font-normal not-italic text-50"
        type="submit"
      >
        Login
      </Button>

      <p className="font-lexend font-[16px] leading-[20px] text-40">
        Not yet registered?
        <a className="pl-1 text-10" href="/signup">
          SIGN UP NOW!
        </a>
      </p>
    </Form>
  );
}
