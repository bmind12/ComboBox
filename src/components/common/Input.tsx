import {
  Box,
  FormHelperText,
  FormLabel,
  Input,
  type InputProps,
} from '@mui/joy'
import { type SxProps } from '@mui/system'
import React, { type ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface MyInputProps extends InputProps {
  containerSx?: SxProps
  error?: boolean
  helperText?: string
  labelText?: string
  name: string
  sx?: SxProps
}

const MyInput: React.FC<MyInputProps> = ({
  containerSx,
  error,
  helperText,
  id,
  labelText,
  name,
  onBlur,
  onFocus,
  sx,
  ...rest
}): ReactNode => {
  const { control } = useFormContext()

  return (
    <Box sx={{ mb: 1, ...containerSx }}>
      {labelText !== undefined && (
        <FormLabel sx={{ mb: 1 }} htmlFor={id}>
          {labelText}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={id}
            sx={sx}
            onFocus={event => {
              if (onFocus !== undefined) {
                onFocus(event)
              }
            }}
            {...field}
            {...rest}
            onBlur={event => {
              if (onBlur !== undefined) {
                onBlur(event)
              }
              field.onBlur()
            }}
          />
        )}
      />
      {error === true && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  )
}

export type { MyInputProps as InputProps }
export default MyInput
