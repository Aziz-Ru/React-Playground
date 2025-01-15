import { Circle } from "./Object";

export const AnimatedCircle = (ctx: CanvasRenderingContext2D) => {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let xIncrease = (Math.random() - 0.5) * 4;
  let yIncrease = (Math.random() - 0.5) * 4;

  const radius = 40;
  const animate = () => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    if (x + radius > innerWidth || x - radius < 0) {
      xIncrease *= -1;
    }
    if (y + radius > innerHeight || y - radius < 0) {
      yIncrease *= -1;
    }
    y += yIncrease;
    x += xIncrease;

    Circle(ctx, x, y, radius);
    requestAnimationFrame(animate);
  };
  animate();
};
