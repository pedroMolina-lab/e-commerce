import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
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


export const InputLabel = styled.label`
  display: block;
  font-size: 30px;
  color: #604343;
  margin-bottom: 5px;
`;


export const Title = styled.h1`
  color: #c01f1f; 
  font-size: 24px;
  margin-bottom: 60px; 
`;