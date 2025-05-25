import { useState } from "react"
import SlideControls from "../components/SlideControls"
import Summary from "./AboutSections/Summary";
import Education from "./AboutSections/Education";

const NUM_SLIDES = 2;

export default function About({}) {
  const [slideNum, setSlideNum] = useState(0);

  return (
    <div id="about" className="bg-white scroll-mt-24 flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-12">About Me</h1>
      <div className="relative w-[48%] min-h-[22rem] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl mx-auto mt-12 mb-24 py-8 px-20 text-2xl">
        <SlideControls setSlideNum={setSlideNum} totalSlideCount={NUM_SLIDES} />
        {slideNum === 0 ? (
          <Summary />
        ) : (
          <Education />
        )}
      </div>
    </div>
  )
}