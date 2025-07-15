import React from 'react'
import { Coffee } from './Coffee'

export function CoffeeList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-15 gap-x-10 gap-y-20'>
        <Coffee name='Expresso Tradicional' desc='O tradicional café feito com água quente e grãos moídos' type='Coffee_Expresso' tags={["Tradicional"]} />
        <Coffee name='Expresso Americano' desc='Expresso diluído, menos intenso que o tradicional' type='Coffee_Americano' tags={["Tradicional"]}/>
        <Coffee name='Expresso Cremoso' desc='Café expresso tradicional com espuma cremosa' type='Coffee_Expresso_Cremoso' tags={["Tradicional"]} />
        <Coffee name='Expresso Gelado' desc='Bebida preparada com café expresso e cubos de gelo' type='Coffee_Gelado' tags={["Tradicional", "Gelado"]} />
        <Coffee name='Café com leite' desc='Meio a meio de expresso tradicional com leite vaporizado' type='Coffee_Com_Leite' tags={["Tradicional", "Com leite"]} />
        <Coffee name='Latte' desc='Uma dose de café expresso com o dobro de leite e espuma cremosa' type='Coffee_Latte' tags={["Tradicional", "Com leite"]} />
        <Coffee name='Capuccino' desc='Bebida com canela feita de doses iguais de café, leite e espuma' type='Coffee_Capuccino' tags={["Tradicional", "Com leite"]} />
        <Coffee name='Macchiato' desc='Café expresso misturado com um pouco de leite quente e espuma' type='Coffee_Macchiato' tags={["Tradicional", "Com leite"]} />
        <Coffee name='Mocaccino' desc='Café expresso com calda de chocolate, pouco leite e espuma' type='Coffee_Mochaccino' tags={["Tradicional", "Com leite"]} />
        <Coffee name='Chocolate Quente' desc='Bebida feita com chocolate dissolvido no leite quente e café' type='Coffee_Chocolate_Quente' tags={["Especial", "Com leite"]} />
        <Coffee name='Cubano' desc='Drink gelado de café expresso com rum, creme de leite e hortelã' type='Coffee_Cubano'  tags={["Especial", "Alcoólico", "Gelado"]} />
        <Coffee name='Havaiano' desc='Bebida adocicada preparada com café e leite de coco' type='Coffee_Havaiano' tags={["Especial"]} />
        <Coffee name='Árabe' desc='Bebida preparada com grãos de café árabe e especiarias' type='Coffee_Arabe' tags={["Especial"]} />
        <Coffee name='Irlandês' desc='Bebida a base de café, uísque irlandês, açúcar e chantilly' type='Coffee_Irlandes' tags={["Especial", "Alcoólico"]} />
    </div>
  )
}
