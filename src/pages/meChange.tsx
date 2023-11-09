import Layout from "../components/layout/layout";
import { MeChangeForm } from "@/components/meChange";
import { useMe } from "@/lib/hooks";
import { ShowData } from "@/components/me";

export default function LoginPage(){
    return(
      <Layout>
        <ShowData/>
        <MeChangeForm/>
      </Layout>

    )
}