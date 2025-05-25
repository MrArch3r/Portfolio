import Tag from "../../components/Tag"

export default function Summary({}) {
  return (
    <>
      <div className="flex mb-6">
        <img className="w-10" src="/Portfolio/summary.svg" alt="Summary Icon" />
        <h2 className="text-3xl font-medium ml-3">Summary</h2>
      </div>
      <p className="mb-6">Hi, I'm Jordan, a computer science student based in Sydney.</p>
      <p className="mb-8">I'm passionate about building practical software solutions and am eager to grow as a software engineer by working on meaningful projects that challenge me to learn, collaborate, and innovate.</p>
      <div className="flex justify-center gap-4">
        <Tag name="Frontend"/>
        <Tag name="Backend"/>
        <Tag name="Machine Learning"/>
        <Tag name="Networks"/>
        <Tag name="Databases"/>
      </div>
    </>
  )
}