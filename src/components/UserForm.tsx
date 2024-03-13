import { DevTool } from '@hookform/devtools'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import useDebounce from '../hooks/useDebounce'
import useUniversities from '../hooks/useUniversities'
import ReactHookFormComboBox from './react-hook-form/ComboBox'
import ReactHookFormInput from './react-hook-form/Input'

const USER_FORM_FIELDS = {
  NAME: 'name',
  UNIVERSITY: 'university',
}

const UserForm: React.FC<Record<string, never>> = (): React.ReactNode => {
  const { t } = useTranslation()
  const methods = useForm({
    defaultValues: {
      [USER_FORM_FIELDS.NAME]: '',
      [USER_FORM_FIELDS.UNIVERSITY]: '',
    },
  })
  const [universityName, setUniversityName] = useState('')
  const debouncedUniversityName = useDebounce(universityName, 500)
  const {
    data: universities,
    isLoading,
    isError,
  } = useUniversities(debouncedUniversityName)

  return (
    <FormProvider {...methods}>
      <form>
        <ReactHookFormInput
          control={methods.control}
          disabled={methods.formState.isSubmitting}
          id={USER_FORM_FIELDS.NAME}
          labelText={t('userForm.fields.name.labelText')}
          name={USER_FORM_FIELDS.NAME}
          placeholder={t('userForm.fields.name.placeholder')}
        />
        <ReactHookFormComboBox
          id={USER_FORM_FIELDS.UNIVERSITY}
          name={USER_FORM_FIELDS.UNIVERSITY}
          labelText={t('userForm.fields.university.labelText')}
          placeholder={t('userForm.fields.university.placeholder')}
          disabled={methods.formState.isSubmitting}
          isLoading={isLoading}
          isError={isError}
          onChangeCb={setUniversityName}
          options={universities?.map(university => ({
            value: university?.name,
          }))}
        />
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  )
}

export default UserForm
