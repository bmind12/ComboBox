import { Box, CircularProgress, MenuItem, MenuList, Typography } from '@mui/joy'
import React, { useEffect, useRef, useState, type ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Input, { type InputProps } from './Input'

interface ComboboxProps extends InputProps {
  isError: boolean
  isLoading: boolean
  name: string
  onChangeHandler: (value: string) => void
  options?: Array<{
    value: string
    id?: string
  }>
}

const ComboBox: React.FC<ComboboxProps> = ({
  isError,
  isLoading,
  name,
  onChangeHandler,
  options,
  ...rest
}) => {
  const { control, setValue } = useFormContext()
  const inputRef = useRef<HTMLElement>(null)
  const [inputWidth, setInputWidth] = useState(100)
  const [showMenuList, setShowMenuList] = useState(false)

  useEffect(() => {
    if (inputRef.current !== null) {
      setInputWidth(inputRef.current.offsetWidth)
    }
  }, [])

  const handleItemClick = (value: string): void => {
    onChangeHandler(value)
    setValue(name, value, { shouldDirty: true, shouldTouch: true })
  }

  const onFocusHandler = (): void => {
    setShowMenuList(true)
  }

  const onBlurHandler = (): void => {
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
      return options.map(({ value, id }, i) => (
        <MenuItem
          sx={{ whiteSpace: 'unset', wordBreak: 'break-all' }}
          key={id ?? i}
          onMouseDown={() => {
            handleItemClick(value)
          }}
        >
          <Typography fontSize={14} noWrap>
            {value}
          </Typography>
        </MenuItem>
      ))
    }
  }

  const shouldDisplayMenuList =
    showMenuList && !isError && !isLoading && (options?.length ?? 0) > 0

  return (
    <Box ref={inputRef}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...rest}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeHandler(event.target.value)
              onChange(event)
            }}
            onBlur={() => {
              onBlur()
              onBlurHandler()
            }}
            value={value}
            onFocus={onFocusHandler}
            errorText="Error message"
          />
        )}
      />
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

export default ComboBox
