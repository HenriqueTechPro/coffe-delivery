import styled from 'styled-components'
import BannerBackground from '../../assets/banner-bg.svg'
import { fonts } from '../../styles/themes/default'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BannerBackground});
  background-size: cover;
`

export const BannerSection = styled.section`
  width: 100%;
  max-width: 90rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
  flex-shrink: 0;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const BannerTitle = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: stretch;

  h1 {
    ${fonts.titleXL};
    color: ${(props) => props.theme['base-title']};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemList = styled.ul`
  grid-column: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  list-style: none;
  gap: 1.25rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${fonts.textM};
  color: ${(props) => props.theme['base-text']};
`

interface IconsProps {
  variant?: 'yellow-dark' | 'yellow' | 'black' | 'purple'
}

export const IconWrapper = styled.span<IconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 50%;
  background: ${(props) =>
    props.variant === 'yellow-dark'
      ? props.theme['yellow-dark']
      : props.variant === 'yellow'
        ? props.theme.yellow
        : props.variant === 'black'
          ? props.theme['base-title']
          : props.variant === 'purple'
            ? props.theme.purple
            : props.theme['base-title']};

  svg {
    color: ${(props) => props.theme.white};
  }
`
