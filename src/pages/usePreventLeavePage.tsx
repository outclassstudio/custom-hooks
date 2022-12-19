import { Link } from "react-router-dom"
import styled from "styled-components"
import { usePreventLeave } from "../hooks/usePreventLeave"
import { FlexColumnDivCentered, FlexDivCentered, NormalBtn, Title } from "../style/utility.style"

const UsePreventLeavePage = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave()
  return (
    <UsePreventLeaveContainer>
      <Title>usePreventLeave</Title>
      <BtnWrapper>
        <NormalBtn onClick={ enablePrevent }>Protect</NormalBtn>
        <NormalBtn onClick={ disablePrevent }>Unprotect</NormalBtn>
      </BtnWrapper>
      <Link to="/">홈으로</Link>
    </UsePreventLeaveContainer>
  )
}

export default UsePreventLeavePage

const UsePreventLeaveContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`
const BtnWrapper = styled(FlexDivCentered)`
  gap: 5px
`