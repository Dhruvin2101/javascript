// Hoisting => It basically means that the JS reads the code from top to bottom format so if we try to print the thing which is initialized later

console.log(a())
function a(){
    console.log("hello")
}