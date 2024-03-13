import React, { FocusEventHandler } from 'react'
import { Controller, type Control } from 'react-hook-form'
import Input from '../common/Input'

interface ReactHookFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<Record<string, string>, any, Record<string, string>>
  labelText?: string
  name: string
  onBlurCb?: () => void
  onChangeCb?: (value: string) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
}

const ReactHookFormInput: React.FC<ReactHookFormInputProps> = ({
  control,
  disabled,
  labelText,
  name,
  placeholder,
  onBlurCb,
  onChangeCb,
  onFocus,
}): React.ReactNode => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          id={name}
          labelText={labelText}
          placeholder={placeholder}
          disabled={disabled}
          onChange={event => {
            onChange(event)
            onChangeCb && onChangeCb(event.target.value)
          }}
          onFocus={onFocus}
          onBlur={() => {
            onBlur()
            onBlurCb && onBlurCb()
          }}
          value={value}
        />
      )}
    />
  )
}

export default ReactHookFormInput
