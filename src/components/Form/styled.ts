import styled from 'styled-components'
import { fonts } from '../../styles/themes/default'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & span {
    color: ${(props) => props.theme['base-subtitle']};
    ${fonts.titleXS}
  }
`

export const CheckoutForm = styled.form`
  display: flex;
  padding: 40px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CheckoutFormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      ${fonts.textM};
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      ${fonts.textS};
      color: ${(props) => props.theme['base-text']};
    }
  }
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CheckoutAddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
export const PaymentContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    ${fonts.textS}
    color: ${(props) => props.theme['base-text']};
  }

  span {
    ${fonts.textM}
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface PaymentTypeButtonProps {
  variant: 'credit' | 'debit' | 'cash'
}

export const PaymentTypeButton = styled(
  RadioGroup.Item,
)<PaymentTypeButtonProps>`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  ${fonts.buttonM};
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
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

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    > svg {
      color: ${(props) => props.theme.purple};
    }

    > span {
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
    }

    span:last-child {
    }
  }

  div:last-child {
    span {
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  border-radius: 6px;
`

export const PaymentErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`
