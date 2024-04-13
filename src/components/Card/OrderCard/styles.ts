import styled from 'styled-components'
import { fonts } from '../../../styles/themes/default'

export const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${(props) => props.theme['base-subtitle']};

  & span {
    ${fonts.titleXS}
  }
`

export const Coffee = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  > div {
    display: flex;
    padding: 8px 4px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`
export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
  border: 0;
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    > svg {
      color: ${(props) => props.theme.purple};
    }

    > span {
      ${fonts.buttonM};
      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme['base-button']};
    margin: 24px 0;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${fonts.textS};
    }

    span:last-child {
      ${fonts.textM};
    }
  }

  div:last-child {
    span {
      ${fonts.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;
  border: 0;

  ${fonts.buttonG};
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  border-radius: 6px;
`
