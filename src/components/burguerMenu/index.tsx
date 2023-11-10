import styled from "styled-components";
import Link from "next/link";
import { DivContainer, StyledLink } from "./styled";
import React, { useState, useEffect } from "react";
type BurguerOptionsProps = {
  showMenu: boolean;
};

const BurguerOptions: React.FC<BurguerOptionsProps> = ({ showMenu }) => {
  const [clicked, setClicked] = useState(false);
  const [token, setToken] = useState("");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken("");
  };

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      setToken(localStorage.getItem("auth_token") as string);
    } else {
      setToken("");
    }
  }, []);

  return (
    <DivContainer showMenu={showMenu}>
      {token ? (
        <>
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
            <StyledLink onClick={logout}>Salir</StyledLink>
          </Link>
        </>
      ) : (
        <Link href="/login">
          <StyledLink>Ingresar</StyledLink>
        </Link>
      )}
    </DivContainer>
  );
};

export default BurguerOptions;
