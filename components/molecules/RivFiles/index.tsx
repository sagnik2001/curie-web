import React, { useEffect, useRef } from "react";
import { Rive, Fit, Layout } from "@rive-app/canvas";

// Define the type for the props
interface RivePageProps {
  file: string; // The Rive file URL
  customStyles?: React.CSSProperties; // Optional custom styles for the container
}

const RivePage: React.FC<RivePageProps> = ({ file, customStyles = {} }) => {
  // Use `HTMLCanvasElement` for the canvas ref and `HTMLDivElement` for the container ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Set canvas dimensions to match the parent container
    const container = containerRef.current;
    const canvas = canvasRef.current;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Initialize Rive
    const rive = new Rive({
      src: file, // Use the `file` prop for the Rive file URL
      canvas: canvas,
      autoplay: true,
      layout: new Layout({ fit: Fit.Contain }), // Adjust the fit mode as needed
    });

    // Cleanup on unmount
    return () => {
      rive.stop();
      rive.cleanup();
    };
  }, [file]); // Add `file` as a dependency to reinitialize if it changes

  return (
    <div
      ref={containerRef}
      style={customStyles} // Apply custom styles to the container
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default RivePage;