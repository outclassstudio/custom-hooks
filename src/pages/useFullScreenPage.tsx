import styled from "styled-components"
import { useFullScreen } from "../hooks/useFullScreen"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseFullScreenPage = () => {
  const { element, triggerFull, exitFull, isFull } = useFullScreen()

  return (
    <UseFullScreenPageContainer>
      <Title>useFullScreen</Title>
      <ImageWrapper ref={element}>
        <Image src="https://newsimg.sedaily.com/2022/10/12/26CBKL2SWJ_1.jpg" alt=""/>
        {isFull ? 
        <button onClick={exitFull}>Exit fullscreen</button> : <button onClick={triggerFull}>Make fullscreen</button>}
      </ImageWrapper>
    </UseFullScreenPageContainer>
  )
}

export default UseFullScreenPage

const UseFullScreenPageContainer = styled(FlexColumnDivCentered)`
  gap: 15px;
`
const ImageWrapper = styled(FlexColumnDivCentered)`
  gap: 15px;
`
const Image = styled.img`
  width: 70%;
`