import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (loadedContainer) => {
    setContainer(loadedContainer);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#331D2C", // Background color
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disable default onClick behavior
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4, // Number of particles to add
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const handleDocumentClick = (event) => {
    // Check if the click is on the background
    const isBackgroundClick = !event.target.closest("button, a, input, .card");

    if (isBackgroundClick && container) {
      container.interactivity.modes.push.quantity = 4; // Number of particles to add
      container.interactivity.handleClickMode("push");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [container]);

  return (
    <Particles
      id={props.id} // Pass unique ID for the particles container
      init={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
