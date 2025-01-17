import React, { useEffect, useState } from "react";
import useCircle from "./useCircle";

const AllDesgin = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      setCtx(ctx);
    }
  }, []);

  useCircle(ctx);

  return (
    <div>
      <canvas className="border border-black" ref={canvasRef}></canvas>
    </div>
  );
};

export default AllDesgin;
