import React from "react"
import { FooterLink } from "../footer-link/footer-link"
/* eslint-disable-next-line */
export interface FooterProps {
  bgColor: string
  primaryText: string
  secondaryText: string
}

export const Footer = (props: FooterProps) => {
  return (
    <footer className={`w-full ${props.bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-wrap justify-between p-10  ${props.secondaryText}`}>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${props.primaryText} uppercase`}> Projects</h4>
            <FooterLink hoverColor={props.primaryText} href="https://perfol.io">
              Core
            </FooterLink>
            <FooterLink hoverColor={props.primaryText} href="https://research.perfol.io">
              Research
            </FooterLink>
          </div>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${props.primaryText} uppercase`}> Resources</h4>
            <FooterLink hoverColor={props.primaryText} href="/#">
              Documentation
            </FooterLink>
            <FooterLink hoverColor={props.primaryText} href="/#">
              Tutorials
            </FooterLink>
          </div>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${props.primaryText} uppercase`}> Contact us</h4>
            <FooterLink hoverColor={props.primaryText} href="mailto:info@perfol.io">
              contact@perfol.io
            </FooterLink>
          </div>
          <div className="space-y-2">
            <h4 className={`text-xs font-semibold ${props.primaryText} uppercase`}> Source</h4>
            <FooterLink hoverColor={props.primaryText} href="https://github.com/perfolio">
              github.com
            </FooterLink>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center px-10 py-2 text-sm md:flex-row">
            <span className={`${props.primaryText}`}>© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
            <div className="flex flex-row md:flex-auto md:flex-row-reverse">
              <FooterLink hoverColor={props.primaryText} href="https://www.netlify.com">
                <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
