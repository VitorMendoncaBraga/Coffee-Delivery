import React from 'react'
import { PiCreditCard } from "react-icons/pi";
import { AiOutlineBank } from "react-icons/ai";
import { PiMoneyThin } from "react-icons/pi";

export function PaymentMethod() {
  return (
    <div className='flex gap-4 mt-10'>
        <div className='flex gap-5 bg-base-button w-7/10 justify-start items-center px-4 py-3 rounded-md cursor-pointer'>
            <PiCreditCard className='text-purple-default'/>
            <p className='text-base-text text-[10px]'>CARTÃO DE CRÉDITO</p>
        </div>
        <div className='flex gap-5 bg-base-button w-7/10 justify-start items-center px-4 py-3 rounded-md cursor-pointer'>
            <AiOutlineBank className='text-purple-default'/>
            <p className='text-base-text text-[10px]'>CARTÃO DE DÉBITO</p>
        </div>
        <button className='flex gap-5 bg-base-button w-7/10 justify-start items-center px-4 py-3 rounded-md cursor-pointer active:border-1  '>
            <PiMoneyThin className='text-purple-default '/>
            <p className='text-base-text text-[10px]'>DINHEIRO</p>
        </button>
    </div>
  )
}
