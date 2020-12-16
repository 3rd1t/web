import { prependListener } from "process";
import React from "react";

/* eslint-disable-next-line */
export interface BaseProps {
  label: string | React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Base = ({ label, iconLeft, iconRight }: BaseProps) => {
  return (
    <div className="flex items-center justify-center px-4 py-2 space-x-2 rounded-sm">
      {iconLeft ? <span>{iconLeft}</span> : null}
      {label ? <span>{label}</span> : null}
      {iconRight ? <span>{iconRight}</span> : null}
    </div>
  );
};

export default Base;

// export interface CTAProps {
//   headline: string
//   subline: string
//   button: {
//     label: string
//     href: string
//   }
// }

// export const CTA = ({ headline, button, subline }: CTAProps) => {
//   return (
//     <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
//       <div>
//         <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
//           {headline}
//         </h2>
//         <p className="mt-2 text-gray-700">{subline}</p>
//       </div>
//       <Link href={button.href}>
//         <a className="block w-full px-6 py-3 font-semibold text-white transition duration-150 ease-in-out border border-transparent rounded shadow-md bg-carbon-900 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto hover:bg-carbon-800 focus:outline-none focus:bg-carbon-800 hover:bg-carbon-600">
//           {button.label}
//         </a>
//       </Link>
//     </div>
//   )
// }
