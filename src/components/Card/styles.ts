import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors['brown-200']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 2.25rem;

  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  text-align: center;

  flex-shrink: 0;
`

export const CoffeeImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;

  color: ${(props) => props.theme.colors['brown-800']};
  ${mixins.fonts.titleS}
`

export const Description = styled.span`
  margin-top: 0.5rem;
  width: 100%;

  color: ${(props) => props.theme.colors['brown-600']};
  ${mixins.fonts.textS}
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme.colors['brown-700']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme.colors['brown-700']};
  }
`

export const Order = styled.div<{ $itemAdded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  > button {
    background: ${(props) =>
      props.$itemAdded
        ? props.theme.colors['yellow-dark']
        : props.theme.colors['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;

    cursor: pointer;

    & svg {
      color: ${(props) => props.theme.colors['brown-100']};
    }

    &:hover {
      background: ${(props) =>
        props.$itemAdded
          ? props.theme.colors.yellow
          : props.theme.colors.purple};
    }
  }
`
