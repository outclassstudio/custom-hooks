import {useNavigate} from "react-router-dom"
import styled from "styled-components"
import { useTitle } from "../hooks/useTitle"
import { FlexColumnDivCentered } from "../style/utility.style"

const Main = () => {
  const navigate = useNavigate()
  useTitle("My Custom Hooks")
  
  return (
    <MainContainer>
      <MainTitle>My Custom Hooks</MainTitle>
      <HookBtn onClick={() => navigate("/useinput")}>useInput</HookBtn>
      <HookBtn onClick={() => navigate("/usetabs")}>useTabs</HookBtn>
      <HookBtn onClick={() => navigate("/usetitle")}>useTitle</HookBtn>
      <HookBtn onClick={() => navigate("/useclick")}>useClick</HookBtn>
      <HookBtn onClick={() => navigate("/useconfirm")}>useConfirm</HookBtn>
      <HookBtn onClick={() => navigate("/usepreventleave")}>usePreventLeave</HookBtn>
      <HookBtn onClick={() => navigate("/usebeforeleave")}>useBeforeLeave</HookBtn>
      <HookBtn onClick={() => window.location.replace("/usefadein")}>useFadeIn</HookBtn>
      <HookBtn onClick={() => navigate("/usenetwork")}>useNetwork</HookBtn>
      <HookBtn onClick={() => navigate("/usescroll")}>useScroll</HookBtn>
      <HookBtn onClick={() => navigate("/usefullscreen")}>useFullScreen</HookBtn>
      <HookBtn onClick={() => navigate("/usenotification")}>useNotification</HookBtn>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`
const MainTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
`
const HookBtn = styled.button`
  width: 215px;
  height: 42px;
  font-size: 16px;
  font-weight: 600;
`