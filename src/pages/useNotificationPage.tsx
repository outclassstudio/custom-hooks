import { Link } from "react-router-dom"
import styled from "styled-components"
import { useNotification } from "../hooks/useNotification"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseNotificationPage = () => {
  const triggerNotif = useNotification("Hi", {body: "hello"})

  return (
    <UseNotificationContainer>
      <Title>useNotification</Title>
      <button onClick={triggerNotif}>trigger!</button>
      <Link to="/">홈으로</Link>
    </UseNotificationContainer>
  )
}

export default UseNotificationPage

const UseNotificationContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`