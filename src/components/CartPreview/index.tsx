import { CheckoutContext } from '../../context/CheckoutContext'
import { useContext, useEffect, useState } from 'react'
// import { priceFormatter } from '../../utils/formatter'
import { useLocation } from 'react-router-dom'
import { CartTotalInfo, Coffee, Divider, PreviwerContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'

export function CartPreview() {
  const {
    cart,

    coffees,
  } = useContext(CheckoutContext)

  const location = useLocation()
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    // Verifica se a localização atual é a página inicial
    setIsHomePage(location.pathname === '/')
  }, [location])

  if (!isHomePage) {
    // Se não estiver na página inicial, retorne null para não renderizar o componente
    return null
  }

  const coffeesInCart = cart.map((item) => {
    // Use a função find para procurar o café correspondente pelo id
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)
    console.log(coffeeInfo)
    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  return (
    <PreviwerContainer>
      {coffeesInCart.map((coffee, index) => (
        <div key={coffee.id}>
          <Coffee>
            <div>
              <img src={coffee.image} alt={coffee.title} />

              <div>
                <span>{coffee.title}</span>

                <p>QUANTIDADE: {coffee.quantity}</p>
              </div>
            </div>

            <aside>
              <div>R$ {(coffee.price * coffee.quantity).toFixed(2)}</div>
            </aside>
          </Coffee>
          {index !== coffeesInCart.length - 1 && <Divider />}
        </div>
      ))}
      {coffeesInCart.length > 0 && <Divider />}

      <CartTotalInfo>
        {coffeesInCart.length === 0 ? (
          <div>
            <span>Carrinho Vazio</span>
          </div>
        ) : (
          <div>
            <span>Total</span>
            <span>{priceFormatter.format(totalItemsPrice)}</span>
          </div>
        )}
      </CartTotalInfo>
    </PreviwerContainer>
  )
}
