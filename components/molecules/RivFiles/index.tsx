import React, { useEffect, useRef, useState } from "react";
import { Rive, Fit, Layout } from "@rive-app/canvas";

interface RivePageProps {
  file: string;
  customStyles?: React.CSSProperties;
  playOnClick?: boolean;
  onClick ?: () => void;
}

const RivePage: React.FC<RivePageProps> = ({ file, customStyles = {}, playOnClick = false,onClick  }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const riveRef = useRef<Rive | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const rive = new Rive({
      src: file,
      canvas: canvas,
      autoplay: true,
      layout: new Layout({ fit: Fit.Contain }),
      stateMachines: "State Machine 1", // Replace with your State Machine name
      onLoad: () => {
        // Once the Rive file is loaded, you can access the State Machine inputs
        console.log("Rive file loaded");
      },
    });

    riveRef.current = rive;

    return () => {
      rive.stop();
      rive.cleanup();
    };
  }, [file]);

  const handleClick = () => {
    if (riveRef.current) {
      console.log("I'm clicked");
      const inputs = riveRef.current.stateMachineInputs("State Machine 1");
      if (inputs) {
        const clickInput = inputs.find((input) => input.name === "Click-Hover");
        if (clickInput) {
          clickInput.fire();
        }
      }
      onClick?.()
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (riveRef.current) {
      console.log("Mouse entered");
      const inputs = riveRef.current.stateMachineInputs("State Machine 1");
      if (inputs) {
        const hoverInput = inputs.find((input) => input.name === "In-Hover");
        if (hoverInput) {
          hoverInput.fire();
        }
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (riveRef.current) {
      console.log("Mouse left");
      const inputs = riveRef.current.stateMachineInputs("State Machine 1");
      if (inputs) {
        const outHoverInput = inputs.find((input) => input.name === "Out-Hover");
        if (outHoverInput) {
          outHoverInput.fire();
        }
      }
    }
  };

  return (
    <div
      ref={containerRef}
      style={customStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleClick}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", objectFit: 'contain' }} />
    </div>
  );
};

export default RivePage;