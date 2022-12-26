import styled from "styled-components"

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.black};
`


function HomePage(){
  return(
    <StyledDiv>
      funcionando...
    </StyledDiv>
  )
}

export default HomePage