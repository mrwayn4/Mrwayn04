// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { CodeXml, Database, Figma, FileCode, Github, Key, Layers, Linkedin, Mail, Terminal } from "lucide-react";

// export default function Home() {
//   const [activeTab, setActiveTab] = useState<"About" | "Skills" | "Projects">()
//   const [activeSkill, setActiveSkill] = useState<"frontend.tsx" | "backend.ts" | "tools.sh">("frontend.tsx")

//   const skills = {
//     frontend:[
//       { name: "HTML", icon: "/html.svg" },
//       { name: "CSS", icon: "/css.svg" },
//       { name: "JavaScript", icon: "/js.svg" },
//       { name: "Tailwind", icon: "/tailwind.svg" },
//       { name: "React", icon: "/react.png" },
//       { name: "TypeScript", icon: "/ts.png" },
//       { name: "Next.js", icon: "/nextjs.svg" },
//     ],
//     backend:[
//       { name: "NodeJs", icon: "/html.svg" },
//       { name: "JavaScript", icon: "/css.svg" },
//       { name: "Express.js", icon: "/js.svg" },
//       { name: "SqlLite", icon: "/tailwind.svg" },
//       { name: "TypeScript", icon: "/ts.png" },

//     ],
//     tools:[
//       { name: "Docker", icon: "/html.svg" },
//       { name: "Git", icon: "/css.svg" },
//       { name: "Shell", icon: "/css.svg" },
//     ],
//     design: [
//       {name: "UI design", animation:"UI.lottie"},
//       {name: "UX Research", animation:"UX.lottie"},
//       {name: "Prototyping", animation:"prototype.lottie"},
//       {name: "Design Systems", animation:"System.lottie"}
//     ]
//   }
//   const projects = [
//     { name: "ft_transandance",img: "/ft_transandance.png", title: "Real-Time Ping Pong Web App", date: "2025", git: "https://github.com/aabouqas/ft_transcendence", site: "", figma: "" },
//     { name: "ft_irc",img: "/ft_irc.png", title: "Real-Time Ping Pong Web App", date: "2025", git: "https://github.com/aabouqas/ft_transcendence", site: "", figma: "" },
//     { name: "inception",img: "/inception.png", title: "Real-Time Ping Pong Web App", date: "2025", git: "https://github.com/aabouqas/ft_transcendence", site: "", figma: "" },
//     { name: "minishell",img: "/minishell.png", title: "Real-Time Ping Pong Web App", date: "2024", git: "https://github.com/aabouqas/ft_transcendence", site: "", figma: "" },
//   ]

//   return (
//     <main className="bg-[#12100B]">
//       <div className="bg-[#12100B] w-full max-w-screen-2xl mx-auto min-h-screen">
//         <div className="relative w-full h-screen">
//           <img
//             src="/profile.png"
//             alt="profile"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
//             <div className="flex justify-center pt-8">
//               <div className="bg-white/20 rounded-4xl px-4 py-2">
//                 <div className="flex items-center justify-center gap-4">
//                   <button
//                     className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
//                       activeTab === "About" ? "bg-[#0B86CA]/70 rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
//                     }`}
//                     onClick={() => setActiveTab("About")}
//                   >
//                     About
//                   </button>
                  
//                   <button
//                     className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
//                       activeTab === "Skills" ? "bg-[#0B86CA]/70  rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
//                     }`}
//                     onClick={() => setActiveTab("Skills")}
//                   >
//                     Skills
//                   </button>
                  
