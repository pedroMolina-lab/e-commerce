import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchApi } from "./api";

export function useMe(){
    const { data, error } = useSWR("/me", fetchApi as any)
    return data 
}



export function useGetProductId(id: string){
    const { data, error,  } = useSWRImmutable(() => (id ? "/searchById"+"?id=" + id : null), fetchApi as any)
    return {data, error} 
}

export function useGetProduct(name: string){
    const { data, error } = useSWRImmutable(() => (name ? "/search"+"?q=" + name : null), fetchApi as any)
    
    return data
}

export function useGetProductAll() {
    const { data, error } = useSWR("/searchAll", fetchApi as any);
  
    if (error) {
      console.error("Error al cargar los datos:", error);
      return { product: [] };
    }
  
    if (!data) {
      return { product: [] }; 
    }
  
    return data;
  }


  export function useGetProductsMe() {
    const { data, error } = useSWR("/me/orders", fetchApi as any);
  
    if (error) {
      console.error("Error al cargar los datos:", error);
      return { product: [] };
    }
  
    if (!data) {
      return { product: [] }; 
    }
  
    return data;
  }
  
  