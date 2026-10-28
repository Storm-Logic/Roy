import { motion } from 'framer-motion';
import { experience, skills } from '../constants/myprojects';
export default function Skills() {
  return <section id="experience" className="relative bg-black text-white px-6 py-12 md:px-20 lg:px-32 flex flex-col items-center overflow-hidden"><div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
    <h2 className="text-center text-xs uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2"><span className="bg-white/70 h-px w-[25px]" />Skills & Experience<span className="bg-white/70 h-px w-[25px]" /></h2>
    <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl bg-white/5 px-4 py-6 rounded-lg">{skills.map(skill=><span key={skill} className="bg-black text-xs px-4 text-white/60 py-2 rounded-md hover:bg-zinc-800 hover:text-white transition">{skill}</span>)}</motion.div>
    <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-3xl w-full">{experience.map(item=><div key={item.role} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-2 py-4 border-b border-white/10 text-xs text-white/60"><strong className="font-normal">{item.role}</strong><span>{item.company}</span><span className="md:text-right">{item.duration}</span><p className="md:col-span-3 leading-relaxed">{item.details}</p></div>)}<div className="py-5 text-xs text-white/60"><strong className="block text-white/80 mb-2">Education</strong>Bachelor’s Degree, Computer Software Engineering · PSB Academy, Singapore · 2014–2018</div></motion.div>
  </section>;
}