//                   <button
//                     className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
//                       activeTab === "Projects" ? "bg-[#0B86CA]/70 rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
//                     }`}
//                     onClick={() => setActiveTab("Projects")}
//                   >
//                     Projects
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-between flex-1">
//               {/* left side */}
//               <div className="flex flex-col items-start gap-8">
//                 <div className="font-medium text-[72px] tracking-wide leading-[1.2] text-white text-left">
//                   <h1>
//                     Full stack <br /> Developer & <br /> UI/UX <br /> Designer
//                   </h1>
//                 </div>
//                 <div className="bg-white/20 rounded-3xl py-2.5 px-4">
//                   <div className="flex items-center gap-3">
//                     <div className="bg-[#0B86CA] animate-pulse rounded-full w-3 h-3"></div>
//                     <p className="text-white/90 text-[18px]">Available for work</p>
//                   </div>
//                 </div>
//               </div>
//               {/* right side */}
//               <div className="flex flex-col items-start gap-10">
//                 <div className="relative px-4 py-2 text-white font-semibold text-xl border border-[#0B86CA] ">
//                   Hi There !
//                   <div className="absolute -right-1.5 -bottom-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
//                   <div className="absolute -left-1.5 -bottom-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
//                   <div className="absolute -right-1.5 -top-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
//                   <div className="absolute -left-1.5 -top-1 bg-[#0B86CA] w-2.5 h-2.5"></div>
//                 </div>
//                 <div className="font-medium text-[24px] tracking-normal leading-[1.5] text-white/70 text-left">
//                   <p>
//                   I'm Idder Bouram - passionate <br/> about building seamless digital <br/>
//                    experiences from design to <br/> 
//                    deployment.
//                   </p>
//                 </div>
//                 <div className="bg-[#0B86CA] rounded-full py-2 px-2 w-56">
//                   <div className="flex items-center  gap-3  cursor-pointer transition-all duration-500 hover:bg-white hover:rounded-full hover:px-3">
//                     <div className="w-11 h-11 bg-white rounded-full ">
//                       <DotLottieReact
//                         src="/right.lottie"
//                         loop
//                         autoplay
//                       />
//                     </div>
//                     <p className="text-white  text-[20px] hover:text-black">See my works</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-10 right-1/2 w-11 h-11">
//                       <DotLottieReact
//                         src="/Scroll_Down.lottie"
//                         loop
//                         autoplay
//                       />
//             </div>
//           </div>
//         </div>
//         {/* About Section */}
//         <div className="mt-100 p-10">
//           <div className="px-10 flex items-center justify-center gap-18">
//             <div>
//               <img src="/about-profile.png" alt="" 
//                 className="w-[500px] h-[580px] object-cover rounded-xl"/>
//             </div>
//             <div className="flex flex-col justify-center gap-8">
//               <h1 className="font-medium text-[72px] tracking-wide leading-[1.2] text-white">
//                 Bridging Design & <br /> Development Into <br /> Seamless Digital <br /> Experiences
//               </h1>
//               <p className="font-medium text-[24px] tracking-normal leading-[1.6] text-white/70">
//               I'm Idder, a Full-Stack Developer & UI/UX <br />
//               Designer with a passion for blending creativity <br />
//                and technology. Currently at 1337 Coding <br />
//                School, I'm honing my expertise in software <br />
//                engineering while building projects that unite <br />
//                 clean design with scalable development.
//               </p>
//               <div className="flex items-start  gap-4">
//                 <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110 ">
//                   <Mail className="w-6 h-6 text-[#D9D9D9]"/>
//                 </button>
//                 <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
//                   <Linkedin className="w-6 h-6 text-[#D9D9D9]"/>
//                 </button>
//                 <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
//                   <Github className="w-6 h-6 text-[#D9D9D9]"/>
//                 </button>
//                 <button className="border border-[#D9D9D9]/30 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
//                   <img 
//                     src={"/discord.png"}
//                     className="w-6 h-6 text-[#D9D9D9]"
//                     />
//                 </button> 
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Skills Section */}
//         <div className="mt-100 space-y-30 p-10">
//           <div className="flex flex-col gap-6 items-center justify-center">
//             <h1 className="font-medium text-[72px] tracking-wide text-white">
//               What I bring to the table 
//             </h1>
//             <p className="font-medium text-[30px] tracking-normal text-white/70">
//             A mix of design thinking and technical precision to deliver impactful solutions.
//             </p>
//           </div>
//           {/* Coding Skills */}
//           <div className="flex  justify-center gap-10 space-y-15">
//             <div className="rounded-xl w-fit shadow-xl border border-[#737271]/50">
//               <div className="flex p-4  items-center justify-between rounded-t-xl bg-[#1D2327] border-b border-[#737271]/50">
//                 <div className="flex gap-2 items-center">
//                   <CodeXml className="text-[#0B86CA]/70 w-8 h-8"/>
//                   <h2 className="text-white text-2xl ">Development</h2>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 rounded-full bg-[#EB5858]"></div>
//                   <div className="w-4 h-4 rounded-full bg-[#F1D04E]"></div>
//                   <div className="w-4 h-4 rounded-full bg-[#4EC26F]"></div>
//                 </div>
//               </div>
//               <div className="">
//                 <button
//                   className={`border border-t-0 border-l-0 border-[#737271]/50  ${activeSkill === "frontend.tsx" ? "bg-[#0B86CA]/40" : ""}`}
//                   onClick={() => setActiveSkill("frontend.tsx")}>
//                   <div className="flex gap-2 items-center p-3 px-8">
//                     <FileCode className={`text-[#ACACAC]  w-6 h-6 `}/>
//                     <h2 className="text-[#ACACAC] text-2xl ">frontend.tsx</h2>
//                   </div>
//                 </button>

