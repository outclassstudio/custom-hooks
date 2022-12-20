import styled from "styled-components"
import { useNetwork } from "../hooks/useNetwork"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseNetworkPage = () => {
  const handleNetworkChange = (online:boolean) => {
    console.log(online ? "online" : "offline")
  }
  const online = useNetwork(handleNetworkChange)

  return (
    <UseNetworkPageContainer>
      <Title>useNetwork</Title>
      <div>{online ? "online" : "offline"}</div>
    </UseNetworkPageContainer>
  )
}

export default UseNetworkPage

const UseNetworkPageContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap:10px;
`