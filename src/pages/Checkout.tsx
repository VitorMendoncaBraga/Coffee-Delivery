import React, { useEffect, useState } from "react";
import { FormCheckout } from "../components/FormCheckout";
import { MdAttachMoney } from "react-icons/md";
import { PaymentMethod } from "../components/PaymentMethod";
import { useContext } from "react";
import { Context } from "../App";
import Coffee_Americano from "../assets/Coffee_Americano.png";
import Coffee_Arabe from "../assets/Coffee_Arabe.png";
import Coffee_Capuccino from "../assets/Coffee_Capuccino.png";
import Coffee_Chocolate_Quente from "../assets/Coffee_Chocolate_Quente.png";
import Coffee_Com_Leite from "../assets/Coffee_Com_Leite.png";
import Coffee_Cubano from "../assets/Coffee_Cubano.png";
import Coffee_Expresso_Cremoso from "../assets/Coffee_Expresso_Cremoso.png";
import Coffee_Expresso from "../assets/Coffee_Expresso.png";
import Coffee_Gelado from "../assets/Coffee_Gelado.png";
import Coffee_Havaiano from "../assets/Coffee_Havaiano.png";
import Coffee_Irlandes from "../assets/Coffee_Irlandes.png";
import Coffee_Latte from "../assets/Coffee_Latte.png";
import Coffee_Macchiato from "../assets/Coffee_Macchiato.png";
import Coffee_Mochaccino from "../assets/Coffee_Mochaccino.png";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  let {
    coffeeListCheckout,
    setCoffeeListCheckout,
    setTotalAmountItemsCheckout,
    newOrder,
    setNewOrder,
  } = useContext(Context);

  let navigate = useNavigate();

  type PaymentMethod = "Cartão de crédito" | "Cartão de débito" | "Dinheiro" | null

  const [totalCost, setTotalCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);

  const imgMap = {
    Coffee_Americano: Coffee_Americano,
    Coffee_Arabe: Coffee_Arabe,
    Coffee_Capuccino: Coffee_Capuccino,
    Coffee_Chocolate_Quente: Coffee_Chocolate_Quente,
    Coffee_Com_Leite: Coffee_Com_Leite,
    Coffee_Cubano: Coffee_Cubano,
    Coffee_Expresso_Cremoso: Coffee_Expresso_Cremoso,
    Coffee_Expresso: Coffee_Expresso,
    Coffee_Gelado: Coffee_Gelado,
    Coffee_Havaiano: Coffee_Havaiano,
    Coffee_Irlandes: Coffee_Irlandes,
    Coffee_Latte: Coffee_Latte,
    Coffee_Macchiato: Coffee_Macchiato,
    Coffee_Mochaccino: Coffee_Mochaccino,
  };

  type typeCoffee = keyof typeof imgMap;

  interface ICoffee {
    id: number;
    nameCoffee: string;
    ordersAmount: number;
    coffeeType: typeCoffee;
    coffeeCost: number;
  }

  function deleteCoffee(id: number) {
    const newList = coffeeListCheckout.filter(
      (coffee: ICoffee) => coffee.id != id
    );
    setCoffeeListCheckout(newList);
  }

  function verifyAmount() {
    let total = 0;
    coffeeListCheckout.map((coffee: ICoffee) => (total += coffee.ordersAmount));
    setTotalAmountItemsCheckout(total);
  }

  function verifyTotalCost() {
    setTotalCost(0);
    coffeeListCheckout.map((coffee: ICoffee) =>
      setTotalCost((state) => state + coffee.coffeeCost)
    );
  }

  useEffect(() => {
    verifyAmount(), verifyTotalCost();
  }, [coffeeListCheckout]);

  function decreaseCoffeeAmount(id: number) {
    const unitCost: number = 9.9;
    setTotalAmountItemsCheckout((prevstate: number) => prevstate - 1);
    setCoffeeListCheckout((prevstate: ICoffee[]) =>
      prevstate.map((coffee) =>
        coffee.id === id
          ? {
              ...coffee,
              ordersAmount: coffee.ordersAmount - 1,
              coffeeCost: (coffee.ordersAmount - 1) * unitCost,
            }
          : coffee
      )
    );
  }

  function increaseCoffeeAmount(id: number) {
    const unitCost: number = 9.9;
    setTotalAmountItemsCheckout((prevstate: number) => prevstate + 1);
    setCoffeeListCheckout((prevstate: ICoffee[]) =>
      prevstate.map((coffee) =>
        coffee.id == id
          ? {
              ...coffee,
              ordersAmount: coffee.ordersAmount + 1,
              coffeeCost: (coffee.ordersAmount + 1) * unitCost,
            }
          : coffee
      )
    );
  }

  interface IFormData {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
  }

  const [formData, setFormData] = useState<IFormData>({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  async function handleConfirmOrder() {
    if (
      paymentMethod == null ||
      formData.cep == "" ||
      formData.bairro == "" ||
      formData.cidade == "" ||
      formData.logradouro == "" ||
      formData.numero == "" ||
      formData.uf == ""
    ) {
      return Swal.fire("Erro", "Preencha todos os campos", "error");
    }
    try {
      const order = {
        adress: {
          formData,
        },
        order: {
          coffeeListCheckout,
        },
        paymentMethod: paymentMethod,
      };
      setNewOrder(order);
      await Swal.fire("Sucesso!", "Pedido realizado com sucesso", "success");
      return console.log(newOrder);
    } finally {
      setCoffeeListCheckout([])
      navigate("/success");
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="py-20 mx-[12%] flex gap-5">
        <div className="formepagamento w-6/10">
          <h1 className="mb-4 text-[18px] font-bold">Complete seu pedido</h1>
          <div className="flex flex-col gap-5">
            <div className="bg-base-card p-10 rounded-sm">
              <FormCheckout formData={formData} setFormData={setFormData} />
            </div>
            <div className="bg-base-card p-10 rounded-sm ">
              <div className="flex gap-2">
                <MdAttachMoney size={20} className="text-purple-dark" />
                <div className="">
                  <p className="text-[16px] text-base-subtitle">Pagamento</p>
                  <p className="text-[14px] text-base-text">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
              <div>
                <PaymentMethod
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="selecionados h-full flex-1  ">
          <h1 className="mb-4 text-[18px] font-bold">Café selecionados</h1>
          <div className="bg-base-card p-10 rounded-sm w-full rounded-tr-4xl rounded-bl-4xl">
            {coffeeListCheckout.length > 0 ? (
              coffeeListCheckout.map((coffee: ICoffee) => (
                <div
                  className={`flex justify-between py-4 ${
                    coffeeListCheckout.length > 1
                      ? "border-b-1 border-gray-200"
                      : ""
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={imgMap[coffee.coffeeType]}
                      alt=""
                      className="h-[80px]"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <p className="text-base-subtitle text-[16px]">
                        {coffee.nameCoffee}
                      </p>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-2 bg-base-button px-3 py-1 rounded-md">
                          <button
                            className="text-purple-default cursor-pointer"
                            onClick={() =>
                              coffee.ordersAmount > 1
                                ? decreaseCoffeeAmount(coffee.id)
                                : ""
                            }
                          >
                            -
                          </button>
                          <p>{coffee.ordersAmount}</p>
                          <button
                            className="text-purple-default cursor-pointer"
                            onClick={() => increaseCoffeeAmount(coffee.id)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => deleteCoffee(coffee.id)}
                          className="flex items-center cursor-pointer bg-base-button py-1 px-3 rounded-md gap-2 text-base-text"
                        >
                          <FaRegTrashAlt className="text-purple-default" />
                          REMOVER
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-1 text-base-text text-[16px] font-bold ">
                    {"R$  " + coffee.coffeeCost.toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-base-text font-bold">
                Nenhum cafe selecionado
              </p>
            )}

            {coffeeListCheckout.length > 0 ? (
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex justify-between">
                  <p className="text-base-text text-[14px]">Total de itens</p>
                  <p className="text-base-text">
                    {`R$  ` + totalCost.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base-text text-[14px]">Entrega</p>
                  <p className="text-base-text">R$ 3,50</p>
                </div>
                <div className="flex justify-between text-base-subtitle text-[20px] font-bold">
                  <p>Total</p>
                  <p>{`R$  ` + (totalCost + 3.5).toFixed(2)}</p>
                </div>
                <button
                  className="bg-yellow-default w-full mt-3 py-3 rounded-md font-bold text-white cursor-pointer"
                  onClick={handleConfirmOrder}
                >
                  CONFIRMAR PEDIDO
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
