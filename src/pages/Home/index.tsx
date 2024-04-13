import { Banner } from '../../components/Banner'
import { Catalog } from '../../components/Catolog'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <Container>
        <Catalog />
      </Container>
    </>
  )
}
