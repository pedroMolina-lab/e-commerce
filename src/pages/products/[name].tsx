import type { NextPage } from "next";
import { Product } from "@/components/productId";
import { useRouter } from "next/router";
import { ProductName } from "@/components/productName";
import Header from "@/components/header";
import Layout from "../../components/layout/layout";

const ProductsPage: NextPage = () => {
  const router = useRouter();
  const productName = router.query.name;

  return (
    <div>
      <Layout>
        <ProductName productName={productName}></ProductName>;
      </Layout>
    </div>
  );
};

export default ProductsPage;
