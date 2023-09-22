import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

const dispatch = useDispatch();

const handleClearCart = () => {
    dispatch(clearCart());

}

  return (
    <div>
      <h1 className="font-bold h-5">Cart Items -{cartItems.length}</h1>
      <button className="bg-green-500" onClick={()=> handleClearCart()}>Clear cartItems</button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
