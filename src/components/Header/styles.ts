import styled from 'styled-components'
import { fonts } from '../../styles/themes/default'
import * as Popover from '@radix-ui/react-popover'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 90rem;
  padding: 2rem 10rem;
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.background};
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 0.75rem;

  p {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;

    gap: 0.25rem;

    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};

    color: ${(props) => props.theme['purple-dark']};

    ${fonts.textS}

    & svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
export const CartButton = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;

  a {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border: 0;

    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};

    & svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &[aria-disabled='true'] {
      pointer-events: none;
    }
  }

  span {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    right: -8.345px;
    top: -8px;

    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};

    flex-shrink: 0;

    color: ${(props) => props.theme.white};

    ${fonts.textXS}
    letter-spacing: -0.74px;
  }
`
export const PreviwerContainer = styled(Popover.Root)``
export const PreviwerCartButton = styled(Popover.Trigger)`
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};

  cursor: pointer;
`
export const PreviwerContent = styled(Popover.Content)`
  transform-origin: var(--radix-popover-content-transform-origin);
  animation: scaleIn 0.3s ease-out;

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`
