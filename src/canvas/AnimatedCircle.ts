interface CircleConfig {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

class AnimatedCircle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  ctx: CanvasRenderingContext2D;
  constructor(config: CircleConfig, ctx: CanvasRenderingContext2D) {
    this.x = config.x;
    this.y = config.y;
    this.dx = config.dx;
    this.dy = config.dy;
    this.radius = config.radius;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#aa00ff";
    this.ctx.fill();
    this.ctx.stroke();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx *= -1;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy *= -1;
    }
    this.y += this.dy;
    this.x += this.dx;
  }
}



export const runAnimatedCircle = (ctx: CanvasRenderingContext2D) => {
  const circles: AnimatedCircle[] = [];
  for (let i = 0; i < 100; i++) {
    const config: CircleConfig = {
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      radius: 40,
    };
    circles.push(new AnimatedCircle(config, ctx));
  }

  const animate = () => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach((circle: AnimatedCircle) => {
      circle.draw();
      circle.update();
    });
    requestAnimationFrame(animate);
  };
  animate();
};
