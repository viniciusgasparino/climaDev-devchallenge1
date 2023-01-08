import styled from "styled-components"

const Img = styled.img`
  
`

const VerticalText  = styled.h1`
  font-size: 80px;
  color: ${props => props.theme.colors.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -80px;
  margin-bottom: 40px;
`

const HorizontalText = styled.h1`
  font-size: 40px;
`

const PrimaryColor = styled.span`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`

function Logo({showImage,type}){
  return(
    <div>
      {showImage && <Img src="/woman.svg" />}
      {
        type === "vertical" && 
          <VerticalText>
            Clima <br/> <PrimaryColor>Dev</PrimaryColor>
          </VerticalText>
      }
      {
        type === "Horizontal" && 
          <HorizontalText>
            Clima <PrimaryColor>Dev</PrimaryColor>
          </HorizontalText>
      }
    </div>
  )
}

Logo.defaultProps = {
  type: "Horizontal"
}


export default Logo