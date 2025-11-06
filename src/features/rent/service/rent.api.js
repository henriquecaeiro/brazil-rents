import http from "@/shared/services/http";

const rent =  async (data) => {
  const res = await http.get(`/unique/${data}`);
  return res.data;
}

export default rent;
