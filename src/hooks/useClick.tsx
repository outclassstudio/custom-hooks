import { useEffect, useRef } from "react"

export const useClick = (onClick:any) => {
  const element = useRef<Button | null>(null)

  useEffect(() => {
    let current = element.current
    if(current) {
      current.addEventListener("click", onClick)
    }

    //cleanup 함수 : componentWillUnmount
    return () => {
      if(current) {
        current.removeEventListener("click", onClick)
      }
    }
  }, [])

  return element
}