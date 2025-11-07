import http from "@/shared/services/http";

/**
 * Calls the prediction API with the given property data.
 *
 * @param {object} payload - The data for the property to be predicted.
 * @param {string} payload.area - The area of the property.
 * @param {string} payload.bedrooms - The number of bedrooms.
 * @param {string} payload.garage - The number of garage spaces.
 * @param {string} payload.address - The address of the property.
 * @param {string} payload.district - The district of the property.
 * @param {string} payload.type - The type of the property.
 * @param {object} [config={}] - Optional axios config.
 * @returns {Promise<{value: number}>} A promise that resolves to the prediction result.
 * @throws {Error} If the API call fails.
 */
const predict = async (payload, config = {}) => {
  const res = await http.post("/predict", payload, config);
  return res.data;
};

export default predict;