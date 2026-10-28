import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
export default function About() {
  return <section id="about" className="bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-center gap-20 px-4 py-12 md:px-20 border-y border-white/5" style={{backgroundColor:'#000',backgroundImage:'linear-gradient(#050505 1px, transparent 1px), linear-gradient(90deg, #050505 1px, transparent 1px)',backgroundSize:'12px 12px'}}>
    <div><motion.h2 initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="text-3xl font-semibold text-gray-200">More about <span className="italic font-light text-gray-400 tracking-[-0.14em]">myself</span></motion.h2>
    <motion.p initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="max-w-96 text-white/60 text-xs md:text-sm mt-6 leading-relaxed">I’m Roy, an AI engineer and full-stack developer in Singapore. I build AI-powered web applications, Python and FastAPI backends, APIs, and automation workflows. My work includes LLM integrations, React and Next.js interfaces, data processing, model evaluation, and computer vision.</motion.p>
    <a href="#contact" className="text-white/60 inline-flex items-center gap-2 px-4 py-2 mt-6 border border-neutral-700 rounded-full text-xs bg-neutral-900 hover:text-white"><FaArrowRight className="-rotate-45" />Contact Me</a></div>
    <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="w-[350px] max-w-full md:w-[400px] rounded-xl overflow-hidden shadow-[0_20px_50px_#ffffff30]"><div className="h-[200px] md:h-[250px] flex flex-col justify-center p-8 border border-white/15 bg-gradient-to-br from-neutral-800 to-black"><span className="text-xs uppercase tracking-widest text-white/40">Focus</span><p className="mt-4 text-2xl font-light">AI applications.<br/>Practical automation.<br/>Complete products.</p></div></motion.div>
  </section>;
}
