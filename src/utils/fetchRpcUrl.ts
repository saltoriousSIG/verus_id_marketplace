const fetchRpcUrl = () => {
  let rpc_url;
  switch (import.meta.env.VITE_SOLID_APP_ENVIRONMENT) {
    case "development":
      rpc_url = import.meta.env.VITE_SOLID_APP_DEV_RPC_URL;
      break;
    case "production":
      rpc_url = import.meta.env.VITE_SOLID_APP_PROD_RPC_URL_1;
      break;
  }
  return {
    rpc_url,
    fallback: import.meta.env.VITE_SOLID_APP_PROD_RPC_URL_2
  };

};

export default fetchRpcUrl;
