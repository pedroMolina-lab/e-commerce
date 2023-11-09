import { useState } from "react";
import { MeChange } from "@/lib/api";
import { PrimaryButton } from "@/ui/button";
import { Form, InputLabel, StyledInput } from "./styled";

export  function MeChangeForm() {
  const [formData, setFormData] = useState({ address: "", name: "" });

  async function handleChangeForm(e) {
    e.preventDefault();
    const address = e.target.address.value;
    const name = e.target.name.value;

    setFormData({name: name, address: address });
    if (address && name) {
      await MeChange(address, name);
      window.location.href = "/"; 
    }
  }
  
 


  return (
    <div>

      <Form onSubmit={handleChangeForm}>
        <InputLabel>Ingresa tu dirección</InputLabel>
        <StyledInput type="text" name="address" placeholder="Dirección" required/>
        <InputLabel>Ingresa tu nombre</InputLabel>
        <StyledInput type="text" name="name" placeholder="Nombre" required />
        <PrimaryButton text="Actualiizar"></PrimaryButton>

      </Form>
      
    </div>
  );
}
