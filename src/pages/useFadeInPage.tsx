import { Link } from "react-router-dom"
import styled from "styled-components"
import { useFadeIn } from "../hooks/useFadeIn"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseFadeinPage = () => {
  const fadeInA = useFadeIn(3, 0)
  const fadeInB = useFadeIn(3, 1)

  return (
    <UseFadeInPageContainer>
      <Title>useFadeIn</Title>
      <div {...fadeInA}>첫눈처럼</div>
      <div {...fadeInB}>너에게 가겠다</div>
      <Link to="/">홈으로</Link>
    </UseFadeInPageContainer>
  )
}

export default UseFadeinPage

const UseFadeInPageContainer = styled(FlexColumnDivCentered)`
  gap: 10px;
  height: 100vh;
`