"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants";

type ProjectType = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  images: string[];
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openGallery = (project: ProjectType) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const closeGallery = () => setSelectedProject(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
    }
  };

  return (
    <main className="bg-white text-slate-900 min-h-screen selection:bg-black selection:text-white font-sans relative overflow-hidden">
      {/* Floating Socials - Disesuaikan agar tidak terlalu memakan tempat di HP */}
      <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col gap-4 z-40">
        <motion.a 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          href="https://github.com/bayadzka" target="_blank"
          className="bg-black text-white p-2.5 md:p-3 rounded-full hover:scale-110 transition shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </motion.a>
      </div>

      {/* Navbar - Padding dikurangi untuk HP */}
      <nav className="p-6 md:p-8 flex justify-between items-center max-w-6xl mx-auto">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-lg md:text-xl tracking-tighter text-black">BA.</motion.span>
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium text-slate-500">
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="https://wa.me/6289666613355" target="_blank" rel="noopener noreferrer" className="hover:text-black transition flex items-center gap-1.5 md:gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WA</span>
          </a>
        </div>
      </nav>

      {/* Hero - Font dibuat bertahap: 5xl (HP) -> 7xl (Tablet) -> 9xl (Laptop) */}
      <section className="px-6 md:px-8 pt-12 pb-20 md:pt-20 md:pb-32 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.85] text-black">
            Fullstack <br /> Developer<span className="text-slate-200">.</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed italic font-light">
            Halo, saya Bayu Azka. Saya membangun solusi digital lintas platform (Mobile & Web) dengan fokus pada integrasi sistem yang kompleks.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-8 py-20 md:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 md:mb-16 text-black">
            <div>
              <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-slate-400 mb-2 font-bold">Selected Works</h2>
              <p className="text-2xl md:text-3xl font-bold tracking-tight">Project Terpilih</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openGallery(project)}
              >
                <div className="aspect-[16/10] bg-white rounded-2xl md:rounded-[2rem] overflow-hidden mb-6 md:mb-8 relative shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                     <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                       Lihat {project.images.length} Gambar
                     </span>
                  </div>

                  {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-black/60 text-white backdrop-blur px-3 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest">
                      1 / {project.images.length}
                    </div>
                  )}

                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex justify-between items-start px-1 md:px-2">
                  <div className="w-full pr-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 md:px-3 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold mb-1 tracking-tight text-black">{project.title}</h3>
                    <p className="text-sm md:text-base text-slate-500 font-medium mb-3 md:mb-4">{project.category}</p>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                  <div className="hidden sm:block bg-white p-2 md:p-3 rounded-full border border-slate-100 shadow-sm group-hover:bg-black group-hover:text-white transition-all shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-12"
          >
            <button 
              onClick={closeGallery} 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition p-2 bg-white/10 rounded-full z-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {selectedProject.images.length > 1 && (
              <button 
                onClick={prevImage}
                className="absolute left-2 md:left-12 text-white/50 hover:text-white transition p-2 md:p-4 bg-white/5 hover:bg-white/10 rounded-full z-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            )}

            <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
              <motion.img
                key={currentImgIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedProject.images[currentImgIndex]}
                alt={selectedProject.title}
                className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain rounded-lg md:rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="mt-4 md:mt-6 flex flex-col items-center text-white px-4 text-center" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg md:text-2xl font-bold mb-1.5 md:mb-2">{selectedProject.title}</h3>
                <p className="text-white/70 text-xs md:text-sm max-w-2xl mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                  {selectedProject.description}
                </p>
                {selectedProject.images.length > 1 && (
                  <div className="bg-white/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/90">
                    IMAGE {currentImgIndex + 1} OF {selectedProject.images.length}
                  </div>
                )}
              </div>
            </div>

            {selectedProject.images.length > 1 && (
              <button 
                onClick={nextImage}
                className="absolute right-2 md:right-12 text-white/50 hover:text-white transition p-2 md:p-4 bg-white/5 hover:bg-white/10 rounded-full z-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer - Font WA dikecilkan untuk HP agar tidak tumpah */}
      <footer className="px-6 md:px-8 py-24 md:py-40 text-center bg-white border-t border-slate-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 font-medium mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Available for new opportunities</p>
          <a href="https://wa.me/6289666613355" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-black hover:text-slate-400 transition-colors break-words">
            +62 896-6661-3355
          </a>
          <div className="mt-12 md:mt-16 pt-8 flex justify-center gap-8 text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            <span>© 2026 BAYU AZKA</span>
          </div>
        </div>
      </footer>
    </main>
  );
}