import http from "@/shared/services/http";

/**
 * Fetches unique values for a given field from the rent API.
 *
 * @param {'address' | 'district' | 'type'} data - The field to fetch unique values for.
 * @returns {Promise<{values: string[]}>} A promise that resolves to an object containing the unique values.
 * @throws {Error} If the API call fails.
 */
const rent = async (data) => {
  const res = await http.get(`/unique/${data}`);
  return res.data;
};

export default rent;