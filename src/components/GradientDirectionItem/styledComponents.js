// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: white;
  color: blue;
  border-radius: 11px;
  border-width: 0;
  gap: 20px;
  width: 70px;
  height: 30px;
  :hover {
    cursor: pointer;
  }
  opacity: ${props => (props.direction ? '1' : '0.5')};
`
