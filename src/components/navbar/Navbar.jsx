import styled from "styled-components"
import Logo from "../logo/Logo"
import Container from "../layout/container/Container"


const StyledNavbar = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
`



function Navbar(){
  return(
    <StyledNavbar>
      <Container>
        <Logo/>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar