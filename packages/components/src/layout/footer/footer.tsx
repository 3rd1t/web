import React from "react"

export interface FooterProps {
  bg: string
  primaryText: string
  secondaryText: string
}

export const Footer = (props: FooterProps) => {
  // TODO: Find a better way to get the border color.
  const tmp = props.bg.split("-")
  const borderColor = "border-" + tmp[1] + "-" + (Number(tmp[2]) - 200).toString()

  const footerLink = (label: string, href: string): React.ReactNode => (
    <a href={href} className={`block focus:outline-none ${props.secondaryText} hover:${props.primaryText}`}>
      {label}
    </a>
  )

  return (
    <footer className={props.bg}>
      <div className="container mx-auto">
        <div className={`flex flex-wrap justify-between p-10  ${props.secondaryText}`}>
          <div className="p-2 md:space-y-2">
            <span className={`text-xs font-semibold ${props.primaryText} uppercase`}>Projects</span>
            {footerLink("Home", "https://perfol.io")}
            <div className="flex items-center space-x-2">
              {footerLink("Analytics", "https://analytics.perfol.io")}
              <span className="px-1 text-sm bg-purple-800 rounded-sm">WIP</span>
            </div>

            {footerLink("Research", "https://research.perfol.io")}
          </div>
          <div className="p-2 md:space-y-2">
            <span className={`text-xs font-semibold ${props.primaryText} uppercase`}>Resources</span>
            {footerLink("Documentation", "/docs")}
            {footerLink("Roadmap", "perfol.io/roadmap")}
            {footerLink("Imprint", "/imprint")}
            {footerLink("Privacy", "/privacy")}
          </div>
          <div className="p-2 md:space-y-2">
            <span className={`text-xs font-semibold ${props.primaryText} uppercase`}>Contact us</span>
            {footerLink("contact@perfol.io", "mailto:info@perfol.io")}
          </div>
          <div className="p-2 md:space-y-2">
            <span className={`text-xs font-semibold ${props.primaryText} uppercase`}>Source</span>
            {footerLink("github.com", "https://github.com/perfolio")}
          </div>
        </div>
      </div>

      <div className={`pt-2 border-t ${borderColor}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center px-10 py-2 text-sm md:flex-row">
            <span className={`${props.primaryText}`}>© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
            <div className="flex flex-row md:flex-auto md:flex-row-reverse">
              <a href="https://www.netlify.com">
                <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
