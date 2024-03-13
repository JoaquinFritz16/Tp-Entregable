let fotomostrada="boca-campeon-intercontinental-2000_416x234.webp"
function myFunction(){
    let imagen = document.getElementById("campeonato");
    console.log(imagen.src)
    if(!(imagen.src=="http://127.0.0.1:5500/boca-campeon-intercontinental-2000_416x234.webp")){
        imagen.src="boca-campeon-intercontinental-2000_416x234.webp";
        console.log("gwa")
    }else{
        imagen.src = "http://127.0.0.1:5500/bianchi.jpg";
    }
    if(imagen.src=="http://127.0.0.1:5500/bianchi.jpg"){
        console.log("gjieog")       
    }
    
}