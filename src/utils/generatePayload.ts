export default function generatePayload(command: string, parameters: string[]) {
  const payload: Record<string, string | string[]> = {};
  payload.jsonrpc = "1.0";
  payload.id = command;
  payload.method = command;
  payload.params = parameters;
  return payload;
}
