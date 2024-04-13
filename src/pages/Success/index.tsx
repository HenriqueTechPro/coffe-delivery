import { useParams } from 'react-router-dom'
import Delivery from '../../assets/delivery.svg'
import { Container, Heading, Icons, Info, InfoContent, Order } from './styles'
import { useContext } from 'react'
import { CheckoutContext } from '../../context/CheckoutContext'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const { orders } = useContext(CheckoutContext)
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  // const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <Icons variant="purple">
                <MapPin size={32} weight="fill" />
              </Icons>

              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Icons variant="yellow">
                <Timer weight="fill" size={32} />
              </Icons>

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <Icons variant="yellow-dark">
                <CurrencyDollar size={32} weight="fill" />
              </Icons>

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src={Delivery} alt="Pedido concluído" />
    </Container>
  )
}
