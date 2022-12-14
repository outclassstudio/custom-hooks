import styled from "styled-components"
import useInput from "../hooks/useInput"
import { FlexColumnDivCentered, Title } from "../style/utility.style"
import { Link } from "react-router-dom"

const UseInputPage = () => {
  const maxLen = (value:string) => value.length <= 10
  const name = useInput("Mr", maxLen)

  return(
    <UseInputContainer>
      <Title>useInput</Title>
      <Input placeholder="Name" {...name}/>
      <Link to="/">홈으로</Link>
    </UseInputContainer>
  )
}

export default UseInputPage

const UseInputContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`
const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
`