"use client"

import Head from "next/head";
import ProductSearchForm from "@/components/searchForm";
import Layout from "../components/layout/layout";
import ProductDest from "@/components/productsdest";

export default function HomePage({ products }: any) {
    return (
      <>
        <Head>
          <title>E-commerce</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
        <ProductSearchForm/>
        <ProductDest/>
        </Layout>    
        
      </>
    );
  }



