import type { NextPage } from "next";
import { useMe } from "@/lib/hooks";


const UserPage: NextPage = () => {
    const myData = useMe()
    return (
      <div>{JSON.stringify(myData)}</div>
    );
  };
  
  export default UserPage;
  