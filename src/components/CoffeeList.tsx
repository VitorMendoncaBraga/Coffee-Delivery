import React, { useState } from 'react'
import { Coffee } from './Coffee'

interface ICoffeeListProps{
  coffeeList: ICoffee[]
}

interface ICoffee{
  name: string,
  desc: string,
  type: typeCoffee,
  tags: string[]
}

type typeCoffee = "Coffee_Americano" | "Coffee_Arabe" | "Coffee_Capuccino" | "Coffee_Chocolate_Quente" | "Coffee_Com_Leite" | "Coffee_Cubano" | "Coffee_Expresso_Cremoso" | "Coffee_Expresso" | "Coffee_Gelado"| "Coffee_Havaiano" | "Coffee_Irlandes" | "Coffee_Latte" | "Coffee_Macchiato" |"Coffee_Mochaccino"


export function CoffeeList({coffeeList}: ICoffeeListProps) {
  const [filter, setFilter] = useState("");
  const filteredList = coffeeList.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>
    <input type="text" placeholder='Pesquise seu café' className='w-3/10 border-1 pl-2 border-base-button p-1 rounded-sm  mt-5' value={filter} onChange={e => setFilter(e.target.value)} />
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-15 gap-x-10 gap-y-20'>
      {
        filteredList.map((coffee) => (
          <Coffee name={coffee.name} desc={coffee.desc} type={coffee.type} tags={coffee.tags} />
        ))
      }      
    </div>
    </>
    
  )
}
