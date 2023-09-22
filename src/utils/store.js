import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";



const store = configureStore({
reducer:{
    cart:cartSlice,
},
});cartSlice


export default store;



/** 

*Created-Store
* -configureStore() -RTK
* Provide my stote to app
*- <Provider store ={ store}> - import from react redux
*
* Slice
-CreateSlice() - RTK- createSlie({
    name:"",
    initialsState:
    reducers:{
addItem:(state, action) =>{
state=action.payload
}
})

export const {addItem,removeItem} = cartSlice.actions
rxport default cartSlice.reducer;
*Put that Slice into Store
-{
    reducer:{
        cart:cartSlice,
        user:userSlice,
    }
}



**/