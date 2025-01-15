/**
 *
 * @returns Object
 * Line
 * Rectangle
 * Cirle
 *
 *
 * context.beginPath()->start a Path
 */

export const Triangel = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(10, 100);
  ctx.lineTo(200, 400);
  ctx.lineTo(10, 400);

  //   ctx.closePath();
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.strokeStyle = "red";
  ctx.stroke();
};

export const Circle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
) => {
  /**
   * If you want to draw a circle on the canvas, you can use the arc() method
   * arc(x, y, radius, start, stop)
   */
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();

  // function animate() {
  // requestAnimationFrame(animate);

  // }
  // animate();
};

export const Rectangle = (ctx: CanvasRenderingContext2D) => {
  /**
   * moveTo(x,y): It is used to define the starting point of the line.
   * lineTo(x,y): It is used to define the ending point of the line.
   */
  ctx.beginPath();
  ctx!.fillStyle = "#0055A4";
  ctx!.fillRect(0, 0, 40, 90);
  ctx!.fillStyle = "#FFFFFF";
  ctx!.fillRect(40, 0, 40, 90);
  ctx!.fillStyle = "#EF4135";
  ctx!.fillRect(80, 0, 40, 90);
  console.log("Is it ones call?");
};
