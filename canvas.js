
var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext('2d')
console.log(c);
var sx = 500
var sy = 500
var x = 100
var y = 100
var dx = 15
var dy = 15
var sdx = 15
var sdy = 15
var rad = 50

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.fillRect(sx, sy, 100, 100)
    c.beginPath()
    c.arc(x,y,rad,0,Math.PI * 2, false)
    c.stroke()
    if (x + rad > innerWidth || x - rad < 0  ) {
        dx = -dx
       
    }
    if( y + rad > innerHeight || y - rad < 0) {
        dy = -dy
    }
    if (sx + rad > innerWidth || sx  < 0  ) {
        sdx = -sdx
       
    }
    if( sy + rad > innerHeight || sy  < 0) {
        sdy = -sdy
    }
    x += dx
    y += dy
    sx += sdx
    sy += sdy
}
animate()