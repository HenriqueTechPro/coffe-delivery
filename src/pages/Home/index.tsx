import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import { Card } from '../../components/Card'

import {
  CoffeeList,
  Heading,
  Hero,
  HeroContent,
  IconWrapper,
  Info,
  ListItem,
} from './styles'
import { coffees } from '../../../data.json'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <>
                <ListItem>
                  <IconWrapper>
                    <ShoppingCart
                      size={32}
                      weight="fill"
                      style={{ backgroundColor: theme.colors['yellow-dark'] }}
                    />
                  </IconWrapper>
                  Compra simples e segura
                </ListItem>
                <ListItem>
                  <IconWrapper>
                    <Package
                      size={32}
                      weight="fill"
                      style={{ backgroundColor: theme.colors['brown-900'] }}
                    />
                  </IconWrapper>
                  Embalagem mantém o café intacto
                </ListItem>

                <ListItem>
                  <IconWrapper>
                    <Timer
                      size={32}
                      weight="fill"
                      style={{ backgroundColor: theme.colors.yellow }}
                    />
                  </IconWrapper>
                  Entrega rápida e rastreada
                </ListItem>
                <ListItem>
                  <IconWrapper>
                    <Coffee
                      size={32}
                      weight="fill"
                      style={{ backgroundColor: theme.colors.purple }}
                    />
                  </IconWrapper>
                  O café chega fresquinho até você
                </ListItem>
              </>
            </Info>
          </div>

          <img src="src/assets/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>

        <img src="src/assets/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
