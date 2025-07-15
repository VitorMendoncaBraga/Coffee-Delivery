import React, { useState } from 'react'
import Coffee_Americano from '../assets/Coffee_Americano.png';
import Coffee_Arabe from '../assets/Coffee_Arabe.png';
import Coffee_Capuccino from '../assets/Coffee_Capuccino.png';
import Coffee_Chocolate_Quente from '../assets/Coffee_Chocolate_Quente.png';
import Coffee_Com_Leite from '../assets/Coffee_Com_Leite.png';
import Coffee_Cubano from '../assets/Coffee_Cubano.png';
import Coffee_Expresso_Cremoso from '../assets/Coffee_Expresso_Cremoso.png';
import Coffee_Expresso from '../assets/Coffee_Expresso.png';
import Coffee_Gelado from '../assets/Coffee_Gelado.png';
import Coffee_Havaiano from '../assets/Coffee_Havaiano.png';
import Coffee_Irlandes from '../assets/Coffee_Irlandes.png';
import Coffee_Latte from '../assets/Coffee_Latte.png';
import Coffee_Macchiato from '../assets/Coffee_Macchiato.png';
import Coffee_Mochaccino from '../assets/Coffee_Mochaccino.png';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../App';
import { useEffect } from 'react';
import Swal from 'sweetalert2'



interface CoffeeProps {
  name: string;
  desc: string;
  type: typeCoffee;
  tags: string[];
}

interface ICoffee {
    id: number
    nameCoffee: string;
    ordersAmount: number;
    coffeeType: typeCoffee;
    coffeeCost: number;
  }
  

type typeCoffee = keyof typeof imgMap;

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


export function Coffee(props: CoffeeProps) {
  let {coffeeListCheckout, setCoffeeListCheckout, setTotalAmountItemsCheckout} = useContext(Context);
 
function verifyAmount(){
    let total = 0;
    coffeeListCheckout.map((coffee: ICoffee) =>(
      total += coffee.ordersAmount
    ))
    setTotalAmountItemsCheckout(total)
  }

  useEffect(() =>{
    verifyAmount()
  }, [coffeeListCheckout])

  const [qntCoffee, setQntCoffee] = useState(1);
  const [precoCoffee, setPrecoCoffee] = useState(9.90);
  

  const dobrarValorCafe = (precoCoffee: number) => {
    setPrecoCoffee(precoCoffee + 9.90)
  }
  const dividirValorCafe = (precoCoffee: number) => {
    if (precoCoffee >= 10) {
      setPrecoCoffee(precoCoffee - 9.90)
      setQntCoffee(qntCoffee - 1)
    }
    else {
      setPrecoCoffee(9.90)
      setQntCoffee(1)
    }

  }
  const aumentarQuantidadeCafe = (precoCoffee: number) => {
    dobrarValorCafe(precoCoffee)
    setTotalAmountItemsCheckout((prevstate: number) => prevstate + 1)
    setQntCoffee(qntCoffee + 1);
  }

  const diminuirQuantidadeCafe = (precoCoffee: number) => {
    dividirValorCafe(precoCoffee)
    
    if(qntCoffee != 1){
      setTotalAmountItemsCheckout((prevstate: number) => prevstate - 1)
      setQntCoffee(qntCoffee - 1);
    }
    
  }

  const handleCheckout = () =>{
    try{
      const coffeeCost = 9.90 * qntCoffee
      const newCoffeeOrder: ICoffee = {
        id: new Date().getTime(),
        nameCoffee: props.name,
        ordersAmount: qntCoffee,
        coffeeCost: coffeeCost,
        coffeeType: props.type
    }
    setCoffeeListCheckout([...coffeeListCheckout, newCoffeeOrder])

    }
    catch{
      console.log(Error)
    }
    finally{
      Swal.fire('Sucesso', 'Item adicionado ao carrinho com sucesso!', "success")
    }
    
  }

  

  
  return (
    <div>
      <div className='bg-base-card flex flex-col items-center p-2 rounded-tr-4xl rounded-bl-4xl relative'>
        <img src={imgMap[props.type]} alt="" className='absolute -translate-y-8 h-30' />
        <div className='mt-30 flex gap-1 justify-center'>
          {
            props.tags.map(tag => (
              <div className='text-yellow-dark bg-yellow-light rounded-xl px-2 '>
                <p>{tag}</p>
              </div>
            ))
          }
        </div>


        <div className='text-center mx-2 my-4 '>
          <h1 className='text-[20px] font-bold'>{props.name}</h1>
          <p className='mt-3 text-base-label text-[14px]'>{props.desc}</p>
        </div>
        <footer className='flex items-center w-full justify-around mb-5 '>
          <p className='text-[24px] font-extrabold text-base-text'><span className='text-[15px] font-normal mr-1'>R$</span>{precoCoffee.toFixed(2)}</p>
          <div className='flex gap-2'>
            <div className='flex bg-base-button gap-2 px-2 py-1 justify-between rounded-md'>
              <button className='text-purple-default font-bold cursor-pointer' onClick={() => diminuirQuantidadeCafe(precoCoffee)}>-</button>
              <p>{qntCoffee}</p>
              <button className='text-purple-default font-bold cursor-pointer' onClick={() => aumentarQuantidadeCafe(precoCoffee)}>+</button>
            </div>

            <div className='bg-purple-dark text-white flex items-center justify-center p-2 rounded-md cursor-pointer' onClick={handleCheckout}>
              <FaShoppingCart />
            </div>
          </div>
        </footer>
      </div>

    </div>
  )
}



