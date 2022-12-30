import styled from "styled-components"
import BackgroundImage from "../src/components/layout/backgroundImageWithChildren/BackgroundImage"
import Logo from "../src/components/logo/Logo"
import SearchCity from "../src/components/searchCity/SearchCity"


const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px){
    min-width: 100%;
  }
`

const InputContainer = styled.div`
  @media (min-width: 750px) {
    width: 150%;
  } 
  z-index: 100;
`

const StyledInput = styled(SearchCity)`
  width: 100%;
`


function HomePage(){
  return(
    <BackgroundImage>
      <StyledDiv>
        <Logo showImage type="vertical"/>    
        <InputContainer>
          <StyledInput />  
        </InputContainer>   
      </StyledDiv>
    </BackgroundImage>
  )
}

export default HomePage