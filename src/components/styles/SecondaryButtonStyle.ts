import { styled } from 'styled-components'
import { COLORS } from '../../constants'

export const SecondaryButtonStyle = styled.button`
color: ${COLORS.MUSTARD_HUE};
font-size: 12px;
padding: 2px 14px;
background-color: ${COLORS.ASH_BROWN};
border-radius: 6px;
outline: none;
border: none;
cursor: pointer;
text-transform: uppercase;
&:active{
  box-shadow: 0px 0px 0px;
}
@media screen and (min-width: 1080px){
  font-size: 14px;
  border-radius: 8px;
  padding: 4px 18px;
  &:hover{
    background-color: ${COLORS.MUSTARD_HUE};
    color: ${COLORS.ASH_BROWN};
  }
}

`
