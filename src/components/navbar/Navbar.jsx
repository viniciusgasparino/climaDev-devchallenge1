import styled from "styled-components"
import Logo from "../logo/Logo"
import Container from "../layout/container/Container"
import {useRouter} from "next/router"


const StyledNavbar = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
`

const StyledLogo = styled.div`
  cursor: pointer;
`


function Navbar(){
  const router = useRouter()

  return(
    <StyledNavbar>
      <Container>
        <StyledLogo  onClick={()=>router.push("/")}>
          <Logo />
        </StyledLogo>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar