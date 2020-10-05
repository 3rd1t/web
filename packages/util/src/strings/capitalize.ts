/**
 * Capitalizes the first letter of a string.
 *
 * @param s - A string you want to capitalize
 * @returns The same string where the first letter is now upper case.
 */
export function capitalize(s: string): string {
  if (s.length === 0) {
    return ""
  }

  return s[0].toUpperCase() + s.slice(1)
}
