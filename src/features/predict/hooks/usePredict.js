import { useCallback, useState } from "react";
import predict from "../service/predict.api";
import { useLoading } from "@/contexts/LoadingContext";

export default function usePredict() {
  const [result, setResult] = useState(null)
  const {setLoading} = useLoading()

  const submit = useCallback((e) => {
    setLoading(true);
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

    predict(payload)
    .then((data) => {
      console.log(data)
      payload.value = data.value ?? data ?? null
      setResult(payload)
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false))

  }, [])

  return {result, submit}
}
