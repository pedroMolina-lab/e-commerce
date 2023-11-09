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
  const {data} = getProductId(productId) as any;
  const adress = useMe()
  const adressCheck = adress
  
  const token = getSaveToken();
  
  
  const [showResults, setShowResults] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  
  useEffect(() => {
    if (data && data.product) {
      setShowResults(true);
      
      
    } else {
      setShowResults(false);
    }
  }, [data]);

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
      
    if (data.product) {
      if (token) {
        if (adressCheck) {
          const resUrl = await OrderProduct(
            data.product.objectID,
            selectedColor,
            data.product["Unit cost"],
            data.product.Images[0].url,
            formattedDate,
            data.product.Name
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
            <ProductTitle>{data.product.Name}</ProductTitle>
            <ProductImage src={data.product.Images[0].url} />
            <ProductDescription>
              {data.product.Description}
            </ProductDescription>
            <ProductDetail>
              Materials: {data.product.Materials}
            </ProductDetail>
            <h3>Elije un color:</h3>
            {data.product.Color.map((color, index) => (
              <ProductDetailColor
                key={index}
                onClick={() => handleColorSelection(color)}
                className={selectedColor === color ? "selected" : ""}
              >
                {color}
              </ProductDetailColor>
            ))}
            <ProductPrice>
              Precio: ${data.product["Unit cost"]}
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
