import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors['brown-400']};
  outline: 0;
  background: ${(props) => props.theme.colors['brown-300']};

  transition: box-shadow 0.5s;

  &[data-state='focused'] {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors['yellow-dark']};
  }

  &[data-state='blurred'] {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors['brown-300']};
  }

  input {
    color: ${(props) => props.theme.colors['brown-700']};
    width: 100%;
    background-color: transparent;
    border: 0;
    padding: 12px;
    outline: 0;

    border-radius: 4px;

    &::placeholder {
      color: ${(props) => props.theme.colors['brown-600']};
    }
  }

  span {
    color: ${(props) => props.theme.colors['brown-600']};
    padding-right: 12px;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
