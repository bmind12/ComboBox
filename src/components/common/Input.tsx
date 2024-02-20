import { Container } from '@mui/joy'
import FormHelperText from '@mui/joy/FormHelperText'
import FormLabel from '@mui/joy/FormLabel'
import Input, { type InputProps } from '@mui/joy/Input'
import { type SxProps } from '@mui/system'
import React from 'react'

interface MyInputProps extends InputProps {
  labelText: string
  containerSx?: SxProps
  sx?: SxProps
  error?: boolean
  helperText?: string
}

const MyInput: React.FC<MyInputProps> = ({
  sx,
  containerSx,
  labelText,
  helperText,
  error,
  ...rest
}) => {
  return (
    <Container sx={{ mb: 2, ...containerSx }} disableGutters>
      <FormLabel sx={{ mb: 1 }}>{labelText}</FormLabel>
      <Input sx={sx} error={error} {...rest} />
      {error === true && <FormHelperText>{helperText}</FormHelperText>}
    </Container>
  )
}

export default MyInput
