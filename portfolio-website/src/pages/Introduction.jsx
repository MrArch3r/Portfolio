export default function Introduction({}) {
  return (
    <div style={{ height: 'calc(100vh - 6rem)' }} className="bg-[#eff6ff] flex items-center">
      <div className="flex-3 w-full ml-30">
        <h1 className="text-black font-bold text-4xl">Hello, I'm Jordan Archer</h1>
        <p className="text-xl">A </p>
      </div>

      <img
        className="flex-2 h-[100%] p-22" 
        src="/Portfolio/homeBlue.svg" 
        alt="Illustration of life management"
        draggable="false"
      />
    </div>
  )
}