import styled from 'styled-components'
import { fonts } from '../../styles/themes/default'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const PaymentContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
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
  gap: 0.75rem;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  ${fonts.buttonM};
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) =>
      props.variant === 'credit'
        ? props.theme['purple-light']
        : props.variant === 'debit'
          ? props.theme['purple-light']
          : props.variant === 'cash'
            ? props.theme['purple-light']
            : props.theme['base-title']}; // 'yellow-dark' é a cor padrão
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

export const PaymentErrorMessage = styled.p`
  ${fonts.textS}
  color: red;
`
