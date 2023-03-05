// ? hacer una clase que obtenga los valolres de cordenadas velocidad y radio
// ? de un circulo despues generar los valores de manera aleatoria en un loop
// ? y registrarlos en un array

//todo crate a class to make an object to get the values of cordinates and velocity
//todo and radius make a loop to generate those values randomly and push them to an array

// this class will ask for the patamers needed x,y, dx & dy for velocity, and radius
//? esta clase pedira los parametros para x,y, da y dy para velocidad, y el radio
function Circle(x, y, dx, dy, rad){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.draw = function (){
        return x, y, dx, dy, rad
    }
}
// creat an empty array to push the circles
//? crear un array vacio donde registrar los circulos
const circles = []

// make a loop to create every parameter randomly then 
// create the circle and finally pushing it to an array
//? hacer un loop pare crear cada parametro del cirrculo aleatoriamente
//? luego crear el circulo con dichos parametros 
//? finalmente registrarlo en el array
for (let i = 0; i < 100; i++){
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * 100) + 1;
    const dx = Math.floor(Math.random() * 100) + 1;
    const dy = Math.floor(Math.random() * 100) + 1;
    const rad = Math.floor(Math.random() * 100) + 1;
    const circle = new Circle(x, y, dx, dy, rad)
    circles.push(circle)

}
console.log(circles);