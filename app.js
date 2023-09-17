var listOfCards = document.querySelectorAll('.card');
var listOfBtn = document.querySelectorAll(".menu-btn");

listOfBtn.forEach(function(boton){
    boton.addEventListener("click", function(){
        listOfBtn.forEach(function (btn){
            btn.classList.remove("active");
        });

        boton.classList.add("active");
        console.log(boton.dataset.filter);

        listOfCards.forEach( function (card){
            if (card.classList.contains(boton.dataset.filter)){
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        })

    });

})





