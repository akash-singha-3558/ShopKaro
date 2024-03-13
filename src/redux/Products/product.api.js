import axios from "axios";

export const getDataApi=async()=>{

 try{
 let res=await axios.get("https://fakestoreapi.com/products");
 return res;

 }
catch(er){
    return er.msg
    console.log(er,"errorrr")
}

}