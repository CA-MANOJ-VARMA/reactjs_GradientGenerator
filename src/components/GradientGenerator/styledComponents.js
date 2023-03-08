// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
`

export const ColorInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const ColorInputContainers = styled.div`
  display: flex;
  gap: 30px;
`
export const GenerateButton = styled.button`
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border-width: 0;
  gap: 20px;
  width: 70px;
  height: 30px;
  :hover {
    cursor: pointer;
  }
`
export const UlListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
`
