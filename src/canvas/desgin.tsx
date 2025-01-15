import React, { useEffect } from "react";
import { runAnimatedCircle } from "./AnimatedCircle";

const AllDesgin = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    // Rectangle(ctx);
    // Circle(ctx, 200, 100, 50);
    // for (let i = 0; i < 10; i++) {
    //   AnimatedCircle(ctx);
    // }
    // AnimatedCircle(ctx);
    
    runAnimatedCircle(ctx);

    // for (let i = 0; i < 100; i++) {
    //   const x = Math.random() * window.innerWidth;
    //   const y = Math.random() * window.innerHeight;
    //   Circle(ctx, x, y, 50);
    // }
    // Triangel(ctx);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvasRef.current.getContext("2d");
    draw(ctx!);
    return () => ctx?.clearRect(0, 0, canvas.width, canvas.height);
  });

  return (
    <div>
      <canvas className="border border-black" ref={canvasRef}></canvas>
    </div>
  );
};

export default AllDesgin;
