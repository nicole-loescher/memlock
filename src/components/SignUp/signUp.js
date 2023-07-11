/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import Button from "../Button/button";
import { backgroundStyle } from "./signUp.css";
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
  };
  const [email, setEmail] = useState("");
  const [memberName, setMemberName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div css={backgroundStyle}>
      <div css={""}>
        {/* <img src={Logo} alt="ellieLogo" /> */}
        <form onSubmit={handleSubmit(submitPage)}>
          <TextInput
            label="email"
            name="email"
            ref={register}
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
          />
          <TextInput
            label="memberName"
            name="memberName"
            ref={register}
            value={memberName}
            onChange={(e) => setMemberName(e?.target?.value)}
          />
          <TextInput
            label="password"
            name="password"
            ref={register}
            value={password}
            onChange={(e) => setPassword(e?.target?.value)}
          />
          <Button copy="Sign Up" type="submit" styleType="primary" />
        </form>
      </div>
    </div>
  );
};
export default SignUpPage;
