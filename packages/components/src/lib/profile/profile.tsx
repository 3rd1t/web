import React from "react"

/* eslint-disable-next-line */
export interface ProfileProps {
  image: string
  name: string
  title: string
  className?: string
}

export const Profile = ({ image, name, title, className }: ProfileProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center text-sm ">
        <img className="rounded-full" src={image} alt={name}></img>
        <span className="mt-4 font-semibold text-gray-900">{name}</span>
        <span className="text-gray-600">{title}</span>
      </div>
    </div>
  )
}

export default Profile
