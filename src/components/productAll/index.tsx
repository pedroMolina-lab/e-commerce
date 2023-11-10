import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  NotFoundMessage,
  ProductImage,
  NameTitle,
  Precio,
  Button,
  ProductContainer,
  UlConteiner
} from "./styled";
import { useGetProductAll } from "@/lib/hooks";

export function ProductAll() {
  const productData = useGetProductAll();

  const router = useRouter();

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (productData && productData.product) {
      console.log(productData.product);

      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [productData]);

  const goToProductDetail = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div>
      <h1>Resultados de la búsqueda:</h1>
      {showResults ? (
        <Container>
          <UlConteiner>
            {productData.product.map((product, index) => (
              <ProductContainer key={index}>
                <NameTitle>{product.Name}</NameTitle>

                <ProductImage src={product.Images[0].url} />
                <Precio>Precio: ${product["Unit cost"]}</Precio>
                <Button onClick={() => goToProductDetail(product.objectID)}>
                  Ver Detalles
                </Button>
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
