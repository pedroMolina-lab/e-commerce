
import styled, {keyframes} from "styled-components";




export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 5px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
`;

export const FormContainer = styled.div`
  display: flex;
  margin-top: -80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 30px;
  color: #888;
  margin-bottom: 5px;
`;

export const ProductCard = styled.div`
  border: 6px solid #8f9ead;;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-size: 18px;
    margin: 0 0 8px;
    text-align: center;
  }

  p {
    font-size: 20px;
    margin: 0;
    text-align: center;

  }

  img {
    width: 100%;
    height: 0; 
    padding-top: 100%; 
    object-fit: cover;
    border-radius: 8px;
  }

  button {
    background-color: #384e66;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
   
    &:hover {
         background-color: #58687b

  }
}
`;

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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: black;
  animation: ${spin} 1s linear infinite; 
`;
