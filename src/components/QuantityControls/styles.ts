import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;

  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`
export const QuantityButton = styled.button`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  border: 0;

  cursor: pointer;

  & svg {
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
export const Quantity = styled.span`
  text-align: center;

  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;

  color: ${(props) => props.theme['base-title']};
`
