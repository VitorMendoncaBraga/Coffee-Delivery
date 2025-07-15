import React from 'react'
import ImgIntro from '../assets/Imagem.png'
import { IntroItens } from './IntroItens'

export function Intro() {
  return (
    <div className='flex justify-center gap-20'>
        <div className="w-6/10">
            <h1 className='font-roboto text-[48px]  font-extrabold text-base-title'>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className='mt-6 text-[20px] font-roboto text-base-subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div className='grid grid-cols-2 gap-5 mt-20'>
                <IntroItens content='Compra simples e segura' icon='FaShoppingCart' />
                <IntroItens content='Entrega rápida e rastreada' icon='BsFillClockFill' />
                <IntroItens content='Embalagem mantém o café intacto' icon='SlSocialDropbox' />
                <IntroItens content='O café chega fresquinho até você' icon='GiCoffeeCup' />
            </div>
        </div>
        <img src={ImgIntro} className="w-4/10 h-full" alt="" />
    </div>
  )
}
