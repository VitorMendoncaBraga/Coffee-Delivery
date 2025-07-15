import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillClockFill } from "react-icons/bs";
import { SlSocialDropbox } from "react-icons/sl";
import { GiCoffeeCup } from "react-icons/gi"



interface IntroItensProps {
    content: string;
    icon: iconsNames;
}

type iconsNames = 'FaShoppingCart' | 'BsFillClockFill' | 'SlSocialDropbox' | 'GiCoffeeCup'

const iconMap = {
    FaShoppingCart: FaShoppingCart,
    BsFillClockFill: BsFillClockFill,
    SlSocialDropbox: SlSocialDropbox,
    GiCoffeeCup: GiCoffeeCup,
}

const iconStylesColor = {
    FaShoppingCart: "bg-yellow-dark",
    BsFillClockFill: "bg-yellow-default",
    SlSocialDropbox: "bg-base-text",
    GiCoffeeCup: "bg-purple-default"

}

export function IntroItens(props: IntroItensProps) {
    const IconComponent = iconMap[props.icon]
    return (
        <div className='flex gap-2 items-center' >
            <div className={`${iconStylesColor[props.icon]} flex rounded-full p-2`}>
                <IconComponent className='text-white' />
            </div>
            
            <p>{props.content}</p>
        </div>
    )
}
