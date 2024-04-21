import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout/index'
import { Home } from '../../pages/Home'
import { Checkout } from '../../pages/Cart'
import { Success } from '../../pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
