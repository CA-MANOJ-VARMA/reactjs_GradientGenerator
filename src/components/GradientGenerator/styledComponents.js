// Style your elements here
import styled from 'styled-components'

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
