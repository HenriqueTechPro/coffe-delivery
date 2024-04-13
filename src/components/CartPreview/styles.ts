import styled from 'styled-components'
import { fonts } from '../../styles/themes/default'

export const PreviwerContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-card']};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  width: 100%;
  min-width: 28rem;
`
export const Coffee = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background: ${(props) => props.theme['base-button']};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  > div {
    display: flex;
    padding: 0.5rem 0.25rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;
    align-self: stretch;

    padding: 0.25rem 0.5rem;
    flex-direction: column;
    font-weight: bold;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
  border: none;
`
export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      ${fonts.textS};
    }
  }

  div:last-child {
    span {
      ${fonts.textL};
      font-weight: bold;
    }
  }
`
