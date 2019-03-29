var bild = document.getElementById("bild")
var resultat = document.getElementById("resultat")
var knapp = document.getElementById("singlaSlant")

// var kronaScoreDisplay = document.getElementById("kronaScore")
// var klaveScoreDisplay = document.getElementById("klaveScore")

// var kronaScore = 0;
// var klaveScore = 0;

var gameOver = false;

knapp.addEventListener("click", function() {
    if (!gameOver) {
        var siffra = Math.floor(Math.random() * 2)
        bild.className = ""
        if(siffra == 0) { 
            bild.classList.add("coinTossKrona")
            resultat.textContent = "DU FICK KRONA!"
    //        kronaScore++;
    //        kronaScoreDisplay.textContent = kronaScore
            gameOver = true;
            console.log("KRONA")
            knapp.textContent = "SPELA IGEN?"
        } else {
            bild.classList.add("coinTossKlave")
            resultat.textContent = "DU FICK KLAVE!"
    //        klaveScore++;
    //        klaveScoreDisplay.textContent = klaveScore
            gameOver = true;
            console.log("KLAVE")
            knapp.textContent = "SPELA IGEN?"
            }
    } else if (gameOver = true) {
        reset()
        }
    })

function reset (){
        gameOver = false;
        knapp.textContent = "TRYCK PÅ MIG FÖR ATT SINGLA SLANT!"
        resultat.textContent = "Krona eller klave?"
        bild.classname = ""
        bild.classList = "startbild"
    }


// ICKE FUNGERANDE SLASK - LÅTER LIGGA IFALL DET BEHÖVS
// knapp.addEventListener("click", function() {
//    randomNum()
//    if(siffra == 0) {
//        console.log("KRONA")
//    } else {
//        console.log("KLAVE")
//    }
//});

//function randomNum(){
//    var siffra = Math.floor(Math.random() * 2)
//    return siffra
//}
