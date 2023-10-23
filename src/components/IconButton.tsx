import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButtonStyle, TextButton } from './styles/IconButtonStyle'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface Props {
  icon: IconDefinition
  text?: string
  onClick: () => void
}

export const IconButton = ({ onClick, icon, text }: Props): JSX.Element => {
  return (
  <IconButtonStyle onClick={onClick}>
    {
      <>
        <TextButton>{text}</TextButton>
        <FontAwesomeIcon icon={icon} />
      </>
    }
  </IconButtonStyle>
  )
}
