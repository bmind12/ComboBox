import classNames from 'classnames'
import React from 'react'
import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties
  error?: boolean
  errorText?: string
  helperText?: string
  labelText?: string
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  disabled,
  error,
  errorText,
  helperText,
  id,
  labelText,
  className,
  ...rest
}) => {
  const inputClass = classNames({
    input: true,
    'input-error': error,
  })

  return (
    <div style={{ ...containerStyle }}>
      {labelText !== undefined && (
        <label className="label" htmlFor={id}>
          {labelText}
        </label>
      )}
      <div>
        <input
          id={id}
          className={classNames(inputClass, className)}
          disabled={disabled}
          {...rest}
        />
      </div>
      {error === true && <span className="error-text">{errorText}</span>}
    </div>
  )
}

export { type InputProps }
export default Input
