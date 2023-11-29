import { useState } from "react";
import { sendCode } from "@/lib/api";
import { getToken } from "@/lib/api";
import router from "next/router";
import { PrimaryButton } from "@/ui/button";
import { Form, StyledInput, InputLabel, Title } from "./styled";

export function Login() {
  const [email, setEmail] = useState("");

  function handleEmailForm(e) {
    e.preventDefault();
    const email = e.target.email.value;

    sendCode(email);
    setEmail(email);
  }

  async function handleCodeForm(e) {
    e.preventDefault();
    const code = e.target.code.value;
    try {
      await getToken(email, code);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Form style={{ display: email ? "none" : "" }} onSubmit={handleEmailForm}>
        <InputLabel>Ingresa tu email</InputLabel>
        <StyledInput type="email" name="email" placeholder="Email" />
        <PrimaryButton text="enviar"></PrimaryButton>
      </Form>
      <Form style={{ display: email ? "" : "none" }} onSubmit={handleCodeForm}>
        <Title><span style={{ color: 'black' }}>Introduce el código que te enviamos a tu email</span> {email}</Title>
        <InputLabel>Ingresa el codigo</InputLabel>

        <StyledInput type="text" name="code" placeholder="Code" />
        <PrimaryButton text="enviar"></PrimaryButton>
      </Form>
    </div>
  );
}
