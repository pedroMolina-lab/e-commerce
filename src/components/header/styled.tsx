import styled from "styled-components";


type ButtonInput={
  text:string
}
export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: 580px) {
    > a {
      display: none;
    }
  }
`;
export const Logo = styled.h1`
  font-size: 24px;
`;

export const DivContainer = styled.div`

list-style: none;
    padding: 0;
    display: flex;
    gap: 48px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 48px;
  }

  li {
    color: white;
    margin: 0;
    display: flex;
    align-items: center; 
  }

  /* @media (max-width: 580px) {
    display: none;
  } */
`;

export const BurguerMenuContainer = styled.div`
  display: none;

  @media (max-width: 580px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;
export const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 15px;
  background-color: #fff;
  color: #333;
`;

export const ButtonInput = styled.input`
padding: 5px 10px;
width: 60px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export function ButtonHeader({ text }: any) {
  return <ButtonInput value={text} type="submit" />
}
