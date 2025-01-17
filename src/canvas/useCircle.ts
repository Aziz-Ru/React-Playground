import { useEffect, useRef, useState } from "react";
import { AnimatedCircle, CircleConfig } from "./AnimatedCircle";

const useCircle = (ctx: CanvasRenderingContext2D | null) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const circlesRef = useRef<AnimatedCircle[]>([]);
  const animationRef = useRef<number | null>(null);
  useEffect(() => {
    if (ctx == null) return;

    if (circlesRef.current.length == 0) {
      for (let i = 0; i < 100; i++) {
        const config: CircleConfig = {
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          radius: 5,
        };
        circlesRef.current.push(new AnimatedCircle(config, ctx));
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      circlesRef.current.forEach((circle: AnimatedCircle) => {
        circle.draw();
        circle.update(mousePos.x, mousePos.y);
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    if (animationRef.current == null) {
      animate();
    }

    const handleMouseMove = (event: MouseEvent) => {
      //   const rect = ctx.canvas.getBoundingClientRect();
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    ctx.canvas.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      ctx.canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [ctx, mousePos]);
};

export default useCircle;
