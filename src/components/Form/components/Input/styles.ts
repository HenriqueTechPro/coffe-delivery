import styled from 'styled-components'
import { fonts } from '../../../../styles/themes/default'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 0 1px ${(props) => props.theme['base-button']};
  border-radius: 4px;
  outline: 0;

  background: ${(props) => props.theme['base-input']};
  transition: box-shadow 0.5s;

  &[data-state='focused'] {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  &[data-state='blurred'] {
    box-shadow: 0 0 0 1px ${(props) => props.theme['base-input']};
  }

  input {
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 12px;
    border-radius: 4px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  span {
    color: ${(props) => props.theme['base-label']};
    padding-right: 12px;
    ${fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${fonts.textXS};
  font-weight: 400;
  color: red;
`
