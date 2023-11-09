import { getProduct } from "@/lib/hooks";
import { product } from "@/types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PrimaryButton } from "@/ui/button";
import {
  Container,
  NotFoundMessage,
  ProductImage,
  NameTitle,
  Precio,
  Button,
  ProductContainer,
} from "./styled";
import { getProductAll } from "@/lib/hooks";

export function ProductAll() {
  const productData = getProductAll();

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
          <ul>
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
          </ul>
        </Container>
      ) : (
        <NotFoundMessage>Cargando...</NotFoundMessage>
      )}
    </div>
  );
}
