import { Container } from '@mui/joy'
import FormHelperText from '@mui/joy/FormHelperText'
import FormLabel from '@mui/joy/FormLabel'
import Input, { type InputProps } from '@mui/joy/Input'
import { type SxProps } from '@mui/system'
import React, { type ReactNode } from 'react'

interface MyInputProps extends InputProps {
  containerSx?: SxProps
  error?: boolean
  helperText?: string
  labelText: string
  sx?: SxProps
}

const MyInput: React.FC<MyInputProps> = ({
  containerSx,
  error,
  helperText,
  id,
  labelText,
  name,
  sx,
  ...rest
}): ReactNode => {
  return (
    <Container sx={{ mb: 2, ...containerSx }} disableGutters>
      <FormLabel sx={{ mb: 1 }} htmlFor={id}>
        {labelText}
      </FormLabel>
      <Input id={id} sx={sx} error={error} {...rest} />
      {error === true && <FormHelperText>{helperText}</FormHelperText>}
    </Container>
  )
}

export default MyInput
