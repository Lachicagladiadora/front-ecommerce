import { SecondaryButtonStyle } from './styles/SecondaryButtonStyle'

interface Props {
  children: string
  onClick: () => void
}

export const SecondaryButton = ({ children, onClick }: Props): JSX.Element => {
  return (
  <SecondaryButtonStyle onClick={onClick}>{children}</SecondaryButtonStyle>
  )
}
