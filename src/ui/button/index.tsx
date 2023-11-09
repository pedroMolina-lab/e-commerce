import style from "./style.module.css"
import styled from 'styled-components';

type PrimaryButtonProps={
    text:string
}

export const BaseButton = styled.button`
  background-color: #384e66;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  

  &:hover {
    background-color:#58687b
  }
`;

export function PrimaryButton({ text }: PrimaryButtonProps) {
    return <BaseButton>{text}</BaseButton>

}

export const SecondaryButton  = styled(BaseButton)`
background-color: black;

`