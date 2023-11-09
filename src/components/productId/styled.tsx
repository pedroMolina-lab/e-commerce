import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  background: #b6b7a2;

`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin: 10px 0;
`;

export const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  margin: 40px 0 20px;
`;

export const ProductDetail = styled.h2`
  font-size: 20px;
  margin: 5px 0;
  margin: 40px 0 20px;
`;
export const ProductDetailColor = styled.h2`
  font-size: 16px;
  margin: 5px 0;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.4s;

  &.selected {
    background-color: #8d6969;
  }
`;

export const ProductPrice = styled.h1`
  font-size: 28px;
  margin: 10px 0;
  color: #0f3c6b;
`;

export const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #ff0000;
`;

export const Button = styled.button`
  background-color: #384e66;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #58687b;
  }
`;
