
let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d')

function Circle(x, y, dx, dy, rad){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.draw = function (c){
        c.beginPath()
        c.arc(this.x,this.y,this.rad,0,Math.PI * 2, false)
        c.stroke()
    }
    this.movement = function() {
        
        if (this.x + this.rad > innerWidth || this.x - this.rad < 0  ) {
            dx = -dx
       
        }
        if( this.y + this.rad > innerHeight || this.y - this.rad < 0) {
            dy = -dy
        }
       
        this.x += dx
        this.y += dy
        this.draw(c)
    }
}
const circles = []

for (let i = 0; i < 100; i++){
    const rad = Math.floor(Math.random() * 50) ;
    const x = Math.floor(Math.random() * (window.innerWidth - rad * 2) + rad);
    const y = Math.floor(Math.random() * (window.innerHeight - rad *2) + rad );
    const dx = Math.floor(Math.random() * 5) + 1;
    const dy = Math.floor(Math.random() * 5) + 1;
    
  
    circles.push(new Circle(x, y, dx, dy, rad))
  


}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (let i = 0; i < circles.length; i++) {
        circles[i].movement();
        
    }

}

animate()

// multiples circles

console.log(circles);