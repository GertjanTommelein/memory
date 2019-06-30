const categorie = {
    cats: {
        source: ["images/kitten.jpg","images/kitten2.jpg","images/kitten3.jpg",
                 "images/kitten4.jpg","images/kitten5.jpg","images/kitten6.jpg",
                 "images/kitten7.jpg","images/kitten8.jpg","images/kitten9.jpg",
                 "images/kitten10.jpg","images/kitten11.jpg","images/kitten12.jpg",
                 "images/kitten13.jpg","images/kitten14.jpg","images/kitten15.jpg"]
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


    //newImgBack.style.backgroundImage = "url(" + categorie.cats.source[1] + ")";
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


function randomizeImages(array){
    
        let count = 0;
        let random = Math.floor(Math.random() * 30);
        let usedNums = [];
    // Distribute images randomly to the cards
    for(let i=0; i< (array.length * 2 -1);i++) {
        

        // adds the first image to a random card
        if(i == 0) {
            
                random = Math.floor(Math.random() * cards);
            
            document.getElementsByClassName("card-back")[random].style.backgroundImage = "url(" + categorie.cats.source[count] + ")";
            usedNums.push(random);
        }

        

        // checks if random has already been used
        // while true, set random to a new random number
        while(usedNums.includes(random)) {

            random = Math.floor(Math.random() * cards);
        }
        
        // push random into usedNums so that number doesnt get used again
        usedNums.push(random);
        
        // sets the  image to a random card
        document.getElementsByClassName("card-back")[random].style.backgroundImage = "url(" + categorie.cats.source[count] + ")";
        // everytime two images have been placed, grab a new image
        if((i % 2) == 0) {
            count++;
        }
    }
    return usedNums;
}




generateCards();
randomizeImages(categorie.cats.source);
