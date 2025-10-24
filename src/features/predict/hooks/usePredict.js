import { useCallback, useState } from "react";

export default function usePredict() {
  const [result, setResult] = useState(null)

  const submit = useCallback((e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form);
    const payload = {
      area: data.get("area"),
      bedrooms: data.get("quartos"),
      garage: data.get("garagem"),
      address: data.get("endereco"),
      district: data.get("distrito"),
      type: data.get("tipo")
    }

    setResult(payload)
  }, [])

  return {result, submit}
}
