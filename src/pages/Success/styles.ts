import styled from 'styled-components'
import { fonts } from '../../styles/themes/default'

export const Container = styled.main`
  display: flex;
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;

  img {
    margin-bottom: -0.8125rem;
  }
`

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    ${fonts.titleL};
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    ${fonts.textL};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 0.375rem 2.25rem;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
`

export const InfoContent = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`

interface IconsProps {
  variant?: 'yellow-dark' | 'yellow' | 'purple'
}

export const Icons = styled.div<IconsProps>`
  > svg {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'yellow-dark'
        ? props.theme['yellow-dark']
        : props.variant === 'yellow'
          ? props.theme.yellow
          : props.variant === 'purple'
            ? props.theme.purple
            : props.theme['yellow-dark']};
    padding: 0.5rem;
    border-radius: 50%;
  }
`
