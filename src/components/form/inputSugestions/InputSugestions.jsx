import styled from "styled-components"
import Input from "../input/Input"

const SugestionsContainer = styled.div`
  margin-top: 10px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

const Sugestions = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover{
    background-color: #ececec;
  }
`

function InputSugestions({sugestions,...props}){
  return(
    <>
      <Input {...props}/>
      <SugestionsContainer>
        {
          sugestions.map((suges,pos) => 
            <Sugestions key={`suggestion-${pos}`} onClick={suges.onClick}>
              {suges.text}
            </Sugestions>
          )
        }
      </SugestionsContainer>
    </>
  )
}

InputSugestions.defaultProps = {
  sugestions: [
    {text:"Sugestão",onClick: () => {} },
    {text:"Sugestão2",onClick: () => {} }
  ]
}

export default InputSugestions