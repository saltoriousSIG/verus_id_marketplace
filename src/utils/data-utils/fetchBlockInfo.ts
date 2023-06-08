import axios from "axios";
import generatePayload from "../generatePayload";

const fetchBlockInfo = async (rpc_url: string) => {
  const { data: block_hash } = await axios.post(
    rpc_url,
    generatePayload("getbestblockhash", []),
    {
      headers: {
        ["Content-Type"]: "application/json",
      },
    }
  );
  const { result: hash } = block_hash;

  const { data: block_data } = await axios.post(
    rpc_url,
    generatePayload("getblock", [hash, true]),
    {
      headers: {
        ["Content-Type"]: "application/json",
      },
    }
  );

  const { result } = block_data;
  return result;
};

export default fetchBlockInfo;
