const BASE_URL = "https://mercadopago-pagos.vercel.app/api";

export async function fetchApi(input: RequestInfo, options) {
  const url = BASE_URL + input;
  const token = getSaveToken()
  const newOptions: any = options || {};
  
  if (token) {
    
    newOptions.headers ||= {};
  newOptions.headers.Authorization = "Bearer " + token
  
  }
  newOptions.headers = newOptions.headers || {};
  newOptions.headers["Content-Type"] = "application/json";
  


  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw new Error(`Error en la solicitud: ${res.status}`);
  }
}

export async function sendCode(email: string) {
  return fetchApi("/auth", {
    method: "POST",
    body: {
      email,
    },
  });
}

export async function getToken(email: string, code: string) {
  const data = await fetchApi("/auth/token", {
    method: "POST",
    body: {
      email,
      code: parseInt(code),
    },
  });
  saveToken(data.token);
  return true;
}

export function saveToken(token: string) {
 return localStorage.setItem("auth_token", token);

 
}

export function getSaveToken() {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem("auth_token");
  }
  return null; 
}


export async function MeChange( adress: string,  name: string) {
  const token = getSaveToken()
  
 return fetchApi("/me/adress", {
    method: "PATCH",
    body: {
      adress,
      name

    },
    headers: {
      Authorization: "Bearer" + token
    }
  });

}


export async function OrderProduct(id: string, color, price, image, fecha, name){
  const token = getSaveToken()
  const results = await fetchApi("/order?productId=" + id,{
    method: "POST",
    body:{
      name,
      color,
      price,
      image,
      fecha,
    },
    headers: {
      Authorization: "Bearer" + token
    }
  } )
  return results
  
}
