import styled from 'styled-components'
import { fonts } from '../../styles/themes/default'

export const CatalogContainer = styled.main`
  display: flex;
  max-width: 90rem;
  padding: 2rem 10rem 10rem 10rem;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 3.375rem;
`
export const CatalogHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme['base-subtitle']};
  ${fonts.titleL}
`

export const CatalogList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
`
