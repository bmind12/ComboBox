import React, { type ReactNode } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Input from './common/Input'

const UserForm: React.FC<Record<string, never>> = (): ReactNode => {
  const { t } = useTranslation()
  const { control } = useForm()

  return (
    <form>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            id="name"
            type="text"
            labelText={t('userForm.name.labelText')}
            placeholder={t('userForm.name.placeholder')}
            {...field}
          />
        )}
      />
    </form>
  )
}

export default UserForm
