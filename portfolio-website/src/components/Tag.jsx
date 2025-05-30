export default function Tag({ name, colour="bg-blue-100" }) {
  return (
    <div className={`${colour} rounded-2xl px-4 text-lg sm:text-xl`}>
      {name}
    </div>
  )
}