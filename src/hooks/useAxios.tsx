import axios from "axios"
import { useEffect, useState } from "react"

interface IState {
  loading: boolean;
  error: any;
  data: any;
}

export const useAxios = (options:any, axiosInstance = axios) => {
  const [state, setState] = useState<IState>({loading : true, error: null, data: null})
  const [trigger, setTrigger] = useState(Date.now())

  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
  }

  useEffect(() => {
    axiosInstance.get(options.url).then(data => {
      setState({
        ...state,
        loading: false,
        data
      })
    }).catch((error) => {
      setState({
        ...state,
        error
      })
    })
  }, [trigger])

  return {...state, refetch}
}