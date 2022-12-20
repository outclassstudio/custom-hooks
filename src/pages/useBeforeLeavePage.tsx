import { Link } from "react-router-dom"
import styled from "styled-components"
import { useBeforeLeave } from "../hooks/useBeforeLeave"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseBeforeLeavePage = () => {
  const begForLife = () => console.log("please dont leave")
  useBeforeLeave(begForLife)

  return (
    <UseBeforeLeaveContainer>
      <Title>useBeforeLeave</Title>
      <Link to="/">홈으로</Link>
    </UseBeforeLeaveContainer>
  )
}

export default UseBeforeLeavePage

const UseBeforeLeaveContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`