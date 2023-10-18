import { MainButtonStyle } from './styles/MainButtonStyle'

interface Props {
  children: string
  onClick: () => void
}

export const MainButton = ({ children, onClick }: Props): JSX.Element => {
  return (
  <MainButtonStyle onClick={onClick}>{children}</MainButtonStyle>
  )
}
