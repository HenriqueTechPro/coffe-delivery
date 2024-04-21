import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors['brown-900']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['brown-800']}
  }
`

export const Info = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['brown-800']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${mixins.fonts.textM};
  color: ${(props) => props.theme.colors['brown-700']};
`

interface IconsProps {
  variant?: 'yellow-dark' | 'yellow' | 'black' | 'purple'
}

export const IconWrapper = styled.span<IconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    padding: 8px;
    border-radius: 999px;
  }

  > svg {
    color: ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.white
        : props.theme.colors.black};
  }
`
