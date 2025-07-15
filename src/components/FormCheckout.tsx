import React, { useEffect, useState } from 'react'
import { PiMapPinLine } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import { useForm } from 'react-hook-form';
import axios from "axios"


export function FormCheckout() {

    interface IFormData {
        cep: string,
        logradouro: string,
        numero: number,
        complemento: string,
        bairro: string,
        cidade: string,
        uf: string
    }

    const [formData, setFormData] = useState<IFormData>({
        cep: "",
        logradouro: "",
        numero: 0,
        complemento: "",
        bairro: "",
        cidade: "",
        uf: ""
    })

   const { register, handleSubmit, getValues, setValue } = useForm()

    
    const buscarCEP = async () =>{
        const cep = getValues("cep")
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.data;
        setValue("logradouro", data.logradouro)
        setValue("bairro", data.bairro)
        setValue("complemento", data.complemento)
        setValue("cidade", data.localidade)
        setValue("uf", data.uf)
    }

    const handleCadastrarEndereco = (data: any) =>{
        setFormData(data)
    }

    
    return (
        <form action="" onSubmit={handleSubmit(handleCadastrarEndereco)}>
            <label htmlFor="" className='flex gap-2'>
                <PiMapPinLine size={20} className='text-yellow-dark' />
                <div className=''>
                    <p className='text-[16px] text-base-subtitle'>Endereço de Entrega</p>
                    <p className='text-[14px] text-base-text'>Informe o endereço onde deseja receber seu pedido</p> 
                </div>
            </label>
            <div className='my-4 flex flex-col gap-3 mt-10 '>
                <div className='relative'>
                    <input type="text" placeholder='CEP' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' {...register("cep", {required: true})}  />
                    <ImSearch className='absolute left-[25%] top-2.5 text-purple-dark cursor-pointer' onClick={() => buscarCEP()} />
                </div>

                <input type="text" placeholder='Rua' className='w-full border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' {...register("logradouro", {required: true})} />
                <div className='flex gap-2'>
                    <input type="text" placeholder='Número' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' {...register("numero", {required: true})}  />
                    <input type="text" placeholder='Complemento' className='w-7/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' {...register("complemento")}  />
                </div>

                <div className='flex gap-2'>
                    <input type="text" placeholder='Bairro' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input'  {...register("bairro", {required: true})}/>
                    <input type="text" placeholder='Cidade' className='w-5/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input'  {...register("cidade", {required: true})} />
                    <input type="text" placeholder='UF' className='w-2/10 border-1 pl-2 border-base-button p-1 rounded-sm bg-base-input' {...register("uf", {required: true})} />
                </div>

            </div>
            <button type='submit'>Cadastrar</button>
        </form>
    )
}
