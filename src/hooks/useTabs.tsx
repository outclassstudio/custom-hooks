import { useState } from "react"

export const useTabs = (initalTab:number, allTabs:any) => {
  const [currentIdx, setCurrentIdx] = useState(initalTab)

  if(!allTabs || !Array.isArray(allTabs)) {
    return
  }

  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx
  }
}