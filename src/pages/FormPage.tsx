import React from 'react'
import Card from '@mui/joy/Card'
import Container from '@mui/joy/Container'
import UserForm from '../components/UserForm'

const FormPage: React.FC<Record<string, never>> = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      maxWidth="sm"
    >
      <Card size="sm" color="primary" invertedColors={true}>
        <UserForm />
      </Card>
    </Container>
  )
}

export default FormPage