//                 <button
//                   className={`border border-t-0 border-l-0 border-[#737271]/50 ${activeSkill === "backend.ts" ? "bg-[#0B86CA]/40" : ""}`}
//                   onClick={() => setActiveSkill("backend.ts")}>
//                   <div className="flex gap-2 items-center p-3 px-8">
//                     <Database className={`text-[#ACACAC]  w-6 h-6 `}/>
//                     <h2 className="text-[#ACACAC] text-2xl ">backend.ts</h2>
//                   </div>
//                 </button>

//                 <button
//                   className={`border border-t-0 border-l-0 border-r-0 border-[#737271]/50 ${activeSkill === "tools.sh" ? "bg-[#0B86CA]/40" : ""}`}
//                   onClick={() => setActiveSkill("tools.sh")}>
//                   <div className="flex gap-2 items-center p-3 px-8">
//                     <Terminal className={`text-[#ACACAC]  w-6 h-6 `}/>
//                     <h2 className="text-[#ACACAC] text-2xl ">tools.sh</h2>
//                   </div>
//                 </button>
//               </div>
//               {activeSkill === "frontend.tsx" &&
//               <div className=" p-10 grid grid-cols-4 gap-8">
//                 {skills.frontend.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="rounded-xl bg-[#56A8EB]/15 w-fit p-3">
//                     <img
//                       src={skill.icon} alt={skill.name} 
//                       className="w-20 h-20"/>
//                   </div>
//                 ))}
//               </div>
//             }

//             {activeSkill === "backend.ts" &&
//               <div className=" p-10 grid grid-cols-4 gap-8">
//                 {skills.backend.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="rounded-xl bg-[#56A8EB]/15 w-fit p-3">
//                     <img
//                       src={skill.icon} alt={skill.name} 
//                       className="w-20 h-20"/>
//                   </div>
//                 ))}
//               </div>
//             }

//             {activeSkill === "tools.sh" &&
//               <div className=" p-10 grid grid-cols-4 gap-8">
//                 {skills.tools.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="rounded-xl bg-[#56A8EB]/15 w-fit p-3">
//                     <img
//                       src={skill.icon} alt={skill.name} 
//                       className="w-20 h-20"/>
//                   </div>
//                 ))}
//               </div>
//             }
//             </div>

