import React from "react";

/* eslint-disable-next-line */
export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div>
      <div className="flex justify-center w-12 h-12 rounded bg-gradient-to-t from-indigo-900 to-purple-800">
        <span className="w-full h-full p-2 text-white">{icon}</span>
      </div>
      <h2 className="mt-3 font-semibold tracking-wide text-gray-800 uppercase sm:text-lg sm:leading-snug">
        {title}
      </h2>
      <p className="mt-1 text-base leading-6 text-gray-600">{description} </p>
    </div>
   
  );
};

export default Feature;
