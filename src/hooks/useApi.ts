import axios from 'axios'
import { useEffect, useState } from 'react'

export function useApi<T = unknown>(url: string, options?: {}) {
  const [data, setData] = useState<T | []>()

  useEffect(() => {
    axios.get(url, options)
    .then(response => response.data)
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])

  return { data }
}