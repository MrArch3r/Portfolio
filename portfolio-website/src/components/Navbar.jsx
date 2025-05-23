export default function Navbar({}) {
  return (
    <div className="fixed top-0 w-full h-24 flex justify-between px-30 items-center bg-white z-50 shadow-md">
      <div className="font-bold text-4xl">JA.</div>
      <div className="flex gap-8 text-xl font-semibold">
        <div>Home</div>
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact Me</div>
      </div>
    </div>
  )
}