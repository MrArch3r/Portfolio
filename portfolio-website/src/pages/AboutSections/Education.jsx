import Tag from "../../components/Tag"

export default function Education({}) {
  return (
    <>
      <div className="flex">
        <img className="w-14 relative -left-2 -top-2" src="/Portfolio/education.svg" alt="Education Icon" />
        <h2 className="text-3xl font-medium">Education</h2>
      </div>
      <p className="text-xl text-[#666666]">3rd year Computer Science at UNSW | WAM: 82</p>
      <div className="flex mt-4">
        <div className="flex-1">
          <h3 className="mb-6">Key Courses</h3>
          <div className="flex flex-wrap gap-2">
            <Tag name="DSA" colour="bg-yellow-100"/>
            <Tag name="OOP" colour="bg-yellow-100"/>
            <Tag name="Algorithms" colour="bg-yellow-100"/>
            <Tag name="Databases" colour="bg-yellow-100"/>
            <Tag name="Networks" colour="bg-yellow-100"/>
            <Tag name="Frontend" colour="bg-yellow-100"/>
            <Tag name="ML" colour="bg-yellow-100"/>
            <Tag name="Web Development" colour="bg-yellow-100"/>
          </div>
        </div>
        <div className="flex-1 ml-6">
          <h3 className="mb-6">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Tag name="C" colour="bg-green-100"/>
            <Tag name="JavaScript" colour="bg-green-100"/>
            <Tag name="Python" colour="bg-green-100"/>
            <Tag name="Java" colour="bg-green-100"/>
            <Tag name="SQL" colour="bg-green-100"/>
            <Tag name="React" colour="bg-green-100"/>
          </div>
        </div>
      </div>
    </>
  )
}