import React from "react"
import clsx from "clsx"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  inputSize?: 'medium' | 'large'
}

const Input: React.FC<InputProps> = ({ inputSize = 'medium', ...props }: InputProps) => {
  return (
    <fieldset>
      <input
        className={
          clsx("w-full text-black border-2 border-gray-medium placeholder:text-gray-medium rounded-sm",
            {
              "p-1.5": inputSize === 'medium',
              "p-3 text-2xl": inputSize === 'large',
            },
            {
              "border-red-500": props.error,
            }
          )
        }
        id={props.id ?? 'generic-input'}
        name={props.name ?? 'generic-input'}
        placeholder={props.placeholder ?? 'Digite aqui'}
        required={props.required ?? false}
        type={props.type ?? 'text'}
        {...props}
      />
      {props.error && props.helperText?.length &&
        <p className="text-red-500">{props.helperText}</p>
      }
    </fieldset>
  )
}

export default Input