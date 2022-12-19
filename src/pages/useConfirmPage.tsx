import { Link } from "react-router-dom"
import styled from "styled-components"
import { useConfirm } from "../hooks/useConfirm"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseConfirmPage = () => {
  const deleteWorld = () => console.log("delete world")
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)

  return (
  <UseConfirmContainer>
    <Title>useConfirm</Title>
    <button onClick={confirmDelete}>Delete the world</button>
    <Link to="/">홈으로</Link>
  </UseConfirmContainer>
  )
}

export default UseConfirmPage

const UseConfirmContainer = styled(FlexColumnDivCentered)`
  gap: 10px;
  height: 100vh;
`