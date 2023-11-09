import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { DivContainer, StyledLink } from "./styled";
type BurguerOptionsProps = {
  showMenu: boolean;
};



const BurguerOptions: React.FC<BurguerOptionsProps> = ({ showMenu }) => {
  return (
    <DivContainer showMenu={showMenu}>
      <Link href="/productMe">
        <StyledLink>Mis Compras</StyledLink>
      </Link>
      <Link href="/meChange">
        <StyledLink>Mi Perfil</StyledLink>
      </Link>
      <Link href="/productAll">
        <StyledLink>Ver todos los productos</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>Salir</StyledLink>
      </Link>
    </DivContainer>
  );
};

export default BurguerOptions;