//             <div className="flex flex-col items-center gap-8">
//               <h1 className="font-medium text-[30px] tracking-wide text-white/85">
//               Building functional, scalable, and <br />efficient digital solutions
//               </h1>
//               <img 
//                 src="/code_skill.png"
//                 alt="coding skills" 
//                 className="objec-cover w-80 h-80"/>
//             </div>
//           </div>
//           {/* Design Skills */}
//           <div className="flex justify-center gap-10">
//             <div className="flex flex-col items-center gap-8">
//               <h1 className="font-medium text-[30px] tracking-wide text-white/85">
//                 Crafting intuitive and engaging <br/>user experiences
//               </h1>
//               <img 
//                 src="/design_skill.png"
//                 alt="design skills" 
//                 className="objec-cover w-80 h-80"/>
//             </div>

//             <div className="relative w-fit shadow-xl border border-[#0B86CA]/70">
//               <div className="absolute -right-2.5 -bottom-2.5 bg-[#0B86CA] w-5 h-5"></div>
//               <div className="absolute -left-2.5 -bottom-2.5 bg-[#0B86CA] w-5 h-5"></div>
//               <div className="absolute -right-2.5 -top-2.5 bg-[#0B86CA] w-5 h-5"></div>
//               <div className="absolute -left-2.5 -top-2.5 bg-[#0B86CA] w-5 h-5"></div>
//               <div className="flex p-4  items-center justify-between  bg-[#1D2327] border-b border-[#0B86CA]/70">
//                 <div className="flex gap-2 items-center">
//                   <Figma className="text-[#0B86CA]/70 w-8 h-8"/>
//                   <h2 className="text-white text-2xl ">Design cnavas</h2>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 rounded-full bg-[#EB5858]"></div>
//                   <div className="w-4 h-4 rounded-full bg-[#F1D04E]"></div>
//                   <div className="w-4 h-4 rounded-full bg-[#4EC26F]"></div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-8 p-4">
//                 {skills.design.map((skill, index)=> (
//                   <div key={index} 
//                     className="rounded-xl bg-[#56A8EB]/15">
//                       <div className="flex gap-2 items-center p-3 pr-6 bg-[#888D8F]/50 rounded-t-xl">
//                         <Layers className=" text-[#61DAFB]  w-6 h-6 "/>
//                         <h2 className="text-white/80">{skill.name}</h2>
//                       </div>
//                         <div className=" flex items-center justify-center w-70 h-30">
//                           <DotLottieReact
//                             src={skill.animation}
//                             loop
//                             autoplay
//                             className="w-28 h-28"
//                           />
//                         </div>
//                       <div className=" p-1 px-3 flex items-center justify-between">
//                         <p className="text-[#849CBE]/70 text-xs">Frame 1</p>
//                         <p className="text-[#849CBE]/70 text-xs">120*96</p>
//                       </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Project Skills */}
//         <div className="mt-100 space-y-30 p-10">
//           <div className="flex flex-col gap-6 items-center justify-center">
//             <h1 className="font-medium text-[72px] tracking-wide text-white">
//               Things I've Built
//             </h1>
//             <p className="font-medium text-[30px] tracking-normal text-white/70">
//               From ideas to fully functional digital experiences.
//             </p>
//           </div>

//           <div className="px-20 grid grid-cols-2 gap-10">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-2xl cursor-pointer overflow-hidden group"
//               >
//                 <img
//                   src={project.img}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xs"
//                 />
//                 <div className="absolute inset-0 bg-black/40 pointer-events-none" />

//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//                   <button className="border border-[#D9D9D9]/60 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110">
//                     <Link
//                       href={project.git}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                       <Github className="w-8 h-8 text-white" />
//                     </Link>
//                   </button>
//                 </div>
//                 <div className="absolute p-4 bottom-0 left-0 flex flex-col items-start justify-center z-10">
//                   <p className="text-[#C4E8FD] font-medium text-xl">{project.date}</p>
//                   <h1 className="text-white font-semibold text-[24px] tracking-wide">{project.title}</h1>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { CodeXml, Database, Figma, FileCode, Github, Key, Layers, Linkedin, Mail, Terminal } from "lucide-react"
import { motion } from "framer-motion"

