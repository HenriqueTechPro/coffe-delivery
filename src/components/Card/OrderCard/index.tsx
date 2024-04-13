import { useContext } from 'react'
import {
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Divider,
  OrderCardContainer,
} from './styles'
import { coffees } from '../../../../server.json'
import { Trash } from 'phosphor-react'
import { QuantityControls } from '../../QuantityControls'
import { CheckoutContext } from '../../../context/CheckoutContext'
import { priceFormatter } from '../../../utils/formatter'

export function OrderCard() {
  const { cart, decrementItemQuantity, incrementItemQuantity, removeItem } =
    useContext(CheckoutContext)

  const shippingPrice = 3.5

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

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

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  return (
    <OrderCardContainer>
      <span>Cafés selecionados</span>

      <CartTotal>
        {coffeesInCart.map((coffee, index) => (
          <div key={coffee.id}>
            <Coffee>
              <div>
                <img src={coffee.image} alt={coffee.title} />

                <div>
                  <span>{coffee.title}</span>

                  <CoffeeInfo>
                    <QuantityControls
                      quantity={coffee.quantity}
                      incrementQuantity={() => handleItemIncrement(coffee.id)}
                      decrementQuantity={() => handleItemDecrement(coffee.id)}
                    />

                    <button onClick={() => handleItemRemove(coffee.id)}>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>R$ {coffee.price?.toFixed(2)}</aside>
            </Coffee>
            {index !== coffeesInCart.length - 1 && <Divider />}
          </div>
        ))}
        {coffeesInCart.length > 0 && <Divider />}
        <CartTotalInfo>
          <div>
            <span>Total de itens</span>
            <span>{priceFormatter.format(totalItemsPrice)}</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>{priceFormatter.format(shippingPrice)}</span>
          </div>

          <div>
            <span>Total</span>
            <span>
              {priceFormatter.format(totalItemsPrice + shippingPrice)}
            </span>
          </div>
        </CartTotalInfo>

        <CheckoutButton type="submit" form="order">
          Confirmar pedido
        </CheckoutButton>
      </CartTotal>
    </OrderCardContainer>
  )
}
