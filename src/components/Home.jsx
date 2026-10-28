import portrait from '../images/roy-portrait.png';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

export default function Home() {
  return <div className="relative bg-black text-white">
    <video className="absolute inset-0 z-30 w-full h-full object-cover pointer-events-none" src="/output.webm" autoPlay muted loop playsInline />
    <div className="absolute inset-0 z-40 bg-black/50" />
    <nav className="relative z-40 h-[42px] flex justify-between bg-neutral-950 items-center px-4 md:px-60 border-b border-neutral-800">
      <a href="#top" className="text-xs font-semibold tracking-wider">Roy Wang</a>
      <div className="flex items-center gap-6 text-[11px] text-white/50"><a href="#projects" className="hover:text-white">Projects</a><a href="#about" className="hover:text-white">About</a><a href="#experience" className="hover:text-white">Experience</a><a href="#contact" className="hover:text-white">Contact</a></div>
    </nav>
    <div id="top" className="relative z-50 flex flex-col items-center justify-center px-4 pt-24 pb-32 text-center">
      <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={portrait} alt="Roy Wang portrait" className="h-28 w-28 rounded-full border border-white/40 object-cover shadow-md shadow-white/30" />
      <motion.p className="text-white/70 text-[10px] mt-4 flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}><motion.span className="text-green-500 text-base" animate={{ scale: [1, 1.4, 1], opacity: [1, .4, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>●</motion.span>Singapore · Remote</motion.p>
      <motion.h1 className="text-3xl md:text-4xl mt-2 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>Roy <span className="italic font-light text-gray-400 tracking-[-0.14em]">Wang</span></motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="text-gray-400 mt-2 text-xs">AI Engineer & Full-Stack Developer | Python | Automation | LLMs</motion.p>
      <motion.a href="mailto:smilingknight777@gmail.com" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }} className="mt-5 text-xs text-gray-300 hover:text-white">smilingknight777@gmail.com</motion.a>
      <a href="#contact"><motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="flex justify-center items-center mt-6 p-3 bg-black text-white rounded-full text-xs font-light gap-1 border border-gray-800 shadow-sm shadow-white"><FaArrowRight className="-rotate-45" /> Contact Me</motion.span></a>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><IoIosArrowDown className="mt-10 text-white text-xl" /></motion.div>
    </div>
  </div>;
}
