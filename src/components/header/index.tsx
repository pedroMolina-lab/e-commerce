import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  Nav,
  BurguerMenuContainer,
} from "./styled";
import Link from "next/link";
import BurguerMenu from "@/ui/icons/burguer";
import { Carrito } from "@/ui/icons/carrito";
import { useRouter } from "next/navigation";
import Burguer from "../burguerMenu";
import BurguerOptions from "../burguerMenu";


function Header() {
  const [clicked, setClicked] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

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
    <HeaderContainer>
 <Link href={"/"}>
        <Carrito /> 
      </Link>
      {/* <BurguerOptions showMenu={clicked} />
      <BurguerMenuContainer>
        <BurguerMenu clicked={clicked} handleClick={handleClick} />
      </BurguerMenuContainer> */}
      <Nav>
        <ul>
          {token ? (
            <>
            <Link href="/productMe">
              <li onClick={handleClick}>Mis Compras</li>
            </Link>
            <Link href="/meChange">
              <li onClick={handleClick}>Mi Perfil</li>
            </Link>
              <Link href="/productAll">
                <li onClick={handleClick}>Ver todos los productos</li>
              </Link>
              <Link href="/">
              
              <li onClick={logout}>Salir</li>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <li onClick={handleClick}>Ingresar</li>
            </Link>
          )}
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
