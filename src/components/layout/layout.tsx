import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StyledMain, StyledLayout } from "./styled";


export function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
