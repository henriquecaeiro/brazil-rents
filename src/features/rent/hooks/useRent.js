import { useEffect, useState } from "react";
import rent from "../service/rent.api";
import { useLoading } from "@/contexts/LoadingContext";

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
        // We call all endpoints in parallel
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
        console.error(err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchAll();

    return () => {
      // cleanup in case component using this hook unmounts
      isMounted = false;
    };
  }, [setLoading]);

  return { data };
}
