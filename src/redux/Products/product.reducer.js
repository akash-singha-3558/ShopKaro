import {
PRODUCT_REQUEST,
PRODUCT_SUCCESS,
PRODUCT_ERROR,
PRODUCT_DEL,
INCREASE_PAGE
} from "./product.actions.types.js";

let initState={
    loading:false,
    page:1,
    error:false,
    productCount:0,
    products:[],
    msg:""
}

export const ProductReducer=(state=initState,{type,payload})=>{

 switch(type){
  
    case PRODUCT_REQUEST:{
        return{
            ...state,loading:true
        };
    }
    case PRODUCT_ERROR:{
        return{
            ...state,loading:false,error:true,msg:"You are facing an error"
        }
    }
   
    case PRODUCT_SUCCESS:{
        return {
            ...state,products:[...state.products,payload.data]
        }
    }
    

    case PRODUCT_DEL:{
        let data=state.products.filter((ele)=>ele.id!==payload)
        return{
            ...state,products:data
        }
    }
    
    case INCREASE_PAGE:{
        return{
            ...state,page:payload
        }
    }

    default:{
        return state;
    }
 
 }



}