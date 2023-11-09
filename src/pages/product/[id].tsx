import type { NextPage } from "next";
import { Product } from "@/components/productId";
import { useRouter } from "next/router";
import { ProductName } from "@/components/productName";
import Layout from "../../components/layout/layout";

const ProductPage: NextPage = ()=>{
    const router = useRouter()
    
    
    return (
        <Layout>
            <Product productId = {router.query.id}></Product>

        </Layout>
            
            )
    
}

export default ProductPage


