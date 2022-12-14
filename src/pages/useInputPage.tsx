import useInput from "../hooks/useInput"

const UseInputPage = () => {
  const maxLen = (value:string) => value.length <= 10
  const name = useInput("Mr", maxLen)

  return <div>
    <h1>useInput</h1>
    <input placeholder="Name" {...name}/>
  </div>
}

export default UseInputPage