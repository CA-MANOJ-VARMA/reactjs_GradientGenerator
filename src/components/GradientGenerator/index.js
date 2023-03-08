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
  state = {
    firstColor: '#8ae323',
    firstColorApplied: '#8ae323',
    secondColorApplied: '#014f7b',
    secondColor: '#014f7b',
    direction: 'top',
    directionApplied: 'top',
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  directionFunction = selected => {
    this.setState({direction: selected})
  }

  generateFunction = () => {
    const {firstColor, secondColor, direction} = this.state
    this.setState({
      firstColorApplied: firstColor,
      secondColorApplied: secondColor,
      directionApplied: direction,
    })
  }

  render() {
    const {
      firstColor,
      firstColorApplied,
      secondColor,
      secondColorApplied,
      direction,
      directionApplied,
    } = this.state
    console.log(firstColorApplied, secondColorApplied)
    return (
      <BgContainer
        firstColor={firstColorApplied}
        secondColor={secondColorApplied}
        direction={directionApplied}
        data-testid="gradientGenerator"
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
            <label htmlFor="firstcolor">
              <p>{firstColor}</p>
            </label>
            <input
              type="color"
              id="firstcolor"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </ColorInput>
          <ColorInput>
            <label htmlFor="secondColor">
              <p>{secondColor}</p>
            </label>
            <input
              type="color"
              id="secondColor"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </ColorInput>
        </ColorInputContainers>
        <GenerateButton onClick={this.generateFunction}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
