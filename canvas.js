
let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d')
// console.log(c);
// let sx = 500
// let sy = 500
// let x = 100
// let y = 100
// let dx = 15
// let dy = 15
// let sdx = 15
// let sdy = 15
// let rad = 50

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     c.fillRect(sx, sy, 100, 100)
//     c.beginPath()
//     c.arc(x,y,rad,0,Math.PI * 2, false)
//     c.stroke()
// // use this for an update function 
//     if (x + rad > innerWidth || x - rad < 0  ) {
//         dx = -dx
       
//     }
//     if( y + rad > innerHeight || y - rad < 0) {
//         dy = -dy
//     }
//     if (sx + rad > innerWidth || sx  < 0  ) {
//         sdx = -sdx
       
//     }
//     if( sy + rad > innerHeight || sy  < 0) {
//         sdy = -sdy
//     }
//     x += dx
//     y += dy
//     sx += sdx
//     sy += sdy
// }

// animate()

// multiples circles
function Circle(x, y, dx, dy, rad){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.draw = function (){
        c.beginPath()
        c.arc(this.x,this.y,this.rad,0,Math.PI * 2, false)
        c.stroke()
    }
}
const circles = []

for (let i = 0; i < 100; i++){
    const y = Math.floor(Math.random() * 100) + 1;
    const x = Math.floor(Math.random() * 100) + 1;
    const dx = Math.floor(Math.random() * 100) + 1;
    const dy = Math.floor(Math.random() * 100) + 1;
    const rad = Math.floor(Math.random() * 100) + 1;
    const circle = new Circle(x, y, dx, dy, rad)
    circles.push(circle)
    

}

console.log(circles);