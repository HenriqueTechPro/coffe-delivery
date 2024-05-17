import { Fragment } from 'react'

import { Trash } from '@phosphor-icons/react'

import { coffees } from '../../../data.json'
import { useCart } from '../../hooks/useCart'
import { QuantityInput } from '../../components/Inputs/QuantityInput'

import {
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
} from './styles'

import { NoItens } from '../../components/NoItens'
import { ClientInfoForm } from '../../components/Form'

const shippingPrice = 3.5

export function Checkout() {
  const { cart, incrementItemQuantity, decrementItemQuantity, removeItem } =
    useCart()

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees?.find((coffee) => coffee.id === item.id)

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

  const hasProductInShoppingCart = cart.length !== 0

  return (
    <Container>
      <ClientInfoForm />
      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          {!hasProductInShoppingCart ? (
            <NoItens />
          ) : (
            <>
              {coffeesInCart.map((coffee) => (
                <Fragment key={coffee.id}>
                  <Coffee>
                    <div>
                      <img src={coffee.image} alt={coffee.title} />

                      <div>
                        <span>{coffee.title}</span>

                        <CoffeeInfo>
                          <QuantityInput
                            quantity={coffee.quantity}
                            incrementQuantity={() =>
                              handleItemIncrement(coffee.id)
                            }
                            decrementQuantity={() =>
                              handleItemDecrement(coffee.id)
                            }
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

                  <span />
                </Fragment>
              ))}
            </>
          )}

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </CartTotalInfo>

          <CheckoutButton
            type="submit"
            form="order"
            disabled={!hasProductInShoppingCart}
          >
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
