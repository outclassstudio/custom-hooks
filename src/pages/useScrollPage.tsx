import { Link } from "react-router-dom";
import { useScroll } from "../hooks/useScroll";
import { Title } from "../style/utility.style";

const UseScrollPage = () => {
  const { y } = useScroll()

  return( 
    <div style={{height: "300vh"}}>
      <div style={{position: "fixed"}}>
        <Title>useScroll</Title>
        <div style={{ fontSize: "30px", fontWeight: "bold", color: y> 200 ? "red" : "blue"}}>hi</div>
        <Link to="/">홈으로</Link>
      </div>
    </div>
  ) 
}
;

export default UseScrollPage
