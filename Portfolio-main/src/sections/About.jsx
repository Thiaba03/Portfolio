import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  // Style Glassmorphism
  const glassCard = `
    relative overflow-hidden rounded-[2.5rem] 
    bg-[#111111]/40 backdrop-blur-xl 
    border border-white/10 
    hover:border-violet-500/50 transition-all duration-500 shadow-2xl
    before:absolute before:inset-0 before:bg-gradient-to-br before:from-violet-500/10 before:to-transparent before:opacity-50
  `;

  return (
    <section className="w-full min-h-screen bg-[#050505] relative overflow-hidden flex items-center justify-center" id="about">
      {/* Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Content Wrapper */}
      <div className="c-space w-full py-24 z-10">
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 text-gradient">Me</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[18rem] mt-12 w-full">
          
          {/* Grid 1: Bio */}
          <div className={`${glassCard} md:col-span-4 flex items-end p-8`}>
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.3] -right-[5rem] -top-[2rem] md:scale-[1.8] opacity-30 mix-blend-lighten pointer-events-none"
              alt="coding"
            />
            <div className="z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bonjour, moi c'est Thiaba</h3>
              <p className="text-violet-100/70 text-base md:text-lg leading-relaxed max-w-2xl">
                As a student developer with a 3-year technical background, I enjoy building web solutions from front to back.
                Currently specializing in <span className="text-violet-400 font-semibold">Data Science</span>, I am bridging the gap between Software Engineering and Data Analytics.
              </p>
            </div>
          </div>

          {/* Grid 2: Code is Craft */}
          <div className={`${glassCard} md:col-span-2`}>
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full relative">
              <p className="absolute text-5xl font-black text-white/5 uppercase select-none">CRAFT</p>
              <Card style={{ rotate: "75deg", top: "30%", left: "10%" }} text="GRASP" containerRef={grid2Container} />
              <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} />
              <Card style={{ rotate: "90deg", bottom: "20%", left: "65%" }} text="Patterns" containerRef={grid2Container} />
              <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP" containerRef={grid2Container} />
              <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
              <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/blazor-pink.png" containerRef={grid2Container} />
            </div>
          </div>

          {/* Grid 3: Time Zone */}
          <div className={`${glassCard} md:col-span-3 p-8 flex flex-col justify-between`}>
            <div className="z-10">
              <p className="text-xl font-bold text-white">Time Zone</p>
              <p className="text-violet-200/60 font-mono text-sm mt-2">Based in Paris — Available for remote</p>
            </div>
            <div className="relative h-40 w-full flex items-center justify-center scale-110">
              <Globe />
            </div>
          </div>

          {/* Grid 4: Contact CTA */}
          <div className={`${glassCard} md:col-span-3 p-8 flex flex-col items-center justify-center text-center`}>
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent" />
            <p className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10">Ready to collaborate?</p>
            <div className="relative z-10 scale-110">
              <CopyEmailButton />
            </div>
          </div>

          {/* Grid 5: Tech Stack */}
          <div className={`${glassCard} md:col-span-6 p-8 flex flex-col md:flex-row items-center gap-8`}>
            <div className="z-10 flex-1">
              <p className="text-xl md:text-2xl font-bold text-white mb-4 italic uppercase tracking-tighter">Tech Stack</p>
              <p className="text-violet-200/60 text-sm md:text-base max-w-md">Developing robust applications with a focus on Data.</p>
            </div>
            <div className="relative flex-1 w-full h-full flex items-center justify-center">
              <div className="scale-90 md:scale-110">
                <Frameworks />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;