// Types for better type safety
interface Skill {
  name: string
  icon: string
}

interface DesignSkill {
  name: string
  animation: string
}

interface Project {
  name: string;
  img: string;
  title: string;
  date: string;
  git: string;
  site: string;
  figma: string;
}

type SkillCategory = "frontend.tsx" | "backend.ts" | "tools.sh";
type TabType = "About" | "Skills" | "Projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>()
  const [activeSkill, setActiveSkill] = useState<SkillCategory>("frontend.tsx")

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
      { name: "NodeJs", icon: "/node.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "Express.js", icon: "/express.svg" },
      { name: "SQLite", icon: "/sqlite.svg" },
      { name: "TypeScript", icon: "/ts.png" },
    ],
    tools:[
      { name: "Docker", icon: "/docker.svg" },
      { name: "Git", icon: "/git.svg" },
      { name: "Shell", icon: "/shell.svg" },
    ],
    design: [
      {name: "UI Design", animation:"UI.lottie"},
      {name: "UX Research", animation:"UX.lottie"},
      {name: "Prototyping", animation:"prototype.lottie"},
      {name: "Design Systems", animation:"System.lottie"}
    ]
  }

  const projects: Project[] = [
    { name: "ft_transcendence",img: "/ft_transandance.png", title: "Real-Time Ping Pong Web App", date: "2025", git: "https://github.com/aabouqas/ft_transcendence", site: "", figma: "" },
    { name: "ft_irc",img: "/ft_irc.png", title: "IRC Server Implementation", date: "2025", git: "https://github.com/aabouqas/ft_irc", site: "", figma: "" },
    { name: "inception",img: "/inception.png", title: "Docker Infrastructure Project", date: "2025", git: "https://github.com/aabouqas/inception", site: "", figma: "" },
    { name: "minishell",img: "/minishell.png", title: "Custom Shell Implementation", date: "2024", git: "https://github.com/aabouqas/minishell", site: "", figma: "" },
  ]

  return (
    <main className="bg-[#12100B]">
      <div className="bg-[#12100B] w-full max-w-screen-2xl mx-auto min-h-screen">
        {/* ORIGINAL HERO SECTION - KEPT AS REQUESTED */}
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
                  onClick={() => {
                    setActiveTab("About")
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  About
                </button>
                <button
                  className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
                    activeTab === "Skills" ? "bg-[#0B86CA]/70 rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
                  }`}
                  onClick={() => {
                    setActiveTab("Skills")
                    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Skills
                </button>
                
                <button
                  className={`px-6 py-2.5 text-white font-semibold transition-colors duration-300 ${
                    activeTab === "Projects" ? "bg-[#0B86CA]/70 rounded-full" : "hover:bg-[#1B1610]/10 rounded-full"
                  }`}
                  onClick={() => {
                    setActiveTab("Projects")
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
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

        {/* IMPROVED ABOUT SECTION */}
        <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src="/about-profile.png" 
                    alt="Idder Bouram" 
                    className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Heading */}
                <motion.h2 
                  className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Bridging Design <br />
                  <span className="text-[#0B86CA]">Development</span> Into <br />
                  Seamless Digital <br />
                  <span className="text-[#0B86CA]">Experiences</span>
                </motion.h2>

                {/* Paragraph */}
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  I'm Idder, a Full-Stack Developer & UI/UX Designer with a passion for blending creativity and technology. Currently at 1337 Coding School, I'm honing my expertise in software engineering while building projects that unite clean design with scalable development.
                </motion.p>

                {/* Social icons */}
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Link href="mailto:idder@example.com" className="border border-white/30 rounded-xl p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-[#0B86CA]">
                    <Mail className="w-6 h-6 text-white" />
                  </Link>
                  <Link href="https://linkedin.com/in/idder" target="_blank" rel="noopener noreferrer" className="border border-white/30 rounded-xl p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-[#0B86CA]">
                    <Linkedin className="w-6 h-6 text-white" />
                  </Link>
                  <Link href="https://github.com/idder" target="_blank" rel="noopener noreferrer" className="border border-white/30 rounded-xl p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-[#0B86CA]">
                    <Github className="w-6 h-6 text-white" />
                  </Link>
                  <button className="border border-white/30 rounded-xl p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-[#0B86CA]">
                    <img src="/discord.png" alt="Discord" className="w-6 h-6" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IMPROVED SKILLS SECTION */}
        <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            {/* Header */}
            <div className="text-center space-y-6">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                What I Bring to the <span className="text-[#0B86CA]">Table</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto">
                A mix of design thinking and technical precision to deliver impactful solutions.
              </p>
            </div>

            {/* Development Skills */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="order-2 lg:order-1">
                <div className="bg-[#1D2327] border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Window Header */}
                  <div className="flex items-center justify-between p-4 bg-[#1D2327] border-b border-white/20">
                    <div className="flex gap-3 items-center">
                      <CodeXml className="text-[#0B86CA] w-6 md:w-8 h-6 md:h-8" />
                      <h3 className="text-white text-lg md:text-2xl font-semibold">Development</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#EB5858]"></div>
                      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#F1D04E]"></div>
                      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#4EC26F]"></div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex flex-row">
                    <button
                      className={`w-full flex gap-2 items-center p-3 px-4 md:px-8 transition-all duration-300  ${
                        activeSkill === "frontend.tsx" ? "bg-[#0B86CA]/40" : "hover:bg-white/5 border border-white/20"
                      }`}
                      onClick={() => setActiveSkill("frontend.tsx")}
                    >
                      <FileCode className="text-white/70 w-5 md:w-6 h-5 md:h-6" />
                      <span className="text-white/70 text-lg md:text-2xl">frontend.tsx</span>
                    </button>

                    <button
                      className={`w-full flex gap-2 items-center p-3 px-4 md:px-8 transition-all duration-300 ${
                        activeSkill === "backend.ts" ? "bg-[#0B86CA]/40" : "hover:bg-white/5 border border-white/20 "
                      }`}
                      onClick={() => setActiveSkill("backend.ts")}
                    >
                      <Database className="text-white/70 w-5 md:w-6 h-5 md:h-6" />
                      <span className="text-white/70 text-lg md:text-2xl">backend.ts</span>
                    </button>

                    <button
                      className={`w-full flex gap-2 items-center p-3 px-4 md:px-8 transition-all duration-300  ${
                        activeSkill === "tools.sh" ? "bg-[#0B86CA]/40" : "hover:bg-white/5 border border-white/20"
                      }`}
                      onClick={() => setActiveSkill("tools.sh")}
                    >
                      <Terminal className="text-white/70 w-5 md:w-6 h-5 md:h-6" />
                      <span className="text-white/70 text-lg md:text-2xl">tools.sh</span>
                    </button>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-4 md:p-8">
                    {activeSkill === "frontend.tsx" && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                        {skills.frontend.map((skill) => (
                          <div
                            key={skill.name}
                            className="bg-[#0B86CA]/10 rounded-xl p-3 md:p-4 hover:bg-[#0B86CA]/20 transition-all duration-300 group text-center"
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto group-hover:scale-110 transition-transform duration-300 object-contain"
                            />
                            <p className="text-white/70 text-sm mt-2 font-medium">{skill.name}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSkill === "backend.ts" && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                        {skills.backend.map((skill) => (
                          <div
                            key={skill.name}
                            className="bg-[#0B86CA]/10 rounded-xl p-3 md:p-4 hover:bg-[#0B86CA]/20 transition-all duration-300 group text-center"
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto group-hover:scale-110 transition-transform duration-300 object-contain"
                            />
                            <p className="text-white/70 text-sm mt-2 font-medium">{skill.name}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSkill === "tools.sh" && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                        {skills.tools.map((skill) => (
                          <div
                            key={skill.name}
                            className="bg-[#0B86CA]/10 rounded-xl p-3 md:p-4 hover:bg-[#0B86CA]/20 transition-all duration-300 group text-center"
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto group-hover:scale-110 transition-transform duration-300 object-contain"
                            />
                            <p className="text-white/70 text-sm mt-2 font-medium">{skill.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 text-center space-y-6 md:space-y-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed">
                  Building functional, scalable, and efficient digital solutions
                </h3>
                <div className="relative mx-auto w-fit">
                  <img
                    src="/code_skill.png"
                    alt="Coding illustration"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Design Skills */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-center space-y-6 md:space-y-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed">
                  Crafting intuitive and engaging user experiences
                </h3>
                <div className="relative mx-auto w-fit">
                  <img
                    src="/design_skill.png"
                    alt="Design illustration"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#1D2327] border-2 border-[#0B86CA] rounded-2xl shadow-2xl overflow-hidden">
                  {/* Corner decorations */}
                  <div className="absolute -right-2 md:-right-2.5 -bottom-2 md:-bottom-2.5 bg-[#0B86CA] w-4 md:w-5 h-4 md:h-5 z-10"></div>
                  <div className="absolute -left-2 md:-left-2.5 -bottom-2 md:-bottom-2.5 bg-[#0B86CA] w-4 md:w-5 h-4 md:h-5 z-10"></div>
                  <div className="absolute -right-2 md:-right-2.5 -top-2 md:-top-2.5 bg-[#0B86CA] w-4 md:w-5 h-4 md:h-5 z-10"></div>
                  <div className="absolute -left-2 md:-left-2.5 -top-2 md:-top-2.5 bg-[#0B86CA] w-4 md:w-5 h-4 md:h-5 z-10"></div>

                  {/* Header */}
                  <div className="flex items-center justify-between p-4 bg-[#1D2327] border-b border-[#0B86CA]">
                    <div className="flex gap-2 md:gap-3 items-center">
                      <Figma className="text-[#0B86CA] w-6 md:w-8 h-6 md:h-8" />
                      <h3 className="text-white text-lg md:text-2xl font-semibold">Design Canvas</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#EB5858]"></div>
                      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#F1D04E]"></div>
                      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#4EC26F]"></div>
                    </div>
                  </div>

                  {/* Design Skills Grid */}
                  <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {skills.design.map((skill, index) => (
                      <div key={index} className="bg-[#0B86CA]/10 rounded-xl overflow-hidden hover:bg-[#0B86CA]/20 transition-all duration-300">
                        <div className="flex gap-2 items-center p-3 bg-white/10">
                          <Layers className="text-[#61DAFB] w-4 md:w-5 h-4 md:h-5" />
                          <h4 className="text-white/90 text-sm md:text-base font-medium">{skill.name}</h4>
                        </div>
                        <div className="flex items-center justify-center h-20 md:h-28 lg:h-32">
                          <DotLottieReact
                            src={skill.animation}
                            loop
                            autoplay
                            className="w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
                          />
                        </div>
                        <div className="p-2 px-3 flex items-center justify-between text-xs text-white/50">
                          <span>Frame 1</span>
                          <span>120*96</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPROVED PROJECTS SECTION */}
        <section id="projects" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            {/* Header */}
            <div className="text-center space-y-6">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                Things I've <span className="text-[#0B86CA]">Built</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto">
                From ideas to fully functional digital experiences.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl hover:shadow-[#0B86CA]/20 transition-all duration-500"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Link
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-3 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                        >
                          <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </Link>
                        {project.site && (
                          <Link
                            href={project.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-3 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                          >
                            <Key className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-2">
                    <p className="text-[#0B86CA] font-medium text-sm md:text-base">{project.date}</p>
                    <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60 text-base md:text-lg">
              © 2025 Idder Bouram. Crafted with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}