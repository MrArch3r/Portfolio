import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideControls from "../components/SlideControls";
import Summary from "./AboutSections/Summary";
import Education from "./AboutSections/Education";

const NUM_SLIDES = 2;

export default function About({}) {
  const [slideNum, setSlideNum] = useState(0);

  const slides = [
    () => <Summary />,
    () => <Education />,
  ];

  return (
    <div id="about" className="bg-white scroll-mt-24 flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-12">About Me</h1>
      <div className="relative max-w-[58rem] min-h-[22rem] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl mx-auto mt-12 mb-24 py-8 px-20 text-2xl">
        <SlideControls setSlideNum={setSlideNum} totalSlideCount={NUM_SLIDES} />

        <AnimatePresence mode="wait">
          <motion.div
            key={slideNum}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {slides[slideNum]()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}