import { useGetProductsMe } from "@/lib/hooks";
import { useState, useEffect } from "react";
import { Container, ProductContainer, ProductImage, NotFoundMessage, NameTitle, Precio, UlConteiner } from "./styled";

export function ProductMe() {
  const productMe = useGetProductsMe();
console.log(productMe);

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (productMe && productMe.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [productMe]);

  return (
    <div>
      <h1>Resultados de la búsqueda:</h1>
      {showResults ? (
          <Container>
          <UlConteiner>
            {productMe.map((product, index) => (
                <ProductContainer key={index}>

                  <h2>pago: {product.status}</h2>
                  <NameTitle>{product.aditionalInfo.fecha}</NameTitle>
                  <NameTitle>{product.aditionalInfo.name}</NameTitle>
                  
                <ProductImage src={product.aditionalInfo.image} />

                <NameTitle>Color: {product.aditionalInfo.color}</NameTitle>

                <Precio>Precio: ${product.aditionalInfo.price}</Precio>
              </ProductContainer>
            ))}
          </UlConteiner>
        </Container>
      ) : (
        <NotFoundMessage>Cargando...</NotFoundMessage>
      )}
    </div>
  );
}
