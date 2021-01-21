import swr from "swr"
import { GET } from "./methods"

export function useSWR(url: string) {
  return swr(url, GET)
}
