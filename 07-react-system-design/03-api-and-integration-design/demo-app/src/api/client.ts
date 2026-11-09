export class ApiError extends Error {
  constructor(message: string, public status: number) { super(message); }
}
export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) throw new ApiError("The service returned an error.", response.status);
  return response.json() as Promise<T>;
}
