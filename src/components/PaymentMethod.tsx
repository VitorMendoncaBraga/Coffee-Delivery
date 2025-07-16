import React from 'react'
import { PiCreditCard } from "react-icons/pi";
import { AiOutlineBank } from "react-icons/ai";
import { PiMoneyThin } from "react-icons/pi";

type PaymentMethod = "Cartão de crédito" | "Cartão de débito" | "Dinheiro" | null

interface IPaymentMethodProps{
  paymentMethod: PaymentMethod,
  setPaymentMethod: Function
}

export function PaymentMethod({paymentMethod, setPaymentMethod}: IPaymentMethodProps) {
  return (
    <div className='flex gap-4 mt-10'>
        <div onClick={() => setPaymentMethod("Cartão de crédito")} className={`flex gap-5 ${paymentMethod == "Cartão de crédito" ? "bg-purple-light border-2 border-purple-dark" : "bg-base-button"}  w-7/10 justify-start items-center px-4 py-3 rounded-md cursor-pointer`}>
            <PiCreditCard className='text-purple-default'/>
            <p className='text-base-text text-[10px]' >CARTÃO DE CRÉDITO</p>
        </div>
        <div onClick={() => setPaymentMethod("Cartão de débito")} className={`flex gap-5 ${paymentMethod == "Cartão de débito" ? "bg-purple-light border-2 border-purple-dark" : "bg-base-button"}  w-7/10 justify-start items-center px-4 py-3 rounded-md cursor-pointer`}>
            <AiOutlineBank className='text-purple-default'/>
            <p className='text-base-text text-[10px]' >CARTÃO DE DÉBITO</p>
        </div>
        <div  onClick={() => setPaymentMethod("Dinheiro")} className={`flex gap-5 ${paymentMethod == "Dinheiro" ? "bg-purple-light border-2 border-purple-dark" : "bg-base-button"}  w-7/10 justify-start items-center px-4 py-3 rounded-md cursor-pointer`}>
            <PiMoneyThin className='text-purple-default '/>
            <p className='text-base-text text-[10px]'>DINHEIRO</p>
        </div>
    </div>
  )
}
