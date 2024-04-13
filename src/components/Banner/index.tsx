import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BannerImage from '../../assets/imagem-banner.svg'
import {
  BannerSection,
  BannerContainer,
  BannerContent,
  IconWrapper,
  ListItem,
  ItemList,
  BannerTitle,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerSection>
        <BannerContent>
          <BannerTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </BannerTitle>

          <ItemList>
            <ListItem>
              <IconWrapper variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </IconWrapper>
              Compra simples e segura
            </ListItem>
            <ListItem>
              <IconWrapper variant="black">
                <Package size={16} weight="fill" />
              </IconWrapper>
              Embalagem mantém o café intacto
            </ListItem>

            <ListItem>
              <IconWrapper variant="yellow">
                <Timer size={16} weight="fill" />
              </IconWrapper>
              Entrega rápida e rastreada
            </ListItem>
            <ListItem>
              <IconWrapper variant="purple">
                <Coffee size={16} weight="fill" />
              </IconWrapper>
              O café chega fresquinho até você
            </ListItem>
          </ItemList>
        </BannerContent>
        <img src={BannerImage} alt="" />
      </BannerSection>
    </BannerContainer>
  )
}
