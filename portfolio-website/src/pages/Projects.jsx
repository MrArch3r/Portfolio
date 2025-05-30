export default function Projects({}) {
  const projectTileStyle = "w-[42rem] min-h-[10rem] bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-4";

  return (
    <div id="projects" className="bg-white scroll-mt-24 flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-12">Projects</h1>
      <div className="flex mt-12 gap-10 mb-24 text-xl flex-wrap justify-center">
        <div className={projectTileStyle}>
          <h3 className="font-medium">AcademicHub - Academics Management Web Application</h3>
          <p className="text-base text-[#666666] mb-2">February 2025 - May 2025</p>
          <ul className="text-base list-disc pl-5 space-y-2">
            <li>Built a full-stack web app using React, Flask, and MongoDB to help academics manage students, papers, grants, and conferences</li>
            <li>Collaborated in a team of 6 and worked closely with a real client to gather requirements and ensure the product met their needs</li>
            <li>Designed and implemented RESTful APIs, dynamic user interfaces, and role-based access to support diverse academic workflows</li>
          </ul>
        </div>
        <div className={projectTileStyle}>
          <h3 className="font-medium">Probability Converter Mobile Application</h3>
          <p className="text-base text-[#666666] mb-2">December 2024 - January 2025</p>
          <ul className="text-base list-disc pl-5 space-y-2">
            <li>Designed and developed an android application to help convert percentages into odds, helping users make quick and accurate probability assessments in various scenarios</li>
            <li>Built with React Native, leveraging state-based pages and efficient data handling to ensure optimal performance</li>
            <li>Implemented an intuitive, user-friendly interface with responsive layouts, interactive elements, and accessibility features</li>
          </ul>
        </div>
        <div className={projectTileStyle}>
          <h3 className="font-medium">2D Unity Platformer Game</h3>
          <p className="text-base text-[#666666] mb-2">August 2023 - October 2023</p>
          <ul className="text-base list-disc pl-5 space-y-2">
            <li>Developed a 2D platformer game using Unity and C#, demonstrating proficiency in game development fundamentals and object-oriented programming principles</li>
            <li>Created a simple yet effective combat system featuring player attack animations, enemy AI, and health management to enrich gameplay</li>
            <li>Gained hands-on experience in working with Unity's game engine, physics system, and asset management to build a complete game from concept to execution</li>
          </ul>
        </div>
        <div className={projectTileStyle}>
          <h3 className="font-medium">Quiz Game Backend System</h3>
          <p className="text-base text-[#666666] mb-2">May 2023 - August 2023</p>
          <ul className="text-base list-disc pl-5 space-y-2">
            <li>Collaborated in a team of 5 to design and develop a functional backend system that supports hosting and playing real-time quizzes</li>
            <li>Designed and implemented a suite of RESTful APIs using Express, enabling quiz creation, editing, and session management to support dynamic gameplay experiences</li>
            <li>Utilized Node.js and Express to develop robust server-side logic, managing user authentication, quiz state, and real-time data exchange</li>
          </ul>
        </div>
      </div>
    </div>
  )
}