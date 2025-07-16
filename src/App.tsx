import { RoutesLayout } from "./RoutesLayout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";



export const Context = createContext({} as any);
interface ICoffee {
    id: number
    nameCoffee: string;
    ordersAmount: number;
    coffeeType: typeCoffee;
    coffeeCost: number;
  }

  interface INewOrder{
    adress: any,
    order: any
    paymentMethod: any
  }

  type typeCoffee = "Coffee_Americano" | "Coffee_Arabe" | "Coffee_Capuccino" | "Coffee_Chocolate_Quente" | "Coffee_Com_Leite" | "Coffee_Cubano" | "Coffee_Expresso_Cremoso" | "Coffee_Expresso" | "Coffee_Gelado"| "Coffee_Havaiano" | "Coffee_Irlandes" | "Coffee_Latte" | "Coffee_Macchiato" |"Coffee_Mochaccino"

function App() {

  
  const [coffeeListCheckout, setCoffeeListCheckout] = useState<ICoffee[]>([])
  const [totalAmountItemsCheckout, setTotalAmountItemsCheckout] = useState<Number>(1)
  const [newOrder, setNewOrder] = useState<INewOrder>({
    adress: "",
    order: "",
    paymentMethod: ""
  })
  return (
    <Context.Provider value={{
      coffeeListCheckout,
      setCoffeeListCheckout,
      totalAmountItemsCheckout,
      setTotalAmountItemsCheckout,
      newOrder,
      setNewOrder
    }}>
      <BrowserRouter>
        <RoutesLayout />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
