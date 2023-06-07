import server$ from "solid-start/server";
import axios from "axios";
import generatePayload from "~/utils/generatePayload";

export const getidentityInfo = server$(async (iid: string, block: any) => {
  const { height } = block || {}
  const res = await axios.post(
    import.meta.env.VITE_SOLID_APP_RPC_URL,
    generatePayload("getidentity", [iid, height, false, height])
  )
  console.log(res.data.result);
  return res.data.result;
});
