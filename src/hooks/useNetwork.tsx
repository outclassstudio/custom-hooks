import { useEffect, useState } from "react"

type OnChange = (online:boolean) => void

export const useNetwork = (onChange:OnChange) => {
  const [online, setOnline] = useState(navigator.onLine)
  const handleChange = () => {
    onChange(navigator.onLine)
    setOnline(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)

    return () => {
      window.removeEventListener("online", handleChange)
      window.removeEventListener("offline", handleChange)
    }
  }, [])
  return online
}