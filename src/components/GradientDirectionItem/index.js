// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, directionFunction, direction} = props
  console.log('hrloo')
  console.log(direction)
  console.log(eachItem.value)
  console.log(direction === eachItem.value)
  const onClickDirectionFunction = value => {
    directionFunction(value)
  }

  return (
    <DirectionButton
      onClick={() => onClickDirectionFunction(eachItem.value)}
      direction={direction === eachItem.value}
    >
      {eachItem.displayText}
    </DirectionButton>
  )
}

export default GradientDirectionItem
