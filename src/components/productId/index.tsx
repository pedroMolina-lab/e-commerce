import { getProductId } from "@/lib/hooks";
import { useState, useEffect } from "react";
import {
  ProductContainer,
  ProductTitle,
  ProductDescription,
  ProductDetail,
  ProductImage,
  ProductPrice,
  NotFoundMessage,
  CenteredContainer,
  ProductDetailColor,
  Button,
} from "./styled";
import Link from "next/link";
import { OrderProduct, getSaveToken } from "@/lib/api";
import { useRouter } from "next/router";
import { useMe } from "@/lib/hooks";


export function Product({ productId }: any) {
  const productData = getProductId(productId);
  const adress = useMe()
  const adressCheck = adress
  
  const token = getSaveToken();
  
  
  const [showResults, setShowResults] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  
  useEffect(() => {
    if (productData && productData.product) {
      setShowResults(true);
      
      
    } else {
      setShowResults(false);
    }
  }, [productData]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  const router = useRouter();
  
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  
  const handleCompraClick = async () => {
      
    if (productData.product) {
      if (token) {
        if (adressCheck) {
          const resUrl = await OrderProduct(
            productData.product.objectID,
            selectedColor,
            productData.product["Unit cost"],
            productData.product.Images[0].url,
            formattedDate,
            productData.product.Name
          );
          if (resUrl) {
            router.push(resUrl.url);
          }
        } else {
          alert("Debes indicar una dirección de envío antes de comprar.");
        }
      } else {
        alert("Debes iniciar sesión para poder comprar.");
      }
    }
  };

  return (
    <CenteredContainer>
      <ProductContainer>
        {showResults ? (
          <>
            <ProductTitle>{productData.product.Name}</ProductTitle>
            <ProductImage src={productData.product.Images[0].url} />
            <ProductDescription>
              {productData.product.Description}
            </ProductDescription>
            <ProductDetail>
              Materials: {productData.product.Materials}
            </ProductDetail>
            <h3>Elije un color:</h3>
            {productData.product.Color.map((color, index) => (
              <ProductDetailColor
                key={index}
                onClick={() => handleColorSelection(color)}
                className={selectedColor === color ? "selected" : ""}
              >
                {color}
              </ProductDetailColor>
            ))}
            <ProductPrice>
              Precio: ${productData.product["Unit cost"]}
            </ProductPrice>
            <Button onClick={handleCompraClick}>Comprar</Button>
          </>
        ) : (
          <NotFoundMessage>Cargando...</NotFoundMessage>
        )}
      </ProductContainer>
    </CenteredContainer>
  );
}
