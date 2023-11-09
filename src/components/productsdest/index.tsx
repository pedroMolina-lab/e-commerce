import { useRouter } from "next/router";
import { PrimaryButton } from "@/ui/button";
import { useState, useEffect } from "react";
import { useGetProductAll } from "@/lib/hooks";
import { Container, ProductContainer, Precio, NameTitle, NotFoundMessage, Button, ProductImage } from "./styled";

function ProductDest() {
  const productData = useGetProductAll();

  const [product, setProduct] = useState([]) as any;
  const [showResults, setShowResults] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (productData && productData.product) {
      const sortedProducts = productData.product.sort((a, b) => a["Unit cost"] - b["Unit cost"]);

      const cheapestProducts = sortedProducts.slice(0, 3);

      setProduct(cheapestProducts);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [productData]);

  const goToProductDetail = (productId) => {
    router.push(`/product/${productId}`);
  };



  return (
    <div>
    
      <h1>Productos destacados:</h1>
      {showResults ? (
        <Container className="product-container">
          <ul>
            {product.map((product, index) => (
              <ProductContainer key={index}>
                <NameTitle>{product.Name}</NameTitle>
                <ProductImage src={product.Images[0].url} />
                <Precio>Precio: ${product["Unit cost"]}</Precio>
                <Button onClick={() => goToProductDetail(product.objectID)}>Ver Detalles</Button>
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

export default ProductDest;
