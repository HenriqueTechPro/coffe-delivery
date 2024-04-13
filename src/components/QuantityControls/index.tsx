import { Minus, Plus } from 'phosphor-react'
import { Quantity, QuantityButton, QuantityContainer } from './styles'

type Props = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityControls({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <QuantityContainer>
      <QuantityButton onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </QuantityButton>
      <Quantity>{quantity}</Quantity>
      <QuantityButton onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </QuantityButton>
    </QuantityContainer>
  )
}
