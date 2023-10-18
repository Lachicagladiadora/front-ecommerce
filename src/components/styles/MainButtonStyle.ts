import { styled } from 'styled-components'
export const MainButtonStyle = styled.button`
width: 260px;
color: #231300;
height: 33px;
font-size: 12px;
padding: 4px;
border-radius: 6px;
background-color: #F2E307;
outline: none;
border: none;
cursor: pointer;
box-shadow: 4px 4px 10px #594839;
&:active{
  box-shadow: 0px 0px 0px;
}
@media screen and (min-width: 1080px){
  width: 260px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 5px 5px 10px #231300;
  &:hover{
    background-color: #F2CB05;
  }
}

`
