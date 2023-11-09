import { getProduct } from "@/lib/hooks";
import { product } from "@/types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, ProductContainer, NameTitle, Button, Precio, ProductImage } from "./styled";
import { PrimaryButton } from "@/ui/button";
import { ProductCount } from "./styled";
import { LoadingText } from "./styled";

export function ProductName({ productName }: any) {
    const productData = getProduct(productName);
    
    const router = useRouter()

    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (productData && productData.searchResult && productData.searchResult.products) {
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

                    {/* <ProductCount>Se encontraron {productData.searchResult.products.length} productos:</ProductCount> */}
                    <ul>
                        {productData.searchResult.products.map((product, index) => (
                            <ProductContainer key={index}>
                                <NameTitle>{product.Name}</NameTitle>
                                <ProductImage src={product.Images[0].url}/>
                                <Precio>Precio: ${product["Unit cost"]}</Precio>
                                
                                <Button onClick={() => goToProductDetail(product.objectID)}>Ver Detalles</Button>
                            </ProductContainer>
                        ))}
                    </ul>
                </Container>
            ) : (
                <LoadingText>Cargando...</LoadingText>
            )}
        </div>
    );
}