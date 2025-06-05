var quiz = document.getElementById("quiz");
var res = document.getElementById("results");


function findscore(event){
  
    var showansbox = document.getElementById("showAns");
    var showans = showansbox.checked;
    
    
    event.preventDefault();

    var form = $("form");

    var list = form.serializeArray();

    console.log(list);

    var correct = 0;
    
    for (var i of list){

        if (i.value == "c"){
            correct++;

            if (showans){
                var answer = document.getElementById(i.name);
                var answers = document.getElementsByName(i.name);
            
                answer.style.backgroundColor="lightgreen";
                answer.style.borderRadius="5px";

                for (var o of answers){

                    if (o.value == "c"){
                
                        var label = $('label[for="'+o.id+'"]')[0];
                        label.style.backgroundColor="lightgreen";
                        label.style.borderRadius="5px";
                    }
                }
            }
            
        }else if (showans){
            var answer = document.getElementById(i.name);
            var answers = document.getElementsByName(i.name);

            answer.style.backgroundColor="salmon";
            for (var o of answers){

                if (o.checked){
                
                    var label = $('label[for="'+o.id+'"]')[0];
                    label.style.backgroundColor="salmon";
                    label.style.borderRadius="5px";

                
                }else if (o.value == "c"){
                    
                    var label = $('label[for="'+o.id+'"]')[0];
                    label.style.backgroundColor="lightgreen";
                    label.style.borderRadius="5px";


                    
                }
              
            }
        }
      
    }

    res.innerHTML =((Math.round((correct/10)*10))*10)+"%  ("+correct+"/10)";

} 

quiz.addEventListener("submit", findscore);