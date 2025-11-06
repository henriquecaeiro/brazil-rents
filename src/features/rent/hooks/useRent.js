import { useEffect, useState } from "react";
import rent from "../service/rent.api";
import { useLoading } from "@/contexts/LoadingContext";

/**
 * @typedef {object} RentData
 * @property {string[]} addresses - The list of available addresses.
 * @property {string[]} districts - The list of available districts.
 * @property {string[]} types - The list of available property types.
 */

/**
 * @typedef {object} UseRentReturn
 * @property {RentData} data - The data for the form select options.
 */

/**
 * A custom hook to fetch data required for the rent prediction form.
 * It fetches addresses, districts, and property types in parallel.
 *
 * @returns {UseRentReturn} An object containing the form data.
 */
export default function useRent() {
  // State holds all select options for the form
  const [data, setData] = useState({
    addresses: [],
    districts: [],
    types: [],
  });

  const { setLoading } = useLoading();

  useEffect(() => {
    let isMounted = true; // prevents state updates after unmount

    async function fetchAll() {
      setLoading(true);

      try {
        // We call all endpoints in parallel for efficiency.
        const [addrRes, distRes, typeRes] = await Promise.all([
          rent("address"),
          rent("district"),
          rent("type"),
        ]);

        if (!isMounted) return;

        // We set all data at once, without mutating previous state
        setData({
          addresses: addrRes?.values ?? [],
          districts: distRes?.values ?? [],
          types: typeRes?.values ?? [],
        });
      } catch (err) {
        // Errors are logged; the UI will show empty select fields.
        console.error(err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchAll();

    return () => {
      // This cleanup function prevents setting state on an unmounted component,
      // which would cause a memory leak.
      isMounted = false;
    };
  }, [setLoading]);

  return { data };
}