import { OrderCard } from '../../components/Card/OrderCard'
import { PaymentForm } from '../../components/Form'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <PaymentForm />
      <OrderCard />
    </Container>
  )
}
