import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

export const myProjects = [
  {
    id: 1,
    title: "AgroConnect Africa",
    desc: "Plateforme panafricaine utilisant l'IA pour optimiser les rendements agricoles.",
    fullDesc: "Une solution innovante connectant les agriculteurs au marché B2B. Intègre de la Computer Vision pour le diagnostic des cultures et des outils d'optimisation basés sur l'intelligence artificielle.",
    logo: "/assets/logos/react.svg", 
    href: "https://github.com/Thiaba03/projet-data",
    spotlight: "/assets/projects/agri.jpg",
    tags: [
      { name: "React Native" },
      { name: "Laravel" },
      { name: "AI/Computer Vision" },
      { name: "PostgreSQL" }
    ]
  },
  {
    id: 2,
    title: "SentimentAI Analyse",
    desc: "Analyse automatique de sentiments et scores thématiques via IA.",
    fullDesc: "Plateforme intelligente de gestion d'avis clients. Utilise le Natural Language Processing (NLP) pour générer des scores de satisfaction et analyser les tendances thématiques automatiquement.",
    logo: "/assets/logos/laravel.svg",
    href: "https://github.com/votre-utilisateur/sentiment-ai-laravel",
    spotlight: "/assets/projects/img2.jpg",
    tags: [
      { name: "Laravel 12" },
      { name: "Vue.js 3" },
      { name: "AI" },
      { name: "PostgreSQL" }
    ]
  },
  {
    id: 3,
    title: "Classification SVM",
    desc: "Machine Learning appliqué à la classification de données complexes.",
    fullDesc: "Projet de recherche et implémentation d'algorithmes Support Vector Machines (SVM). Inclut le prétraitement des données, la réduction de dimensionnalité et l'optimisation des hyperparamètres.",
    logo: "/assets/logos/python.svg",
    href: "Projet svm.pdf",
    spotlight: "/assets/projects/img4.jpg",
    tags: [
      { name: "Python" },
      { name: "Scikit-learn" },
      { name: "Data Science" },
      { name: "SVM" }
    ]
  },
  {
    id: 4,
    title: "Analyse Financière",
    desc: "Exploration des marchés financiers et des monnaies numériques.",
    fullDesc: "Analyse approfondie de l'évolution des marchés financiers mondiaux et de l'impact disruptif des cryptomonnaies. Réalisé avec Python pour la visualisation de données complexes.",
    logo: "/assets/logos/python.svg",
    href: "Financier & Évolution des Monnaies Numériques Proget python.pdf",
    spotlight: "/assets/projects/img5.jpg",
    tags: [
      { name: "Python" },
      { name: "Financial Analysis" },
      { name: "AI" },
      { name: "Data Viz" }
    ]
  },
  {
    id: 5,
    title: "RBNB Collaborative",
    desc: "Pilotage de projet avec méthodologies Agile et Jira.",
    fullDesc: "Gestion et optimisation d'une plateforme d'hébergement collaborative. Application rigoureuse des cycles Agile, planification par diagrammes de Gantt et suivi de production sous Jira.",
    logo: "/assets/logos/jira.svg",
    href: "rbnb.pdf",
    spotlight: "/assets/projects/img6.jpg",
    tags: [
      { name: "Jira" },
      { name: "Agile" },
      { name: "Gantt" },
      { name: "Management" }
    ]
  }
];

// --- COMPOSANT CARTE PROJET ---
const ProjectCard = ({ project, setPreview, onOpenDetails }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setPreview(project.spotlight)}
      onMouseLeave={() => { x.set(0); y.set(0); setPreview(null); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex-shrink-0 w-[30rem] h-[24rem] rounded-[3rem] bg-violet-950/20 backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-500 group overflow-hidden shadow-2xl shadow-purple-900/10"
    >
      <div className="relative z-10 p-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start" style={{ transform: "translateZ(50px)" }}>
          <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20">
            <img src={project.logo} alt="logo" className="w-8 h-8 object-contain" />
          </div>
          
          <button 
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-4 transition-all duration-500 group-hover:translate-x-[-5px] cursor-pointer z-50 pointer-events-auto"
          >
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
               <img src={project.logo} alt="mini-logo" className="w-6 h-6 object-contain grayscale brightness-200" />
            </div>

            <div className="p-2.5 rounded-full bg-violet-500/20 border border-violet-500/30 group-hover:bg-violet-500 group-hover:text-white transition-all shadow-lg shadow-violet-500/40">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </div>

        <div style={{ transform: "translateZ(40px)" }} className="pointer-events-none">
          <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-4">
            {project.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">
              {project.title.split(' ').slice(1).join(' ')}
            </span>
          </h3>
          <p className="text-gray-300 font-normal leading-relaxed line-clamp-2 max-w-[90%] tracking-tight">
            {project.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pointer-events-none" style={{ transform: "translateZ(30px)" }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag.name} className="px-3 py-1 rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-100 text-[10px] font-bold uppercase tracking-widest">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-40" />
    </motion.div>
  );
};

// --- COMPOSANT PRINCIPAL ---
const Portfolio = () => {
  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // LOGIQUE DE SCROLL HORIZONTAL
  const scrollSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="min-h-screen bg-[#05020a] text-white font-sans selection:bg-violet-500/30">
      
      {/* SECTION TITRE */}
      <section className="h-[40vh] flex items-end px-10 md:px-20 pb-10">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Works</span>
        </h2>
      </section>

      {/* CONTENEUR DU SCROLL HORIZONTAL */}
      <section ref={scrollSectionRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20">
            {myProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                setPreview={setPreview} 
                onOpenDetails={setSelectedProject} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* MODALE DÉTAILS */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-violet-950/40 border border-violet-500/20 backdrop-blur-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-3xl"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedProject.spotlight} className="w-full h-full object-cover" alt="" />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-violet-300 hover:text-white transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <img src={selectedProject.logo} className="w-12 h-12 mb-6" alt="" />
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{selectedProject.fullDesc}</p>
                
                <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
                  {selectedProject.tags.map(tag => (
                    <span key={tag.name} className="whitespace-nowrap px-4 py-2 rounded-xl bg-violet-500/10 text-violet-300 text-xs font-bold border border-violet-500/20 uppercase tracking-widest">
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                <a href={selectedProject.href} className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black uppercase tracking-widest hover:scale-[1.02] transition-all">
                  Visiter le projet
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .shadow-3xl { box-shadow: 0 0 100px -20px rgba(139, 92, 246, 0.4); }
      `}</style>
    </div>
  );
};

export default Portfolio;