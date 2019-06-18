const categorie = {
    cats: {
        source: ["images/kitten.jpg","images/kitten2.jpg"]
    }
};


const blockClick = document.getElementById("modal-game-block");
const gameContainer = document.getElementById("game-container");
const flipped = document.getElementsByClassName("on");
const cards = 30;
var timer = setTimeout(flipBack,1000);
function generateCards() {
for(let i=0;i<cards;i++) {
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");
    let newImgBack = document.createElement("img");

    newDiv.setAttribute("class","card-container");
    newImg.setAttribute("class","card-front");
    newImgBack.setAttribute("class","card-back");
    newImg.style.backgroundImage = "url(images/placeholder-150.jpg)";
    newImgBack.style.backgroundImage = "url(" + categorie.cats.source[1] + ")";
    newDiv.appendChild(newImgBack);
    newDiv.appendChild(newImg);
    gameContainer.appendChild(newDiv);

    // Toggle function to flip cards
    var card = document.getElementsByClassName("card-container")[i];
    card.addEventListener('click', function() {
	    if (!this.classList.contains('on')) {
		    this.classList.remove('off');
            this.classList.add('on');
            
	    } else {
		    this.classList.remove('on');
		    this.classList.add('off');
        }
        compare();
    });


    }
}

function compare() {
    if(flipped.length == 2) {
        // blockClick is a modal that comes up when 2 cards have been clicked
        // and *blocks* the user from clicking more cards.
        blockClick.style.display = "block";
        console.log("works");
        timer = setTimeout(flipBack, 2000);
    }


}

function flipBack() {
while(flipped.length != 0) {
    flipped[0].classList.remove("on");
}
    blockClick.style.display = "none";
    
}




generateCards();

