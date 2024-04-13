import { MapPin, ShoppingCart } from 'phosphor-react'
import CoffeeDeliveryLogo from '../../assets/logo-coffee-delivery.svg'
import {
  CartButton,
  Container,
  Content,
  HeaderContainer,
  PreviwerCartButton,
  PreviwerContainer,
  PreviwerContent,
} from './styles'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../context/CheckoutContext'
import * as Popover from '@radix-ui/react-popover'
import { CartPreview } from '../CartPreview'

export function Header() {
  const { cart } = useContext(CheckoutContext)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Container>
      <HeaderContainer>
        <Link to={'/'}>
          <img src={CoffeeDeliveryLogo} alt="Coffee Delivery" />
        </Link>

        <Content>
          <p>
            <span className="map-pin-icon">
              <MapPin size={22} weight="fill" />
            </span>
            Porto Alegre, RS
          </p>
          <PreviwerContainer open={isHovered} onOpenChange={setIsHovered}>
            <Popover.Anchor asChild>
              <PreviwerCartButton
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CartButton>
                  <Link to={'/checkout'} aria-disabled={cart.length === 0}>
                    <ShoppingCart size={22} weight="fill" />
                    {cart.length > 0 ? <span>{cart.length}</span> : null}
                  </Link>
                </CartButton>
              </PreviwerCartButton>
            </Popover.Anchor>
            <PreviwerContent className="PopoverContent" sideOffset={4}>
              <div>
                <CartPreview />
              </div>
            </PreviwerContent>
          </PreviwerContainer>
        </Content>
      </HeaderContainer>
    </Container>
  )
}
