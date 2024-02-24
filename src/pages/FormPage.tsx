import { Box, Sheet } from '@mui/joy'
import React from 'react'
import UserForm from '../components/UserForm'

const FormPage: React.FC<Record<string, never>> = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Sheet
        variant="soft"
        sx={{
          p: 4,
          borderRadius: 1,
        }}
      >
        <UserForm />
      </Sheet>
    </Box>
  )
}

export default FormPage
