"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    /**
     * w-screen et h-screen forcent la section à prendre toute la fenêtre.
     * margin-0 et padding-0 (via reset CSS) sont essentiels sur le body.
     */
    <section className="relative w-screen h-screen overflow-hidden flex items-center justify-center md:items-center md:justify-start">
      
      {/* Background radial (Positionné en absolute pour couvrir tout le fond) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ParallaxBackground />
      </div>
      
      {/* Texte Hero : Positionné au-dessus du Canvas avec z-20 */}
      <div className="relative z-20 pointer-events-none px-6 md:px-20">
        <HeroText />
      </div>

      {/* Scène 3D : inset-0 et w/h full pour coller aux bords de la section */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Canvas 
          camera={{ position: [0, 1, 3] }} 
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]} // Optimise la résolution pour tous les écrans
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ec4899" />
            
            <Float rotationIntensity={1.5} floatIntensity={2}>
              <Astronaut
                scale={isMobile ? 0.23 : 0.4} 
                position={isMobile ? [0, -1.5, 0] : [1, -0.5, 0]} 
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 8, 1 + state.mouse.y / 8, 3],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default Hero;