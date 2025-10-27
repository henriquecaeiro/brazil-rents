import http from "@/shared/services/http";

const predict =  async (payload, config = {}) => {
  const res = await http.post("/predict", payload, config);
  return res.data;
}

export default  predict;
