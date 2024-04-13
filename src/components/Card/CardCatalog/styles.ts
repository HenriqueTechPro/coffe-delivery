import styled from 'styled-components'
import { fonts } from '../../../styles/themes/default'

export const CatalogCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme['base-card']};

  flex-shrink: 0;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const CatalogCardType = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
`
export const CatalagoCardTags = styled.span`
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.5625rem;
  font-family: Roboto;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CatalogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  gap: 0.75rem;
`
export const CatalogCardContentTitle = styled.h4`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;

  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
`

export const CatalogCardDescrition = styled.p`
  color: ${(props) => props.theme['base-label']};
  text-align: center;

  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`
export const CatalogCardControl = styled.footer`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 2.0625rem;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
`

export const CatalogOrder = styled.div<{ $itemAdded?: boolean }>`
  display: flex;

  gap: 0.5rem;

  > button {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    border-radius: 6px;
    background: ${(props) =>
      props.$itemAdded
        ? props.theme['yellow-dark']
        : props.theme['purple-dark']};

    cursor: pointer;

    & svg {
      color: ${(props) => props.theme['base-card']};
    }

    &:hover {
      background: ${(props) =>
        props.$itemAdded ? props.theme.yellow : props.theme.purple};
    }
  }
`

export const CatalogCardPrice = styled.p`
  color: ${(props) => props.theme['base-text']};
  text-align: right;
  ${fonts.textS}

  & span {
    color: ${(props) => props.theme['base-text']};
    ${fonts.titleM}
  }
`
