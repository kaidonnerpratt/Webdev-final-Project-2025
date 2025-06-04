var quiz = document.getElementById("quiz")
var res = document.getElementById("results")

function findscore(event){

    event.preventDefault()

    var form = $("form")

    var list = form.serializeArray();

    console.log(list)

    var correct = 0

    for (var i of list){
        if (i.value == "c"){
            correct++
        }
    }

    res.innerHTML =((Math.round((correct/10)*10))*10)+"%"

} 

quiz.addEventListener("submit", findscore)