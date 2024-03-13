import { useFormContext } from 'react-hook-form'
import ComboBox, { ComboboxProps } from '../common/ComboBox'
import ReactHookFormInput from './Input'

const ReactHookFormComboBox: React.FC<ComboboxProps> = ({
  onChangeCb,
  name,
  ...rest
}): React.ReactNode => {
  const { control, setValue } = useFormContext()

  const renderInput = ({
    onBlurCb,
    onFocusCb,
  }: {
    onBlurCb: () => void
    onFocusCb: () => void
  }): React.ReactNode => {
    return (
      <ReactHookFormInput
        control={control}
        name={name}
        onChangeCb={(value: string) => {
          onChangeCb && onChangeCb(value)
        }}
        onBlurCb={onBlurCb}
        onFocus={onFocusCb}
        {...rest}
      />
    )
  }

  return (
    <ComboBox
      name={name}
      renderCustomInput={renderInput}
      customSetValue={({ value }) =>
        setValue(name, value, { shouldDirty: true, shouldTouch: true })
      }
      {...rest}
    />
  )
}

export default ReactHookFormComboBox
