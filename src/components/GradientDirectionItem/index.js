// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, directionFunction, direction} = props
  console.log('hrloo')
  console.log(direction)
  console.log(eachItem.displayText)
  console.log(direction === eachItem.displayText)
  const onClickDirectionFunction = value => {
    directionFunction(value)
  }

  return (
    <DirectionButton
      onClick={() => onClickDirectionFunction(eachItem.displayText)}
      direction={direction === eachItem.displayText}
    >
      {eachItem.displayText}
    </DirectionButton>
  )
}

export default GradientDirectionItem
