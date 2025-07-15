import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function RoutesLayout() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
        <Route path='success' element={<Success />}></Route>
      </Route>
      
    </Routes>
  )
}
