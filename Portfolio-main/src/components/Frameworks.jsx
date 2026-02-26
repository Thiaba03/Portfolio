import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // Liste interne (plus proche du centre)
  const innerSkills = [
    "python", 
    "csharp", 
    "dotnet", 
    "postgresql", // SQL
    "react"
  ];

  // Liste externe
  const outerSkills = [
    "pandas",
    "powerbi",
    "javascript",
    "tailwindcss",
    "github",
    "microsoftazure",
    "sqlite",
    "scikitlearn"
  ];

  return (
    <div className="relative flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden">
      {/* Cercle Intérieur */}
      <OrbitingCircles iconSize={40} radius={60} speed={1}>
        {innerSkills.map((skill, index) => (
          <Icon key={`inner-${index}`} name={skill} />
        ))}
      </OrbitingCircles>

      {/* Cercle Extérieur */}
      <OrbitingCircles iconSize={30} radius={120} reverse speed={0.6}>
        {outerSkills.map((skill, index) => (
          <Icon key={`outer-${index}`} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ name }) => (
  <img 
    src={`https://img.icons8.com/color/96/${name}.png`} // Utilisation d'Icons8 (plus fiable pour les couleurs)
    alt={name}
    className="duration-300 rounded-full hover:scale-150 transition-transform bg-white/10 p-1 shadow-lg"
    style={{ width: '40px', height: '40px' }}
    onError={(e) => {
        // Fallback si l'image couleur échoue, on tente SimpleIcons blanc
        e.target.src = `https://cdn.simpleicons.org/${name}/white`;
    }}
  />
);