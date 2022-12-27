import styled from "styled-components"
import BackgroundImage from "../src/components/layout/backgroundImageWithChildren/BackgroundImage"

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.black};
  min-width: 500px;

  @media (max-width: 500px){
    min-width: 100%;
  }
`


function HomePage(){
  return(
    <BackgroundImage>
      <StyledDiv>
        funcionando...
      </StyledDiv>
    </BackgroundImage>
  )
}

export default HomePage