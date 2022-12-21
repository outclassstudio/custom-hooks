import { useRef, useState } from "react"

export const useFullScreen = () => {
  const [isFull, setIsFull] = useState(false)
  const element = useRef<Div>(null)
  
  const triggerFull = () => {
    if(element.current) {
      element.current.requestFullscreen()
      setIsFull(true)
    }
  }

  const exitFull = () => {
    document.exitFullscreen()
    setIsFull(false)
  }
  return {element, triggerFull, exitFull, isFull}
}