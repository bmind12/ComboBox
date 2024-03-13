import { Box, CircularProgress, MenuItem, MenuList, Typography } from '@mui/joy'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Input, { type InputProps } from './Input'

interface ComboboxProps extends InputProps {
  isError: boolean
  isLoading: boolean
  name: string
  onChangeCb?: (value: string) => void
  customSetValue?: (...args: any[]) => unknown
  options?: Array<{ value: string; id?: string }>
  renderCustomInput?: (...args: any[]) => React.ReactNode
}

const ComboBox: React.FC<ComboboxProps> = ({
  isError,
  isLoading,
  name,
  onChangeCb,
  customSetValue,
  options,
  renderCustomInput,
  ...rest
}): React.ReactNode => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLElement>(null)
  const [inputWidth, setInputWidth] = useState(100)
  const [showMenuList, setShowMenuList] = useState(false)

  useEffect(() => {
    if (inputRef.current !== null) {
      setInputWidth(inputRef.current.offsetWidth)
    }
  }, [])

  const handleItemClick = (selectedValue: string): void => {
    customSetValue
      ? customSetValue({ value: selectedValue })
      : setValue(selectedValue)
    onChangeCb && onChangeCb(selectedValue)
  }

  const onFocusCb = (): void => {
    setShowMenuList(true)
  }

  const onBlurCb = (): void => {
    // TODO: consider UX improvement: a user can navigate from
    // input to options with keyboard and still see the options
    setShowMenuList(false)
  }

  const renderMenuItems = (): ReactNode => {
    if (isError) return undefined
    if (isLoading) {
      return (
        <CircularProgress
          color="neutral"
          size="sm"
          variant="plain"
          sx={{ mr: 1 }}
        />
      )
    }
    if (options !== undefined) {
      return options.map(({ value: itemValue, id }, i) => (
        <MenuItem
          sx={{ whiteSpace: 'unset', wordBreak: 'break-all' }}
          key={id ?? i}
          onMouseDown={() => {
            handleItemClick(itemValue)
          }}
        >
          <Typography fontSize={14} noWrap>
            {itemValue}
          </Typography>
        </MenuItem>
      ))
    }
  }

  const renderInput = (): ReactNode => {
    return (
      <Input
        {...rest}
        onChange={event => {
          setValue(event.target.value)
          onChangeCb && onChangeCb(event.target.value)
        }}
        onBlur={onBlurCb}
        value={value}
        onFocus={onFocusCb}
        errorText="Error message"
      />
    )
  }

  const shouldDisplayMenuList =
    showMenuList && !isError && !isLoading && (options?.length ?? 0) > 0

  return (
    <Box ref={inputRef}>
      {renderCustomInput
        ? renderCustomInput({ onBlurCb, onFocusCb })
        : renderInput()}
      {shouldDisplayMenuList && (
        <Box sx={{ width: inputWidth, position: 'absolute', zIndex: 1 }}>
          <MenuList
            style={{
              maxHeight: '150px',
              borderRadius: '6px',
            }}
          >
            {renderMenuItems()}
          </MenuList>
        </Box>
      )}
    </Box>
  )
}

export { type ComboboxProps }
export default ComboBox
