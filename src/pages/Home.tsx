import React from 'react'
import { Intro } from '../components/Intro'
import { CoffeeList } from '../components/CoffeeList'
import { useContext } from 'react'
import { Context } from '../App'

export function Home() {
  
  return (
    <div className='bg-background min-h-screen'>
      <div className='py-20 mx-[12%]'>
        <Intro />
        <div>
          <h1 className="text-[32px] text-base-subtitle font-extrabold mt-20">Nossos cafés</h1>
          <CoffeeList />
        </div>
      </div>

    </div>
  )
}
