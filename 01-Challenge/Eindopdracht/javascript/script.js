let Leeftijd= prompt("wat is je leeftijd?");
let stemGerechtigheid= 18
let oranjekleur= 16
let blauwkleur= 17
let groenkleur= 19
if (Leeftijd>stemGerechtigheid){
   // Als de gebruiker (bezoeker) 16 jaar dan wordt de achtergrond kleur van index.html een oranje-achtige kleur
   document.querySelector("h1").style.backgroundColor="green"
}
 
let voornaam= prompt("wat is je voornaam?") 
let achternaam=prompt("wat is je achternaam?")
 
let bezoeker={
   voornaam: voornaam,
   achternaam: achternaam,
   
   Leeftijd: Leeftijd,
}
console.log(bezoeker)
document.querySelector("#testVoornaam").innerHTML = bezoeker.voornaam
document.querySelector("#testAchternaam").innerHTML = bezoeker.achternaam
document.querySelector("#testLeeftijd").innerHTML = bezoeker.Leeftijd