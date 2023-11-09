import styled from "styled-components";

export const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #ff0000;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`;
export const ProductCount = styled.p`
text-align: left;
font-size: 18px;
color: #333;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  background: #b6b7a2;
  max-height: 400px;

`;
export const NameTitle = styled.h2`
font-size: 18px;
    margin: 0 0 8px;
    text-align: center;
`

export const Precio = styled.p`
font-size: 20px;
    margin: 0;
    text-align: center;
`
export const Button = styled.button`
  background-color: #384e66;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  margin-top: 30px;
  
  &:hover {
    background-color: #58687b;
  }
`;

export const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;
