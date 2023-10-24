import { styled } from 'styled-components'
import { COLORS } from '../../constants'

export const IconButtonStyle = styled.button`
color: ${COLORS.DARK};
font-size: 16px;
padding: 6px;
background-color: transparent;
border-radius: 6px;
outline: none;
border: none;
cursor: pointer;
font-size: 18px;
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
&:active{
  box-shadow: 0px 0px 1px;
}
@media screen and (min-width: 1080px){
  font-size: 22px;
  border-radius: 8px;
  padding: 10px;
  gap: 12px;
  &:hover{
    background-color: transparent;
    color: ${COLORS.ASH_BROWN};
  }
}

`

export const TextButton = styled.span`
  color: ${COLORS.DARK};
  font-size: 12px;
  padding: 0px 4px;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 14px;
  @media screen and (min-width: 1080px){
    font-size: 16px;
    &:hover{
      background-color: transparent;
      color: ${COLORS.ASH_BROWN};
    }
  }
`
