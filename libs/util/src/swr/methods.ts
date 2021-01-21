export async function GET(url: string): Promise<Record<string, unknown>> {
  const res = await fetch(url)
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.")
  }
  return res.json()
}
