export default function Navbar({}) {
  const navbarStyle = "nav-bar-links"

  return (
    <div className="fixed top-0 w-screen h-24 flex justify-between px-5 sm:px-10 md:px-20 lg:px-30 items-center bg-white z-50 shadow-md">
      <a href="#home" className="font-bold text-2xl md:text-4xl cursor-pointer transform transition duration-300 hover:scale-110">JA.</a>
      <div className="flex gap-3 sm:gap-5 md:gap-8 text-base md:text-xl font-semibold">
        <a href="#home" className={navbarStyle}>Home</a>
        <a href="#about" className={navbarStyle}>About</a>
        <a href="#skills" className={navbarStyle}>Skills</a>
        <a href="#projects" className={navbarStyle}>Projects</a>
        <a href="#contact-me" className={navbarStyle}>Contact</a>
      </div>
    </div>
  )
}