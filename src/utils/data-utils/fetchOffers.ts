import generatePayload from "../generatePayload";
import axios from "axios";

const fetchOffers = async (rpc_url: string) => {
  const requestBody: Record<string, any> = {
    ...generatePayload("getoffers", ["VRSC", true, false]),
  };

  const { data: vrsc_id_data } = await axios.post(rpc_url, requestBody, {
    headers: {
      ["Content-Type"]: "application/json",
    },
  });
  const { result } = vrsc_id_data;
  const keys = Object.keys(result);
  const targetKey = keys.find((k: string) => {
    return k.startsWith("ids_for_currency");
  });
  if (!targetKey) throw new Error("key not found");

  return result[targetKey];
};

export default fetchOffers;
