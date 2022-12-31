import styled from "styled-components"
import Navbar from "../../../src/components/navbar/Navbar"
import Container from "../../../src/components/layout/container/Container"


const Body = styled.div`
  background-color: ${props => props.theme.colors.grey};
  min-height: calc(100vh - 200px);
`


const Content = styled.div`
  padding: 80px 0;
`

const Text = styled.p`
  font-size: 20px;
`

const CityName = styled.h2`
  font-size: 60px;
`


function InfoPage(){
  return(
    <>
      <Navbar/>
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para</Text>
            <CityName>Curitiba,PR,Brasil</CityName>
          </Content>
        </Container>
      </Body>
    </>
  )
}

export default InfoPage