import { useContext } from 'react'
import { CatalogContainer, CatalogHeader, CatalogList } from './styles'
import { CheckoutContext } from '../../context/CheckoutContext'
import { CardList } from '../Card/CardCatalog'
import { SearchForm } from '../Search'

export function Catalog() {
  const { coffees } = useContext(CheckoutContext)

  return (
    <CatalogContainer>
      <CatalogHeader>
        <h2>Nossos cafés</h2>
        <SearchForm />
      </CatalogHeader>
      <CatalogList>
        {coffees.map((coffees) => (
          <CardList key={coffees.id} coffee={coffees} />
        ))}
      </CatalogList>
    </CatalogContainer>
  )
}
