// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          {" "}
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who am I?
          </p>{" "}
          <p className="text-gray-200 text-sm lg:text-lg mb-4">
            {personalData.description}
          </p>{" "}
          <div className="flex flex-wrap gap-2">
            {" "}
            {[
              {
                label: "Frontend",
                items: [
                  "React",
                  "Next.js",
                  "Redux",
                  "Vue.js",
                  "Tailwind CSS",
                  "Java",
                ],
              },
              {
                label: "Backend",
                items: [
                  "Node.js",
                  "Nest.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Python",
                  "FastAPI",
                  "Firebase",
                  "AWS",
                ],
              },
              {
                label: "Mobile",
                items: ["React Native", "Flutter", "Ionic Capacitor"],
              },
              {
                label: "DeFi/Blockchain",
                items: ["Solidity", "Hardhat", "Rust", "Anchor"],
              },
              {
                label: "AI/Agents",
                items: [
                  "Python",
                  "LangChain",
                  "LangGraph",
                  "RAG",
                  "MCP",
                  "Twilio",
                  "Vapi",
                  "ElevenLabs",
                  "OpenAI",
                ],
              },
            ].map((cat) => (
              <span
                key={cat.label}
                className="inline-flex flex-wrap items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-200"
              >
                {" "}
                <span className="mr-2 font-semibold text-gray-300">
                  {cat.label}:
                </span>{" "}
                {cat.items.map((it) => (
                  <span key={it} className="mx-1 opacity-90">
                    {it}
                  </span>
                ))}{" "}
              </span>
            ))}{" "}
          </div>{" "}
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Steven Leal"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
