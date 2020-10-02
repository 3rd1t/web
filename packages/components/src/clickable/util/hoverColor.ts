export const getHoverColor = (color: string): string => {
  if (!color || color === "") {
    return ""
  }
  if (color.includes("transparent")) {
    return ""
  }

  if (color === "text-black") {
    return "text-gray-900"
  }

  if (color === "bg-black") {
    return "bg-gray-900"
  }

  if (color === "text-white") {
    return "text-gray-100"
  }

  if (color === "bg-white") {
    return "bg-gray-100"
  }

  const tokens = color.split("-")
  if (tokens.length !== 3) {
    throw new Error(
      "color was not valid, please use a valid tailwind color, for Example: 'text-gray-200' or 'bg-indigo-900'",
    )
  }
  const intensity = Number(tokens[2])
  const hoverIntensity = intensity > 500 ? intensity - 100 : intensity + 100

  return `hover:${tokens[0]}-${tokens[1]}-${hoverIntensity}`
}
