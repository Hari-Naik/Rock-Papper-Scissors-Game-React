import {ListItem, Button, Image} from './styledComponents'

const GameItem = props => {
  const {eachItem, onClickGameButton} = props
  const {id, imageUrl} = eachItem

  const onClickButton = () => {
    onClickGameButton(eachItem)
  }

  const testid = id.toLowerCase()

  return (
    <ListItem>
      <Button
        type="button"
        onClick={onClickButton}
        data-testid={`${testid}Button`}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}

export default GameItem
