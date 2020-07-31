import React from "react"
import { TeamCard } from "@perfolio/components"

/* eslint-disable-next-line */
export interface AboutProps {}

export const About = (props: AboutProps) => {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col justify-center w-full text-center">
          <h2 className="text-2xl tracking-widest text-gray-900">OUR TEAM</h2>
          {/* <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
        </div>
        <div className="flex flex-wrap justify-center mt-20 -m-4 sm:justify-start">
          <div className="p-4 lg:w-1/2">
            <TeamCard
              name="Nicolas Webersinke"
              position="CEO!!11!"
              description="I don't mean to brag, but I put together a puzzle in one day and the box said 2-4 years."
              image="https://imgflip.com/s/meme/Mocking-Spongebob.jpg"
            ></TeamCard>
          </div>
          <div className="p-4 lg:w-1/2">
            <TeamCard
              name="Kevin Kohler"
              position="Ganz wichtig"
              description="I put my phone in airplane mode, but it's not flying."
              image="https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg"
            ></TeamCard>
          </div>
          <div className="p-4 lg:w-1/2">
            <TeamCard
              name="Andreas Thomas"
              position="Does things"
              description="Why is monday so far from friday, and friday so close to monday?"
              image="https://i.kym-cdn.com/entries/icons/mobile/000/020/002/memeeman.jpg"
            ></TeamCard>
          </div>
          <div className="p-4 lg:w-1/2">
            <TeamCard
              name="Mads Jordt"
              position="Facility Manager"
              description="If you think your boss is stupid, remember: you wouldn't have a job if he was any smarter."
              image="https://de.meming.world/images/de/thumb/2/29/Leere_Vorlage_HD_Pikachu.jpg/300px-Leere_Vorlage_HD_Pikachu.jpg"
            ></TeamCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
