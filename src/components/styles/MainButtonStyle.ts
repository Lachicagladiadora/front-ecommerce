import { styled } from 'styled-components'
import { COLORS } from '../../constants'

export const MainButtonStyle = styled.button`
width: 260px;
color: ${COLORS.DARK};
height: 33px;
font-size: 12px;
padding: 4px;
border-radius: 6px;
background-color: ${COLORS.YELLOW};
outline: none;
border: none;
cursor: pointer;
box-shadow: 4px 4px 10px ${COLORS.ASH_BROWN};
&:active{
  box-shadow: 0px 0px 0px;
}
@media screen and (min-width: 1080px){
  width: 260px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 5px 5px 10px ${COLORS.DARK};
  &:hover{
    background-color: ${COLORS.DUCKY_YELLOW};
  }
}

`
