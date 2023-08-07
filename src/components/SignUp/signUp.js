/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import Button from "../Button/button";
import {
  backgroundStyle,
  bodyStyle,
  disclaimer,
  ellieStyle,
  formStyle,
} from "./signUp.css";
import { useForm } from "react-hook-form";
import TextInput from "../Inputs/TextInput/textInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from "../../utils/regex";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .max(100, "Email must be less than 100 characters")
    .required("Please enter a valid email address")
    .matches(EMAIL_REGEX, "Please enter a valid email"),
  memberName: yup
    .string()
    .trim()
    .max(150)
    .required("Please enter a name(it can also be a nickname)")
    .matches(NAME_REGEX, "Please enter a valid name"),
  password: yup
    .string()
    .required()
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters, one number, one lower and one capital letter"
    ),
});

const SignUpPage = () => {
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
  const [memberName, setMemberName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div css={backgroundStyle}>
      <div css={bodyStyle}>
        <div css={ellieStyle}>Ellie placeholder</div>
        <div className="header-text">Sign Up</div>
        {/* <img src={Logo} alt="ellieLogo" /> */}
        <form css={formStyle} onSubmit={handleSubmit(submitPage)}>
          <TextInput
            placeHolder="Email"
            id="email"
            name="email"
            ref={register}
            defaultValue={email}
            onChange={(e) => setEmail(e?.target?.value)}
          />
          <TextInput
            placeHolder="Name"
            name="memberName"
            id="memberName"
            ref={register}
            defaultValue={memberName}
            onChange={(e) => {
              console.log(e, e.target, e.target.value, "-----e");
              return setMemberName(e?.target?.value);
            }}
          />
          <TextInput
            placeHolder="Password"
            name="password"
            id="password"
            ref={register}
            defaultValue={password}
            onChange={(e) => setPassword(e?.target?.value)}
          />
          <div css={disclaimer}>
            {/* TODO: link to terms and conditions and policies (build pages) */}
            By signing up, you are agree to our <a>Terms & Conditions</a> and{" "}
            <a>Policies</a>
          </div>
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
export default SignUpPage;
