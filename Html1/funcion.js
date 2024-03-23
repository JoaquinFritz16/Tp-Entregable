let fotomostrada = "boca-campeon-intercontinental-2000_416x234.webp";

function myFunction() {
    let imagen = document.getElementById("campeonato");
    console.log(imagen.src);

    

    if (imagen.src.endsWith(fotomostrada)) {
        imagen.src = "bianchi.jpg";
        console.log("gwa");
    } else {
        imagen.src = fotomostrada;
    }

    if (imagen.src.endsWith("bianchi.jpg")) {
        console.log("gjieog");
    }
}
