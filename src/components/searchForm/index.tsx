import { useRouter } from "next/router";
import { Form, StyledInput, FormContainer, InputLabel } from "./styled"
import { PrimaryButton } from "@/ui/button";
import { useState, useEffect } from "react";
import { getProductAll } from "@/lib/hooks";
import { Container, ProductCard, NotFoundMessage } from "./styled";

function ProductSearchForm() {
  const [product, setProduct] = useState([]) as any;

  const router = useRouter()



  function handleProduct(e) {
    e.preventDefault();
    const product = e.target.product.value;

    setProduct(product);
    router.push("/products/" + product);
  }

  return (
    <div>
      <Form onSubmit={handleProduct}>
        <InputLabel>Busca tu producto</InputLabel>
        <StyledInput type="text" name="product" placeholder="ej: reloj" />
        <PrimaryButton text="Buscar"></PrimaryButton>
      </Form>
    </div>
  );
}

export default ProductSearchForm;
