import classNames from 'classnames'
import React from 'react'
import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties
  error?: boolean
  errorText?: string
  labelText?: string
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  disabled,
  error,
  errorText,
  id,
  labelText,
  className,
  ...rest
}): React.ReactNode => {
  const inputClass = classNames(
    {
      input: true,
      'input-error': error,
    },
    className
  )

  return (
    <div style={{ ...containerStyle }}>
      {labelText !== undefined && (
        <label className="label" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input id={id} className={inputClass} disabled={disabled} {...rest} />
      {error === true && <span className="error-text">{errorText}</span>}
    </div>
  )
}

export { type InputProps }
export default Input
