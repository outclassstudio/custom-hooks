import { Link } from "react-router-dom"
import styled from "styled-components"
import { useClick } from "../hooks/useClick"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseClickPage = () => {
  const sayHello = () => alert("hihi")
  const title = useClick(sayHello)

  return (
    <UseClickContainer>
      <Title>useRef</Title>
      <Button ref={title}>click me!</Button>
      <Link to="/">홈으로</Link>
    </UseClickContainer>
  )
}

export default UseClickPage

const UseClickContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 5px;
`
const Button = styled.button`
  height: 30px;
  width: 100px;
  margin: 5px;
`