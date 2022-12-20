import { useEffect } from "react"

type OnBefore = () => void;

export const useBeforeLeave = (onBefore:OnBefore) => {
  const handle = (event:MouseEvent) => {
    const { clientY } = event

    if(clientY <= 0) {
      onBefore()
    }
  }

  useEffect(() => {
    document.addEventListener("mouseleave", handle)
    return () => { document.removeEventListener("mouseleave", handle) }
  }, [])

  return 
}