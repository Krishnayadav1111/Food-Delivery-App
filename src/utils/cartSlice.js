import { createSlice } from "@reduxjs/toolkit";


const cartSlice =createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        addItem: (state,action) =>{
            state.items.push(action.payload)
             
        },
        removeItem: (state,action) =>{
            state.items.pop();
        },

        clearCart: (state) =>{
            state.items = [];
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

//   addItem: (state,action)     this state is the initial state and action is the data which is coming IN.reducers will modify our states according to the action comming IN.