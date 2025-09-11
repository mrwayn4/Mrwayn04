"use client"

import Image from "next/image";
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"About" | "Skills" | "Projects">()

  return (
    <main className="bg-[#12100B]">
      <div className="bg-[#12100B] w-full max-w-screen-2xl mx-auto min-h-screen">
        <div className="relative w-full h-screen">
          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
            <div className="flex justify-center pt-8">
              <div className="bg-white/20 rounded-4xl px-4 py-2">
                <div className="flex items-center justify-center gap-4">
                  <button
                    className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
                      activeTab === "About" ? "bg-[#0B86CA]/70 rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
                    }`}
                    onClick={() => setActiveTab("About")}
                  >
                    About
                  </button>
                  
                  <button
                    className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
                      activeTab === "Skills" ? "bg-[#0B86CA]/70  rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
                    }`}
                    onClick={() => setActiveTab("Skills")}
                  >
                    Skills
                  </button>
                  
                  <button
                    className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
                      activeTab === "Projects" ? "bg-[#0B86CA]/70 rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
                    }`}
                    onClick={() => setActiveTab("Projects")}
                  >
                    Projects
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between flex-1">
              {/* left side */}
              <div className="flex flex-col items-start gap-8">
                <div className="font-medium text-[72px] tracking-wide leading-[1.2] text-white text-left">
                  <h1>
                    Full stack <br /> Developer & <br /> UI/UX <br /> Designer
                  </h1>
                </div>
                <div className="bg-white/20 rounded-3xl py-2.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0B86CA] animate-pulse rounded-full w-3 h-3"></div>
                    <p className="text-white/90 text-[18px]">Available for work</p>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="flex flex-col items-start gap-10">
                <div className="relative px-4 py-2 text-white font-semibold text-xl border border-[#0B86CA] ">
                  Hi There !
                  <div className="absolute -right-1.5 -bottom-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
                  <div className="absolute -left-1.5 -bottom-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
                  <div className="absolute -right-1.5 -top-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
                  <div className="absolute -left-1.5 -top-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
                </div>
                <div className="font-medium text-[24px] tracking-normal leading-[1.5] text-white/70 text-left">
                  <p>
                  I'm Idder Bouram - passionate <br/> about building seamless digital <br/>
                   experiences from design to <br/> 
                   deployment.
                  </p>
                </div>
                <div className="bg-[#0B86CA] rounded-full py-2 px-2 w-56">
                  <div className="flex items-center  gap-3  cursor-pointer transition-all duration-500 hover:bg-white hover:rounded-full hover:px-3">
                    <div className="w-11 h-11 bg-white rounded-full ">
                      <DotLottieReact
                        src="/right.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <p className="text-white  text-[20px] hover:text-black">See my works</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-1/2 w-11 h-11">
                      <DotLottieReact
                        src="/Scroll_Down.lottie"
                        loop
                        autoplay
                      />
            </div>
          </div>
        </div>
        {/* about-section */}
        <div className="mt-100">
          <div className="px-10 flex items-center justify-center gap-18">
            <div>
              <img src="/about-profile.png" alt="" 
                className="w-[500px] h-[580px] object-cover rounded-xl"/>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <h1 className="font-medium text-[72px] tracking-wide leading-[1.2] text-white">
                Bridging Design & <br /> Development Into <br /> Seamless Digital <br /> Experiences
              </h1>
              <p className="font-medium text-[24px] tracking-normal leading-[1.6] text-white/70">
              I'm Idder, a Full-Stack Developer & UI/UX <br />
              Designer with a passion for blending creativity <br />
               and technology. Currently at 1337 Coding <br />
               School, I'm honing my expertise in software <br />
               engineering while building projects that unite <br />
                clean design with scalable development.
              </p>
              <div className="flex items-start  gap-4">
                <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110 ">
                  <Mail className="w-6 h-6 text-[#D9D9D9]"/>
                </button>
                <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6 text-[#D9D9D9]"/>
                </button>
                <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6 text-[#D9D9D9]"/>
                </button>
                <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
                  <img 
                    src={"/discord.png"}
                    className="w-6 h-6 text-[#D9D9D9]"
                    />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}