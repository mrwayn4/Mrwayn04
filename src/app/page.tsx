import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#12100B] w-full min-h-screen">
      <div className="relative">
        <img src="/profile.png" alt="profile" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/20 rounded-xl mt-8 p-2">
          <div className="flex items-center justify-center gap-4">
            <div className="rounded-md bg-[#1B1610] p-2 text-white">About</div>
            <div className="rounded-md bg-[#1B1610] p-2 text-white">Skills</div>
            <div className="rounded-md bg-[#1B1610] p-2 text-white">Projects</div>
          </div>
        </div>
      </div>
    </main>
  );
}
