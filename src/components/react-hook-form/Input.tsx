import React from 'react'
import { type Control, Controller } from 'react-hook-form'
import Input from '../common/Input'

interface ReactHookFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<Record<string, string>, any, Record<string, string>>
  labelText?: string
  name: string
}

const ReactHookFormInput: React.FC<ReactHookFormInputProps> = ({
  control,
  disabled,
  labelText,
  name,
  placeholder,
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
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
    />
  )
}

export default ReactHookFormInput
