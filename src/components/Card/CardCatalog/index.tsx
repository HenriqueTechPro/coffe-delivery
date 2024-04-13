import { Check, ShoppingCart } from 'phosphor-react'
import { QuantityControls } from '../../QuantityControls'
import { useContext, useEffect, useState } from 'react'

import {
  CatalagoCardTags,
  CatalogCardContainer,
  CatalogCardContent,
  CatalogCardContentTitle,
  CatalogCardControl,
  CatalogCardDescrition,
  CatalogCardPrice,
  CatalogCardType,
  CatalogOrder,
} from './styles'
import { CheckoutContext } from '../../../context/CheckoutContext'

interface Props {
  coffee: {
    id: string
    image: string
    title: string
    description: string
    type: string[]
    price: number
  }
}

export function CardList({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useContext(CheckoutContext)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CatalogCardContainer>
      <img src={coffee.image} alt={coffee.title} />

      <CatalogCardType>
        {coffee.type.map((tag) => (
          <CatalagoCardTags key={tag}>{tag}</CatalagoCardTags>
        ))}
      </CatalogCardType>
      <CatalogCardContent>
        <CatalogCardContentTitle>{coffee.title}</CatalogCardContentTitle>
        <CatalogCardDescrition>{coffee.description}</CatalogCardDescrition>
      </CatalogCardContent>

      <CatalogCardControl>
        <CatalogCardPrice>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </CatalogCardPrice>
        <CatalogOrder $itemAdded={isItemAdded}>
          <QuantityControls
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <button onClick={handleAddItem} disabled={isItemAdded}>
            {isItemAdded ? (
              <Check weight="fill" size={22} />
            ) : (
              <ShoppingCart size={22} />
            )}
          </button>
        </CatalogOrder>
      </CatalogCardControl>
    </CatalogCardContainer>
  )
}
