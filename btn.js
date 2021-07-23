var speedTestInterval = setInterval(startSpeedTest, 300); 
function startSpeedTest() {
let randomNumber = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed; //Generates a random whole number
document.getElementById('speed-value').innerText=randomNumber; //Sets the generated random number
document.getElementById('speed-units').innerText='Mbps';
}
setTimeout(function(){
 clearInterval(speedTestInterval); //Stops the loop
}, 15000);