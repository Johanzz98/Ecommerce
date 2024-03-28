import { TYPES } from "@/actions/ShoppingActions";

    export const ShoppingInitialState = {
        products: [
            {id:1, name:"Producto 1", price:1000},
            {id:2, name:"Producto 2", price:2000},
            {id:3, name:"Producto 3", price:3000},
            {id:4, name:"Producto 4", price:4000},
            {id:5, name:"Producto 5", price:5000},
            {id:6, name:"Producto 6", price:6000},

        ],
        cart: [],
    };

    export function ShoppingReducers(state,action){
        switch (action.type) {
            case TYPES.ADD_TO_CART:{
                let newItem = state.products.find(
                    (product) => product.id === action.payload);
                

                let itemInCart =  state.cart.find((item) => item.id === newItem.id)


                return itemInCart 
                ?
                {
                    ...state,
                    cart: state.cart.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity +1}
                        : item),

                } : {
                    ...state,
                    cart: [...state.cart, {...newItem,quantity: 1}],
                
            }
        }
            case TYPES.REMOVE_ONE_FROM_CART:{
                let itemToDelete = state.cart.find(item=> item.id === action.payload);

                return itemToDelete.quantity > 1 ? {

                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload ? 
                        {...item, quantity: item.quantity -1} : item),

                } : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
                
            }
            case TYPES.REMOVE_ALL_FROM_CART:{

                return{
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
                
                
            }

            case TYPES.SET_CART_FROM_STORAGE: {
                return {
                  ...state,
                  cart: action.payload, // Establece el carrito desde el almacenamiento local
                };
              }
              
            case TYPES.CLEAR_CART:
                return ShoppingInitialState;
                
            
            default:
                return state;
        }
}