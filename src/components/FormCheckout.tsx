import React, { useEffect, useState } from 'react'
import { PiMapPinLine } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import axios from "axios"



interface IFormData{
    cep: string,
    logradouro: string,
    numero: string
    cidade: string,
    bairro: string,
    complemento: string,
    uf: string
}

   

interface IFormProps{
    formData: IFormData,
    setFormData: Function
}


export function FormCheckout({formData, setFormData}: IFormProps) {

    const buscarCEP = async (cep: string) =>{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.data;
        setFormData({
            ...formData, 
            logradouro: data.logradouro,
            bairro: data.bairro,
            complemento: data.complemento,
            cidade: data.localidade,
            uf: data.uf
        })
    }

    return (
        <form action="">
            <label htmlFor="" className='flex gap-2'>
                <PiMapPinLine size={20} className='text-yellow-dark' />
                <div className=''>
                    <p className='text-[16px] text-base-subtitle'>Endereço de Entrega</p>
                    <p className='text-[14px] text-base-text'>Informe o endereço onde deseja receber seu pedido</p> 
                </div>
            </label>
            <div className='my-4 flex flex-col gap-3 mt-10 '>
                <div className='relative'>
                    <input type="text" placeholder='CEP' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' value={formData.cep} onChange={(e) => setFormData({...formData, cep: e.target.value})}  />
                    <ImSearch className='absolute left-[25%] top-2.5 text-purple-dark cursor-pointer' onClick={() => buscarCEP(formData.cep)} />
                </div>

                <input type="text" placeholder='Rua' className='w-full border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' value={formData.logradouro} onChange={(e) => setFormData({...formData, logradouro: e.target.value})} />
                <div className='flex gap-2'>
                    <input type="text" placeholder='Número' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' value={formData.numero} onChange={(e) => setFormData({...formData, numero: e.target.value})}  />
                    <input type="text" placeholder='Complemento' className='w-7/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' value={formData.complemento} onChange={(e) => setFormData({...formData, complemento: e.target.value})} />
                </div>

                <div className='flex gap-2'>
                    <input type="text" placeholder='Bairro' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input'  value={formData.bairro} onChange={(e) => setFormData({...formData, bairro: e.target.value})}/>
                    <input type="text" placeholder='Cidade' className='w-5/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input'  value={formData.cidade} onChange={(e) => setFormData({...formData, cidade: e.target.value})}/>
                    <input type="text" placeholder='UF' className='w-2/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' value={formData.uf} onChange={(e) => setFormData({...formData, uf: e.target.value})} />
                </div>

            </div>
        </form>
    )
}
