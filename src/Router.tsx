import { Route, Routes } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Home } from './pages/Home'

import { Success } from './pages/Sucess'
import Checkout from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
