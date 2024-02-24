import { useEffect, useState } from 'react'
import { TIMERS } from '../services/config'

function useDebounce<T>(value: T, delay = TIMERS.DEFAULT.DEBOUNCE): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
