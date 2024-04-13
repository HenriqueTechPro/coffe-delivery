import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { defaultTheme } from './styles/themes/default'
import { CheckoutContextProvider } from './context/CheckoutContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <GlobalStyle />

          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
