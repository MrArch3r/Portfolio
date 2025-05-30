export default function Introduction({}) {
  const iconStyle = "h-10 cursor-pointer opacity-80 hover:opacity-100 transform transition duration-300 hover:scale-110";

  return (
    <div id="home" style={{ height: 'calc(100vh - 6rem)' }} className="bg-blue-50 flex items-center scroll-mt-24 px-30">
      <div className="flex-3 w-full ml-30 -mt-20">
        <h1 className="text-black font-bold text-4xl mb-2">Hello, I'm Jordan Archer</h1>
        <p className="text-xl mb-2">A </p>
        <div className="flex gap-2 relative -left-1">
          <a href="https://www.linkedin.com/in/archerjordan/" target="_blank" rel="noopener noreferrer">
            <img className={iconStyle} src="/Portfolio/linkedin.svg" alt="Linked in icon" />
          </a>
          <a href="https://github.com/MrArch3r" target="_blank" rel="noopener noreferrer">
            <img className={iconStyle} src="/Portfolio/github.svg" alt="Github icon" />
          </a>
          <a href="https://www.facebook.com/jordan.archer.210869" target="_blank" rel="noopener noreferrer">
            <img 
              className="h-10 cursor-pointer scale-90 opacity-80 hover:opacity-100 transform transition duration-300 hover:scale-100" 
              src="/Portfolio/facebook.svg" 
              alt="Facebook icon" />
          </a>
          <a href="https://www.instagram.com/mrarch3r/" target="_blank" rel="noopener noreferrer">
            <img className={iconStyle} src="/Portfolio/instagram.svg" alt="Instagram icon" />
          </a>
        </div>
      </div>

      <img
        className="flex-2 h-[95%] p-22 -mt-20"
        src="/Portfolio/homeBlue.svg"
        alt="Illustration of life management"
        draggable="false"
      />

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col animate-bounce">
        <div className="text-[#888888] text-xl">Scroll Down</div>
        <img className="h-10 relative -top-2" src="/Portfolio/down.svg" alt="Down Icon" />
      </div>
    </div>
  )
}