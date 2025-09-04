import React from "react"

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <p className="w-full text-center p-4 mt-4 rounded-sm bg-amber-100" data-testid="generic-error-message">{message}</p>
}

export default ErrorMessage