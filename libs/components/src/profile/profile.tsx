import React from "react";
import Image from "next/image"
/* eslint-disable-next-line */
export interface ProfileProps {
  image: string;
  name: string;
  title: string;
  className?: string;
}

export const Profile = ({ image, name, title, className }: ProfileProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center text-sm">
        <Image className="rounded-full" src={image} alt={name} width="800" height="800"/>
        <span className="mt-4 font-semibold text-center text-gray-900">
          {name}
        </span>
        <span className="text-gray-700">{title}</span>
      </div>
    </div>
  );
};

export default Profile;
