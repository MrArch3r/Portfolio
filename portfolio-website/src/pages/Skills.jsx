import Tag from "../components/Tag";

export default function Skills({}) {
  const skillBoxStyle = "w-[38rem] min-h-[10rem] bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-4";

  return (
    <div id="skills" className="bg-blue-50 scroll-mt-24 flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-12">Skills</h1>
      <div className="flex mt-12 gap-10 mb-24 text-2xl flex-wrap justify-center">
        <div className={skillBoxStyle}>
          <div className="flex">
            <img className="w-9 relative -top-[10px] mr-2" src="/Portfolio/general-skills.svg" alt="Star Icon" />
            <h3 className="mb-6 font-medium">General</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Tag name="Active Listener" colour="bg-violet-200"/>
            <Tag name="Adaptable" colour="bg-violet-200"/>
            <Tag name="Flexible" colour="bg-violet-200"/>
            <Tag name="Analytical" colour="bg-violet-200"/>
            <Tag name="Time Management" colour="bg-violet-200"/>
            <Tag name="Problem Solving" colour="bg-violet-200"/>
            <Tag name="Team Player" colour="bg-violet-200"/>
          </div>
        </div>
        <div className={skillBoxStyle}>
          <div className="flex">
            <img className="w-9 relative -top-[10px] mr-2" src="/Portfolio/technical-skills.svg" alt="Database Icon" />
            <h3 className="mb-6 font-medium">Technical</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Tag name="Systems" colour="bg-fuchsia-300"/>
            <Tag name="Cybersecurity" colour="bg-fuchsia-300"/>
            <Tag name="Cloud" colour="bg-fuchsia-300"/>
            <Tag name="Software" colour="bg-fuchsia-300"/>
            <Tag name="Git" colour="bg-fuchsia-300"/>
            <Tag name="Scripting" colour="bg-fuchsia-300"/>
            <Tag name="Troubleshooting" colour="bg-fuchsia-300"/>
            <Tag name="Artificial Intelligence" colour="bg-fuchsia-300"/>
          </div>
        </div>
      </div>
    </div>
  )
}