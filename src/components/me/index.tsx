import { useMe } from "@/lib/hooks";
import { Container, Title } from "./styled";

import { useState, useEffect } from "react";


export function ShowData() {
    const data = useMe();
    

    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (data) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    }, [data]);
  
    return (
        
      <div>
          
          {showResults ? (
             <Container>
                <Title>Email: {data.email}</Title>
                <Title>Nombre: {data.name}</Title>
                <Title>Direccion de envio: {data.adress}</Title>
             </Container>
          ) : (
              <h1>Cargando...</h1>
          )}
      </div>
  
    )
  }