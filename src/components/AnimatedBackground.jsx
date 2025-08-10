 import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0, // behind hero content
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: false }, // stays inside Hero section
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            color: { value: ["#00b4d8", "#90e0ef"] },
            links: {
              enable: true,
              distance: 150,
              color: "#48cae4",
              opacity: 0.6,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 1.5,
              random: true,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
              outModes: { default: "bounce" },
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            size: {
              value: { min: 1, max: 4 },
            },
            shape: { type: "circle" },
            collisions: { enable: true },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.9 } },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
