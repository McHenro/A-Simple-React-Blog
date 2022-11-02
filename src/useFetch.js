import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    setTimeout(() => {
       fetch(url)
         .then((res) => {
           if (!res.ok) {
             throw Error("could not fetch data for that resource");
           }
          return res.json();
         })
         .then((data)=>{
            setData(data);
            setIspending(false);
         })
         .catch((err) => {
           setError(err.message);
           setIspending(false);
         });
     }, 1000);
   }, [url]);
    return {data, isPending, error}
}
 
export default useFetch;