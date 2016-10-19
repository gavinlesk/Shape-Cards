// export default class Surface {
//   constructor(canvasContext) {
//     this.ctx = canvasContext;
//   }

//   calcAngleTarget(origin, length, angle) {
//     return {
//       x: origin.x + length * Math.cos(Math.PI * angle / 180),
//       y: origin.y + length * Math.sin(Math.PI * angle / 180)
//     };
//   }

//   set fillStyle  (val) {
//     this.ctx.fillStyle = val;
//   }

//   set strokeStyle (val) {
//     this.ctx.strokeStyle = val;
//   }

//   fillRect(x, y, length, width) {
//     this.ctx.fillRect(x, y, length, width);
//   }

//   toRadians(deg) {
//     return deg * Math.PI / 180
//   }

//   lineToPoint(p) {
//     this.ctx.lineTo(point.x, point.y);
//   }

//   moveToPoint(p) {
//     this.ctx.moveTo(point.x, point.y);
//   }

//   drawCircle(origin, radius) {
//     this.ctx.beginPath();
//     this.ctx.arc(origin.x, origin.y, radius, 0, 2 * Math.PI, false);
//     this.ctx.lineWidth = 1
//     this.ctx.strokeStyle = Colors.darkBlue;
//     this.ctx.stroke();
//     this.ctx.closePath();
//   }

//   drawRegularPolygon(numberOfSides, origin, sideLength) {
//     this.ctx.beginPath();
//     this.ctx.moveTo(origin.x + sideLength * Math.cos(0), origin.y + sideLength * Math.sin(0));

//     for (var i = 1; i <= numberOfSides; i += 1) {
//       this.ctx.lineTo(origin.x + sideLength * Math.cos(i * 2 * Math.PI / numberOfSides),
//         origin.y + sideLength * Math.sin(i * 2 * Math.PI / numberOfSides));
//     }

//     this.ctx.strokeStyle = Colors.black
//     this.ctx.lineWidth = 5;
//     this.ctx.stroke();
//     this.ctx.fillStyle = Colors.lime;
//     this.ctx.fill();
//     this.closePath();
//   }

 

// }