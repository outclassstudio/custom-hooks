import { Link } from "react-router-dom"
import styled from "styled-components"
import { useTitle } from "../hooks/useTitle"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseTitlePage = () => {
  const titleUpdater = useTitle("Please select...")

  const handleChangeTitle = (e: Change<Select>) => {
    titleUpdater(e.target.value)
  }

  return(
    <UseTitleContainer>
      <Title>useTitle</Title>
      <select onChange={handleChangeTitle}> 
        <option>골라주세요</option>
        <option>타이틀을</option>
        <option>바꿔봅시다</option>
        <option>하나둘셋!</option>
      </select>
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