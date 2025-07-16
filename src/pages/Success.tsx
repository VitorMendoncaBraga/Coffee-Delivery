import React from "react";
import { useContext } from "react";
import { Context } from "../App";
import { BsFillClockFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Ilustration from '../assets/Illustration.png'

export function Success() {
  const { newOrder } = useContext(Context);
  console.log(newOrder);
  return (
    <div className="bg-background min-h-screen">
      <div className="py-20 mx-[12%] mt-5 flex justify-around items-end">
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="text-yellow-dark font-extrabold text-[32px]">Uhu! Pedido confirmado</h1>
            <p className="text-base-subtitle text-[20px]">Agora é só aguardar que logo o café chegará até você</p>
          </div>

          <div className="p-10 mt-10 rounded-tr-4xl rounded-bl-4xl rounded-md flex flex-col gap-4 border-1">
            <div className="flex items-center gap-2">
              <div className="flex rounded-full p-2 rounded-full bg-purple-default text-white ">
                <FaLocationDot className="" />
              </div>
              <div></div>
              <p className="text-base-text font-bold w-[50%]">{`Entrega em ${newOrder.adress.formData.logradouro}, ${newOrder.adress.formData.numero}, ${newOrder.adress.formData.bairro} - ${newOrder.adress.formData.cidade}, ${newOrder.adress.formData.uf}`}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex rounded-full p-2 rounded-full bg-yellow-default text-white ">
                <BsFillClockFill />
              </div>
              <div>
                <p className="text-base-text">Previsão de entrega</p>
                <p className="text-base-text font-bold">20 min - 30 min</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex rounded-full p-2 rounded-full bg-yellow-dark text-white ">
                <MdAttachMoney />
              </div>

              <div>
                <p className="text-base-text">Pagamento na entrega</p>
                <p className="text-base-text font-bold" >{newOrder.paymentMethod}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Ilustration} alt="" />
        </div>
      </div>
    </div>
  );
}
