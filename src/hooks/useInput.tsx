import React, { useState } from "react"

type Validator = (value:string) => boolean

const useInput = (initialValue:string, validator?:Validator) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default useInput