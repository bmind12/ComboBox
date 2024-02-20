import React from 'react'
import { useTranslation } from 'react-i18next'
import Input from './common/Input'

const UserForm: React.FC<Record<string, never>> = () => {
  const { t } = useTranslation()
  const [name, setName] = React.useState('')
  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value)
  }

  return (
    <form>
      <Input
        labelText={t('userForm.name.labelText')}
        placeholder={t('userForm.name.placeholder')}
        value={name}
        onChange={handleNameChange}
      />
    </form>
  )
}

export default UserForm
