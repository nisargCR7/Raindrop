var streams = [] ;
var symbolSize = 26;


function setup() {
  createCanvas(
  window.innerWidth,
  window.innerHeight );
  
var x = 0;  
var y = random(-1000,0);
for (var i =0; i<=  width / symbolSize ;i++){

var stream = new  Stream();
stream.generateSymbols(x,y);
streams.push(stream);
x += symbolSize;
}
  
  textSize(symbolSize)
}


function draw() {
  background(0);
  
streams.forEach(function(stream){

stream.render();
});
  
  
  
  
}
function Symbol1(x,y,speed) {
  
  this.x = x;
  this.y = y;
  this.value;      //change ab ///
  this.speed = speed;
  this.switchInterval = round( random(2,40)  ) ; 
  
  
  
this.setToRandomSymbol = function(){
if (frameCount % this.switchInterval == 0){
this.value = String.fromCharCode(

  0x30A0 + round( random(0,96)  )

);    
 }


} 
  
  
this.rain = function(){


 this.y = (this.y >= height) ? 0 :this.y += this.speed;

}
  
  
}


function Stream() {
  this.symbols = []; 
  this.totalSymbols  = round( random(5,30)  );
  this.speed = random(5,20);

this.generateSymbols = function(x,y){

for (var i =0; i<= this.totalSymbols;i++){

  symbol = new Symbol1(x,y,this.speed)
  symbol.setToRandomSymbol();
  this.symbols.push(symbol);
y -= symbolSize;

}

}

this.render = function(){
this.symbols.forEach(function(symbol){
  fill(0,225,70)
  text(symbol.value,symbol.x,symbol.y)
  symbol.rain();
  symbol.setToRandomSymbol();

});
}   
  
}