export interface CircleConfig {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  baseRadius?: number;
  color: string;
}

export class AnimatedCircle {
  private maxRadius = 40;
  private minRadius = 10;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  ctx: CanvasRenderingContext2D;
  color: string;
  baseRadius: number;
  constructor(config: CircleConfig, ctx: CanvasRenderingContext2D) {
    this.x = config.x;
    this.y = config.y;
    this.dx = config.dx;
    this.dy = config.dy;
    this.radius = config.radius;
    this.ctx = ctx;
    this.baseRadius = config.baseRadius || config.radius;
    this.color = config.color;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.stroke();
  }

  update(mouseX: number, mouseY: number) {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx *= -1;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy *= -1;
    }

    this.y += this.dy;
    this.x += this.dx;
    if (mouseX != 0 && mouseY != 0) {
      if (
        Math.abs(this.x - mouseX) < 50 &&
        Math.abs(this.y - mouseY) < 50 &&
        this.radius < this.maxRadius
      ) {
        this.radius += 1;
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }
    }
  }
}

// export const runAnimatedCircle = (
//   ctx: CanvasRenderingContext2D,
//   radius: number,
//   mousePos: { x: number; y: number }
// ) => {
//   const circles: AnimatedCircle[] = [];

//   for (let i = 0; i < 100; i++) {
//     const config: CircleConfig = {
//       x: Math.random() * innerWidth,
//       y: Math.random() * innerHeight,
//       dx: (Math.random() - 0.5) * 2,
//       dy: (Math.random() - 0.5) * 2,
//       radius: radius,
//     };
//     circles.push(new AnimatedCircle(config, ctx));
//   }

//   const animate = () => {
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     circles.forEach((circle: AnimatedCircle) => {
//       circle.draw();
//       circle.update(mousePos.x, mousePos.y);
//     });
//     requestAnimationFrame(animate);
//   };
//   animate();
// };
