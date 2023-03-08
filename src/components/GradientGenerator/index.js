import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  ColorInput,
  ColorInputContainers,
  GenerateButton,
  BgContainer,
  UlListContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {firstColor: '#8ae323', secondColor: '#014f7b', direction: 'Top'}

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  directionFunction = selected => {
    this.setState({direction: selected})
  }

  render() {
    const {firstColor, secondColor, direction} = this.state
    return (
      <BgContainer
        firstColor={firstColor}
        secondColor={secondColor}
        direction={direction}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <UlListContainer>
          {gradientDirectionsList.map(eachItem => (
            <li key={eachItem.directionId}>
              <GradientDirectionItem
                eachItem={eachItem}
                directionFunction={this.directionFunction}
                direction={direction}
              />
            </li>
          ))}
        </UlListContainer>
        <p>Pick the Colors</p>
        <ColorInputContainers>
          <ColorInput>
            <label htmlFor="firstcolor">{firstColor}</label>
            <input
              type="color"
              id="firstcolor"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </ColorInput>
          <ColorInput>
            <label htmlFor="secondColor">{secondColor}</label>
            <input
              type="color"
              id="secondColor"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </ColorInput>
        </ColorInputContainers>
        <GenerateButton>Generate</GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
