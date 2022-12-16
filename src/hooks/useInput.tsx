import { useState } from "react"

type Validator = (value:string) => boolean

export const useInput = (initialValue:string, validator?:Validator) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: Change<Input>) => {
    let checkValidation = true
    if(validator) {
      checkValidation = validator(e.target.value)
    }
    if(checkValidation) {
      setValue(e.target.value)
    } 
  }
  
  return { value, onChange }
}