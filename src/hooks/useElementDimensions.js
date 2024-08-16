import useEventListener from '../hooks/useEventListener'
import { useCallback, useRef, useState } from 'react'

const useElementDimensions = () => {
  const ref = useRef(null)
  const [dimensions, setDimensions] = useState(null)

  const refresh = useCallback(() => {
    const domRect = ref.current?.getBoundingClientRect()

    if (domRect) {
      setDimensions(domRect)
    }
  }, [])

  useEventListener('resize', refresh);
  useEventListener('scroll', refresh, true);

  return { dimensions, ref, refresh }
}

export default useElementDimensions