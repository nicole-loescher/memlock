/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import Button from "../components/Button/button";
import {
  backgroundStyle,
  bodyStyle,
  ellieStyle,
  formStyle,
} from "./authPages.css";
import { useForm } from "react-hook-form";
import TextInput from "../components/Inputs/TextInput/textInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils/regex";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .max(100, "Email must be less than 100 characters")
    .required("Please enter a valid email address")
    .matches(EMAIL_REGEX, "Please enter a valid email"),
  password: yup
    .string()
    .required()
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters, one number, one lower and one capital letter"
    ),
});

const LogInPage = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });
  const submitPage = (data, e) => {
    e.preventDefault();
    //
    console.log(errors, "-errors----");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div css={backgroundStyle}>
      <div css={bodyStyle}>
        <div css={ellieStyle}>Ellie placeholder</div>
        <div className="header-text">Log In</div>
        {/* <img src={Logo} alt="ellieLogo" /> */}
        <form css={formStyle} onSubmit={handleSubmit(submitPage)}>
          <TextInput
            placeHolder="Email Address"
            id="email"
            name="email"
            ref={register}
            defaultValue={email}
            onChange={(e) => setEmail(e?.target?.value)}
          />
          <TextInput
            placeHolder="Password"
            name="password"
            id="password"
            type="password"
            ref={register}
            defaultValue={password}
            onChange={(e) => setPassword(e?.target?.value)}
          />
          <Button
            copy="Continue"
            type="submit"
            styleType="primary"
            width={100}
          />
        </form>
      </div>
    </div>
  );
};
export default LogInPage;
