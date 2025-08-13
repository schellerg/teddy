import React from "react"
import clsx from "clsx"

import type { InputProps } from "@utils/types"

const Input: React.FC<InputProps> = ({ inputSize = 'medium', error = false, helperText, ...props }) => {
  return (
    <fieldset>
      <input
        className={
          clsx("w-full text-black border-2 border-gray-medium placeholder:text-gray-medium rounded-sm",
            {
              "p-1.5": inputSize === 'medium',
              "p-3 text-2xl": inputSize === 'large',
              "border-red-500 placeholder:text-red-500": error,
            },
          )
        }
        placeholder={props.placeholder ?? 'Digite aqui'}
        type={props.type ?? 'text'}
        {...props}
      />
      {error && helperText &&
        <p className="text-red-500">{helperText}</p>
      }
    </fieldset>
  )
}

export default Input