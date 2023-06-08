import server$ from "solid-start/server";
import axios from "axios";
import generatePayload from "~/utils/generatePayload";
import fetchRpcUrl from "~/utils/fetchRpcUrl";

const { rpc_url } = fetchRpcUrl();

export const getidentityInfo = server$(async (iid: string, block: any) => {
  const { height } = block || {}
  const res = await axios.post(
    rpc_url, 
    generatePayload("getidentity", [iid, height, false, height])
  )
  return res.data.result;
});

export const getIdentityContent = server$(async (iid: string, block: any) => {
  const { height } = block || {}
  const res = await axios.post(
    rpc_url, 
    generatePayload("getidentitycontent", [iid, height, false, height, "null"])
  )
  return res.data.result;
});

export const getIdentityHistory = server$(async (iid: string, block: any) => {
  const { height } = block || {}
  const res = await axios.post(
    rpc_url, 
    generatePayload("getidentityhistory", [iid, height, false, height])
  )
  console.log(res.data, 'identity history');
  return res.data.result;
});
