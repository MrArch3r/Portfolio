const mod = (n, m) => ((n % m) + m) % m;

export default function SlideControls({ setSlideNum, totalSlideCount }) {
  const arrowStyle = "absolute top-1/2 transform -translate-y-1/2 w-10 cursor-pointer opacity-15 hover:opacity-40 transform transition duration-300 hover:scale-110";

  const updateSlide = (num) => {
    setSlideNum((prev) => mod(prev + num, totalSlideCount));
  }

  return (
    <>
      <img
        className={`${arrowStyle} left-[12px]`}
        src="/Portfolio/left-arrow.svg"
        alt="Left Arrow Icon"
        onClick={() => updateSlide(-1)}
      />
      <img
        className={`${arrowStyle} right-[12px]`}
        src="/Portfolio/right-arrow.svg"
        alt="Right Arrow Icon"
        onClick={() => updateSlide(1)}
      />
    </>
  )
}