import { configureStore } from "@reduxjs/toolkit";
import { ShoppingReducers } from "../redurcers/ShoppingReducers";


export const store = () =>{

    return configureStore({
            reducer: {
                cart: ShoppingReducers
            }
        
        
        
    })
    
} 