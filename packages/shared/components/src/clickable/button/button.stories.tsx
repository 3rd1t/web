import React from "react"
import { Button, ButtonProps } from "./button"

export default {
  component: Button,
  title: "components/clickable/Button",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-gray-200",
    textColor: "text-gray-900",
    onClick: () => {},
  }

  return <Button label={props.label} textColor={props.textColor} bgColor={props.bgColor} onClick={props.onClick} />
}

export const black = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-carbon-900",
    textColor: "text-gray-100",
    onClick: () => {},
  }

  return <Button label={props.label} textColor={props.textColor} bgColor={props.bgColor} onClick={props.onClick} />
}

export const iconOnly = () => {
  /* eslint-disable-next-line */
  const props: ButtonProps = {
    bgColor: "bg-gray-200",
    textColor: "text-green-500",
    onClick: () => {},
    label: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  }

  return <Button label={props.label} textColor={props.textColor} bgColor={props.bgColor} onClick={props.onClick} />
}
export const red = () => {
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-red-600",
    textColor: "text-red-100",
    onClick: () => {},
  }

  return <Button label={props.label} textColor={props.textColor} bgColor={props.bgColor} onClick={props.onClick} />
}

export const block = () => {
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-carbon-900",
    textColor: "text-gray-100",
    onClick: () => {},
  }

  return (
    <Button
      width="w-full"
      label={props.label}
      textColor={props.textColor}
      bgColor={props.bgColor}
      onClick={props.onClick}
    />
  )
}

export const withIconLeft = () => {
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-carbon-900",
    textColor: "text-gray-100",
    onClick: () => {},
    iconLeft: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  }

  return (
    <Button
      label={props.label}
      textColor={props.textColor}
      bgColor={props.bgColor}
      onClick={props.onClick}
      iconLeft={props.iconLeft}
    />
  )
}

export const withIconRight = () => {
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-carbon-900",
    textColor: "text-gray-100",
    onClick: () => {},
    iconRight: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
  }

  return (
    <Button
      label={props.label}
      textColor={props.textColor}
      bgColor={props.bgColor}
      onClick={props.onClick}
      iconRight={props.iconRight}
    />
  )
}

export const withIconLeftAndRight = () => {
  const props: ButtonProps = {
    label: "Label",
    bgColor: "bg-carbon-900",
    textColor: "text-gray-100",
    onClick: () => {},
    iconLeft: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    iconRight: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    ),
  }

  return (
    <Button
      label={props.label}
      textColor={props.textColor}
      bgColor={props.bgColor}
      onClick={props.onClick}
      iconLeft={props.iconLeft}
      iconRight={props.iconRight}
    />
  )
}
