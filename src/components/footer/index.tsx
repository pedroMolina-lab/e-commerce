import React from "react";
import { FooterContainer, SocialIcons, SocialText, Textos } from "./styled";
import { Twitter } from "@/ui/icons/twitter";
import { Instagram } from "@/ui/icons/instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Link href="https://twitter.com" target="_blank">
          <Twitter />
        </Link>
          <SocialText>Twitter</SocialText>
        <Link href="https://instagram.com" target="_blank">
          <Instagram />
        </Link>
          <SocialText>Instagram</SocialText>
      </SocialIcons>
      <Textos>
      <p>&copy; {new Date().getFullYear()} E-commerce</p>
      <p>Todos los derechos reservados</p>
      </Textos>
    </FooterContainer>
  );
};

export default Footer;
