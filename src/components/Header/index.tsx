import { House, MapPin, Moon, ShoppingCart, Sun } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { Aside, Container, HomeButton, LocationBadge } from './styles'

import DarkLogoCoffeeDelivery from '../../assets/logo-coffee-delivery-dark.svg'
import LightLogoCoffeeDelivery from '../../assets/logo-coffee-delivery-light.svg'
import { useSwitchTheme } from '../../hooks/useSwitchTheme'
export function Header() {
  const { cart } = useCart()
  const navigate = useNavigate()
  const { toggleTheme, themeSelected } = useSwitchTheme()

  function handleToggleTheme() {
    toggleTheme(themeSelected === 'light' ? 'dark' : 'light')
  }

  return (
    <Container>
      <Link to="/">
        <img
          src={
            themeSelected === 'light'
              ? DarkLogoCoffeeDelivery
              : LightLogoCoffeeDelivery
          }
          alt="Coffee Delivery"
        />
      </Link>

      <Aside>
        <LocationBadge>
          <MapPin size={22} weight="fill" />
          <span>Lauro de Freitas, BA</span>
        </LocationBadge>

        <HomeButton onClick={handleToggleTheme} title="Trocar tema">
          {themeSelected === 'light' ? (
            <Moon size={18} weight="bold" />
          ) : (
            <Sun size={18} weight="bold" />
          )}
        </HomeButton>

        <HomeButton onClick={() => navigate('/')} title="Home">
          <House size={18} weight="bold" />
        </HomeButton>

        <Link to={`/checkout`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}
