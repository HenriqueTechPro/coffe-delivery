import styled from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { mixins } from '../../../styles/mixins'

export const PaymentContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme.colors['brown-200']};

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['brown-700']};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['brown-800']};
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
  gap: 0.75rem;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme.colors['brown-400']};
  color: ${(props) => props.theme.colors['brown-700']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors['brown-500']
        : props.theme.colors['brown-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    box-shadow: 0 0 0 1px
      ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.purple
          : props.theme.colors['purple-dark']};
    background: ${(props) =>
      props.variant === 'credit'
        ? props.theme.colors['purple-light']
        : props.variant === 'debit'
          ? props.theme.colors['purple-light']
          : props.variant === 'cash'
            ? props.theme.colors['purple-light']
            : props.theme.colors['brown-900']}; // 'yellow-dark' é a cor padrão
  }

  svg {
    color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.purple
        : props.theme.colors['purple-dark']};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`

export const PaymentErrorMessage = styled.p`
  width: 100%;
  ${mixins.fonts.textS}
  color: red;
`
