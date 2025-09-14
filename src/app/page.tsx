"use client"

import Image from "next/image";
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CodeXml, Database, Figma, FileCode, Github, Key, Layers, Linkedin, Mail, Terminal } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"About" | "Skills" | "Projects">()
  const [activeSkill, setActiveSkill] = useState<"frontend.tsx" | "backend.ts" | "tools.sh">("frontend.tsx")

  const skills = {
    frontend:[
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "Tailwind", icon: "/tailwind.svg" },
      { name: "React", icon: "/react.png" },
      { name: "TypeScript", icon: "/ts.png" },
      { name: "Next.js", icon: "/nextjs.svg" },
    ],
    backend:[
      { name: "NodeJs", icon: "/html.svg" },
      { name: "JavaScript", icon: "/css.svg" },
      { name: "Express.js", icon: "/js.svg" },
      { name: "SqlLite", icon: "/tailwind.svg" },
      { name: "TypeScript", icon: "/ts.png" },

    ],
    tools:[
      { name: "Docker", icon: "/html.svg" },
      { name: "Git", icon: "/css.svg" },
      { name: "Shell", icon: "/css.svg" },
    ],
    design: [
      {name: "UI design", animation:"UI.lottie"},
      {name: "UX Research", animation:"UX.lottie"},
      {name: "Prototyping", animation:"prototype.lottie"},
      {name: "Design Systems", animation:"System.lottie"}
    ]
  }

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
        {/* About Section */}
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
        {/* Skiils Section */}
        <div className="mt-100 space-y-30 ">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="font-medium text-[72px] tracking-wide text-white">
              What I bring to the table 
            </h1>
            <p className="font-medium text-[30px] tracking-normal text-white/70">
            A mix of design thinking and technical precision to deliver impactful solutions.
            </p>
          </div>
          {/* Coding Skills */}
          <div className="flex  justify-center gap-10 space-y-15">
            <div className="rounded-xl w-fit shadow-xl border border-[#737271]/50">
              <div className="flex p-4  items-center justify-between rounded-t-xl bg-[#1D2327] border-b border-[#737271]/50">
                <div className="flex gap-2 items-center">
                  <CodeXml className="text-[#0B86CA]/70 w-8 h-8"/>
                  <h2 className="text-white text-2xl ">Development</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#EB5858]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F1D04E]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#4EC26F]"></div>
                </div>
              </div>
              <div className="">
                <button
                  className={`border border-t-0 border-l-0 border-[#737271]/50  ${activeSkill === "frontend.tsx" ? "bg-[#0B86CA]/40" : ""}`}
                  onClick={() => setActiveSkill("frontend.tsx")}>
                  <div className="flex gap-2 items-center p-3 px-8">
                    <FileCode className={`text-[#ACACAC]  w-6 h-6 `}/>
                    <h2 className="text-[#ACACAC] text-2xl ">frontend.tsx</h2>
                  </div>
                </button>

                <button
                  className={`border border-t-0 border-l-0 border-[#737271]/50 ${activeSkill === "backend.ts" ? "bg-[#0B86CA]/40" : ""}`}
                  onClick={() => setActiveSkill("backend.ts")}>
                  <div className="flex gap-2 items-center p-3 px-8">
                    <Database className={`text-[#ACACAC]  w-6 h-6 `}/>
                    <h2 className="text-[#ACACAC] text-2xl ">backend.ts</h2>
                  </div>
                </button>

                <button
                  className={`border border-t-0 border-l-0 border-r-0 border-[#737271]/50 ${activeSkill === "tools.sh" ? "bg-[#0B86CA]/40" : ""}`}
                  onClick={() => setActiveSkill("tools.sh")}>
                  <div className="flex gap-2 items-center p-3 px-8">
                    <Terminal className={`text-[#ACACAC]  w-6 h-6 `}/>
                    <h2 className="text-[#ACACAC] text-2xl ">tools.sh</h2>
                  </div>
                </button>
              </div>
              {activeSkill === "frontend.tsx" &&
              <div className=" p-10 grid grid-cols-4 gap-8">
                {skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl bg-[#56A8EB]/15 w-fit p-3">
                    <img
                      src={skill.icon} alt={skill.name} 
                      className="w-20 h-20"/>
                  </div>
                ))}
              </div>
            }

            {activeSkill === "backend.ts" &&
              <div className=" p-10 grid grid-cols-4 gap-8">
                {skills.backend.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl bg-[#56A8EB]/15 w-fit p-3">
                    <img
                      src={skill.icon} alt={skill.name} 
                      className="w-20 h-20"/>
                  </div>
                ))}
              </div>
            }

            {activeSkill === "tools.sh" &&
              <div className=" p-10 grid grid-cols-4 gap-8">
                {skills.tools.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl bg-[#56A8EB]/15 w-fit p-3">
                    <img
                      src={skill.icon} alt={skill.name} 
                      className="w-20 h-20"/>
                  </div>
                ))}
              </div>
            }
            </div>

            <div className="flex flex-col items-center gap-8">
              <h1 className="font-medium text-[30px] tracking-wide text-white/85">
              Building functional, scalable, and <br />efficient digital solutions
              </h1>
              <img 
                src="/code_skill.png"
                alt="coding skills" 
                className="objec-cover w-80 h-80"/>
            </div>
          </div>
          {/* Design Skills */}
          <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center gap-8">
              <h1 className="font-medium text-[30px] tracking-wide text-white/85">
                Crafting intuitive and engaging <br/>user experiences
              </h1>
              <img 
                src="/design_skill.png"
                alt="design skills" 
                className="objec-cover w-80 h-80"/>
            </div>

            <div className="relative w-fit shadow-xl border border-[#0B86CA]/70">
              <div className="absolute -right-2.5 -bottom-2.5 bg-[#0B86CA] w-5 h-5"></div>
              <div className="absolute -left-2.5 -bottom-2.5 bg-[#0B86CA] w-5 h-5"></div>
              <div className="absolute -right-2.5 -top-2.5 bg-[#0B86CA] w-5 h-5"></div>
              <div className="absolute -left-2.5 -top-2.5 bg-[#0B86CA] w-5 h-5"></div>
              <div className="flex p-4  items-center justify-between  bg-[#1D2327] border-b border-[#0B86CA]/70">
                <div className="flex gap-2 items-center">
                  <Figma className="text-[#0B86CA]/70 w-8 h-8"/>
                  <h2 className="text-white text-2xl ">Design cnavas</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#EB5858]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F1D04E]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#4EC26F]"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4">
                {skills.design.map((skill)=> (
                  <div className="rounded-xl bg-[#56A8EB]/15">
                      <div className="flex gap-2 items-center p-3 pr-6 bg-[#888D8F]/50 rounded-t-xl">
                        <Layers className=" text-[#61DAFB]  w-6 h-6 "/>
                        <h2 className="text-white/80">{skill.name}</h2>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className=" w-30 h-30">
                          <DotLottieReact
                            src="/UI.lottie"
                            loop
                            autoplay
                          />
                        </div>
                      </div>
                      <div className=" p-1 px-3 flex items-center justify-between">
                        <p className="text-[#849CBE]/70 text-xs">Frame 1</p>
                        <p className="text-[#849CBE]/70 text-xs">120*96</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}   