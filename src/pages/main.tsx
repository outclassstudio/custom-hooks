import {useNavigate} from "react-router-dom"

const Main = () => {
  const navigate = useNavigate()

  return <div>
    <button onClick={() => navigate("/useinput")}>useInput</button>
  </div>
}

export default Main