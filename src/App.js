import React, {  lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";

import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//chunking
//code splitting
//Dynamic Loading
//Lazy Loading
//On Demand Loading
//Dynamic import

//job of post css is to compile tailwindcss into normal css file

const Instamart = lazy(()=> import("./components/Instamart")); 
// Upon on demand loading -> upon render -> react will suspend loading

const AppLayout = () => {
  const [user,setUser] = useState({
    name:"Krishna",
    email:"support@gmail.com",
  })

  
  return (
    <>
    <Provider store={store}>
    <UserContext.Provider   value={{
      user:user,
      setUser:setUser
    }}>
      <Header />
      {/* { {Outlet}} */} 
      <Outlet />
      <Footer />
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body user={{name:"Krishna Yadav",email:"krishnantv1111@gmail.com"}} /> },
      { path: "/about", element: <About /> , children: [{
        path:"profile",
        element:<Profile/>,

      },],},

      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },  // id will go like param 
      { path: "/instamart", element: <Suspense fallback={<Shimmer/>}> <Instamart/></Suspense>  }, 
      { path: "/cart", element: <Cart/> }, 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
