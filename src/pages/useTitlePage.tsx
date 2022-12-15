import { Link } from "react-router-dom"
import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseTitlePage = () => {
  const titleUpdater = useTitle("Loading...")

  setTimeout(() => {
    titleUpdater("Update!")
  }, 5000)

  return(
    <UseTitleContainer>
      <Title>useTitle</Title>
      상단 title을 확인해주세요
      <Link to="/">홈으로</Link>
    </UseTitleContainer>
  )
}

export default UseTitlePage

const UseTitleContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`