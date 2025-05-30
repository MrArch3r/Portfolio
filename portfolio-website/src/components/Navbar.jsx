export default function Navbar({}) {
  const navbarStyle = "nav-bar-links"

  return (
    <div className="fixed top-0 w-full h-24 flex justify-between px-30 items-center bg-white z-50 shadow-md">
      <a href="#home" className="font-bold text-4xl cursor-pointer transform transition duration-300 hover:scale-110">JA.</a>
      <div className="flex gap-8 text-xl font-semibold">
        <a href="#home" className={navbarStyle}>Home</a>
        <a href="#about" className={navbarStyle}>About</a>
        <a href="#skills" className={navbarStyle}>Skills</a>
        <a href="#projects" className={navbarStyle}>Projects</a>
        <a href="#contact-me" className={navbarStyle}>Contact Me</a>
      </div>
    </div>
  )
}