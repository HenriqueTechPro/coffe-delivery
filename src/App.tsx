import { BrowserRouter } from 'react-router-dom'

import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from './styles/global'
import { Router } from './components/routes/Router'
import { CartContextProvider } from './contexts/CartContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { SwitchThemeProvider } from './contexts/SwitchThemeContext'
export function App() {
  return (
    <SwitchThemeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <CartContextProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </CartContextProvider>
      </BrowserRouter>
    </SwitchThemeProvider>
  )
}
