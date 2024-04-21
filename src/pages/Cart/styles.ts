import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme.colors['brown-800']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['brown-200']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const AddressContainer = styled(FormsContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme.colors['brown-800']};
    }

    p {
      ${mixins.fonts.textS};
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
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
    background-color: ${(props) => props.theme.colors['brown-400']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors['brown-500']
          : props.theme.colors['brown-300']};
    }

    > svg {
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.purple
          : props.theme.colors['brown-900']};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors['brown-700']};
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.colors['brown-200']};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme.colors['brown-400']};
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
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  width: 100%;

  ${mixins.fonts.buttonG};

  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors['yellow-dark']
        : props.theme.colors['yellow-light']};
  }

  &:disabled {
    background: ${(props) => props.theme.colors['brown-400']};
    cursor: not-allowed;
  }
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
