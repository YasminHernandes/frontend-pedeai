import { Outlet } from "react-router";
import { CartContextProvider } from "./contexts/cartContext";

export const App = () => {
  return (
    <CartContextProvider>
      <Outlet/>
    </CartContextProvider>
  );
};