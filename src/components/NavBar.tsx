import React, { useEffect } from 'react'
import Logo from '../assets/Logo.png'
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../App';



export function NavBar() {
    let {coffeeListCheckout, totalAmountItemsCheckout} = useContext(Context);
    

    return (
        <div className='flex justify-around gap-[30%] p-5 items-center bg-background'>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>

            <div className='flex gap-5 items-center'>
                <div className='flex items-center gap-2 bg-purple-light text-purple-dark p-2 rounded-md'>
                    <FaMapMarkerAlt size={20} />
                    <p>Belo Horizonte, BH</p>
                </div>
                <Link to="/checkout">
                    <div className='bg-yellow-light text-yellow-dark p-2 rounded-md'>
                        <div className='relative'>
                            <FaShoppingCart size={24} />
                            {
                                coffeeListCheckout.length > 0 ? 
                                <p className='absolute bottom-[70%] left-[100%] rounded-full text-white bg-amber-600 text-center w-[23px]'>{totalAmountItemsCheckout}</p> 
                                : 
                                ""
                            }
                        </div>
                        
                    </div>
                </Link>


            </div>
        </div>
    )
}
