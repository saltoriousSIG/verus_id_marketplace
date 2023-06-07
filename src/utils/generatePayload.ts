export default function generatePayload(command: string, parameters: any[]) {
  const payload: Record<string, string | any[]> = {};
  payload.jsonrpc = "1.0";
  payload.id = command;
  payload.method = command;
  payload.params = parameters;
  return payload;
}
