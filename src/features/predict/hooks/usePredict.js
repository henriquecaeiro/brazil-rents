import { useCallback, useState } from "react";
import predict from "../service/predict.api";
import { useLoading } from "@/contexts/LoadingContext";

/**
 * @typedef {object} PredictionResult
 * @property {string} area - The area of the property.
 * @property {string} bedrooms - The number of bedrooms.
 * @property {string} garage - The number of garage spaces.
 * @property {string} address - The address of the property.
 * @property {string} district - The district of the property.
 * @property {string} type - The type of the property.
 * @property {number} value - The predicted rent value.
 */

/**
 * @typedef {object} UsePredictReturn
 * @property {PredictionResult|null} result - The result of the prediction.
 * @property {(e: React.FormEvent<HTMLFormElement>) => void} submit - The function to submit the prediction form.
 */

/**
 * A custom hook to handle the prediction logic.
 * It manages the form submission, API call, and result state.
 *
 * @returns {UsePredictReturn} An object containing the prediction result and the submit function.
 */
export default function usePredict() {
  const [result, setResult] = useState(null);
  const { setLoading } = useLoading();

  const submit = useCallback((e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      area: data.get("area"),
      bedrooms: data.get("quartos"),
      garage: data.get("garagem"),
      address: data.get("endereco"),
      district: data.get("distrito"),
      type: data.get("tipo")
    };

    predict(payload)
      .then((data) => {
        const newResult = { ...payload, value: data.value };
        setResult(newResult);
      })
      .catch((err) => {
        // Errors are logged but not exposed to the user directly through state.
        // UI should rely on the loading state and absence of a result to indicate issues.
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [setLoading]);

  return { result, submit };
}