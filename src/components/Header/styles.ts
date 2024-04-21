import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  background: ${(props) => props.theme.colors['brown-100']};
  z-index: 9999;
`

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${(props) => props.theme.colors['purple-light']};

    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    span {
      color: ${(props) => props.theme.colors['purple-dark']};
    }

    padding: 10px 8px;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.white
          : props.theme.colors['purple-light']};
      background: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors['yellow-dark']
          : props.theme.colors.white};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
export const LocationBadge = styled.span`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['purple-dark']};

  background: ${(props) => props.theme.colors['purple-light']};

  svg {
    color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.purple
        : props.theme.colors.white};
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const HomeButton = styled(Button)`
  color: ${(props) => props.theme.colors['purple-dark']};
  background: ${(props) => props.theme.colors['purple-light']};
`
