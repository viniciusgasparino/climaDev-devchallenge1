import styled from "styled-components"
import BackgroundImage from "../src/components/layout/backgroundImageWithChildren/BackgroundImage"

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.black};
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