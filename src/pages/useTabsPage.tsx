import styled from "styled-components"
import { FlexColumnDivCentered, FlexDivCentered, Title } from "../style/utility.style"
import { Link } from "react-router-dom"
import useTabs from "../hooks/useTabs"

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const UseTabsPage = () => {
  const tabs = useTabs(0, content)

  return (
  <UseTabsContainer>
    <Title>useTabs</Title>
    <BtnWrapper>
      {content.map((section, idx) => <button key={idx} onClick={() => tabs?.changeItem(idx)}>{section.tab}</button>)}
    </BtnWrapper>
    {tabs?.currentItem?.content}
    <Link to="/">홈으로</Link>
  </UseTabsContainer>
  )
}

export default UseTabsPage

const UseTabsContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`
const BtnWrapper = styled(FlexDivCentered)`
  gap: 10px
`