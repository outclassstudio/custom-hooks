import { Link } from "react-router-dom"
import styled from "styled-components"
import { useAxios } from "../hooks/useAxios"
import { FlexColumnDivCentered, Title } from "../style/utility.style"

const UseAxiosPage = () => {
  const { loading, error, data, refetch } = useAxios({ url:"https://yts.am/api/v2/list_movies.json" })

  console.log(loading, error, data)

  return (
    <UseAxiosContainer>
      <Title>useAxios</Title>
      <div>{loading ? "Loading..." : "Loaded!"}</div>
      <button onClick={refetch}>Refetch</button>
      <Link to="/">홈으로</Link>
    </UseAxiosContainer>
  )
}

export default UseAxiosPage

const UseAxiosContainer = styled(FlexColumnDivCentered)`
  height: 100vh;
  gap: 10px;
`