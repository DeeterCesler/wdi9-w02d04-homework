let $body = $("body");
$body.append("<h1>POKÉMANS GAME</h1>");

let playerScore = 0;
let computerScore = 0;

const playARound = () => {
  let deck = [
      {
        name: "Bulbasaur",
        damage: 60
      }, {
        name: "Caterpie",
        damage: 40
      }, {
        name: "Charmander",
        damage: 60
      }, {
        name: "Clefairy",
        damage: 50
      }, {
        name: "Jigglypuff",
        damage: 60
      }, {
        name: "Mankey",
        damage: 30
      }, {
        name: "Meowth",
        damage: 60
      }, {
        name: "Nidoran - female",
        damage: 60
      }, {
        name: "Nidoran - male",
        damage: 50
      }, {
        name: "Oddish",
        damage: 40
      }, {
        name: "Pidgey",
        damage: 50
      }, {
        name: "Pikachu",
        damage: 50
      }, {
        name: "Poliwag",
        damage: 50
      }, {
        name: "Psyduck",
        damage: 60
      }, {
        name: "Rattata",
        damage: 30
      }, {
        name: "Squirtle",
        damage: 60
      }, {
        name: "Vulpix",
        damage: 50
      }, {
        name: "Weedle", 
        damage: 40
      }
    ];

  const player = {
      hand: []
  }

  const computer = {
      hand: []
  }

  // the function to deal out from the deck
  const dealOut = () => {
    player.hand = [];
    computer.hand = [];
    const deckDeal = deck;

    for(let i =0; i<3; i++){
        const randomCard = Math.floor(Math.random()*deckDeal.length);
        player.hand.push(deckDeal[randomCard]);
        deckDeal.splice([randomCard],1);
    };

    for(let i =0; i<3; i++){
        const randomCard = Math.floor(Math.random()*deckDeal.length);
        computer.hand.push(deckDeal[randomCard]);
        deckDeal.splice([randomCard],1);
    }
  }
  dealOut();
//   a round
//   while(deck.length>1){
//     console.log(deck[0]);
//     deck.splice(0,1);
//   }


//   this function only runs once someone presses a button
    function runGame(){
        $(".cardChoice").remove();
        // take the name,
        let cardName = $(this).text();
        // console.log($(this).name);
        //  and search player hand for a card you have with that name
        // console.log(player.hand);
        let playerCard;
        console.log(cardName);
        
        // matches player's card to the button they chose
        for(let i=0; i<player.hand.length; i++){
            if(player.hand[i].name === cardName){
                console.log(player.hand[i]);
                playerCard = player.hand[i];
            }
        }

        console.log(playerCard);
        // return that card


        // const playerCard = player.hand[0];
        
        // const playerCardIndex = Math.floor(Math.random()*player.hand.length);
        // player.hand.splice(playerCardIndex,1);

        const computerCardIndex = Math.floor(Math.random()*computer.hand.length);
        const computerCard = computer.hand[computerCardIndex];
        // computer.hand.splice(computerCardIndex,1);

        $body.append(`<p>PLAYER IS PLAYING ${playerCard.name} AGAINST COMPUTER'S ${computerCard.name}.</p>`);
        
        if(playerCard.damage === computerCard.damage){
            $body.append(`<p>THEY WERE EQUALLY MATCHED!</p>`)
        }

        if(playerCard.damage > computerCard.damage){
            playerScore++;
            $body.append(`<p>PLAYER'S ${playerCard.name} WAS STRONGER!</p>`)
        }
        if(playerCard.damage < computerCard.damage){
            computerScore++;
            $body.append(`<p>COMPUTER'S ${computerCard.name} WAS STRONGER!</p>`)
        }
        $body.append(`<h3>COMPUTER SCORE IS ${computerScore} AND PLAYER SCORE IS ${playerScore}.</h3>`);
        // console.log(player.hand);
        $body.append("");
        $body.append("<p>RESHUFFLING...</p>");
        $body.append("");
    }

    const playerChoosesCard = () => {
        // let playerCardChoice;
        $body.append(`<p>You are holding ${player.hand[0].name}, ${player.hand[1].name}, and ${player.hand[2].name},</p>`);
        $body.append(`<p>Which one do you choose?</p>`);
        $body.append(`<button class="cardChoice">${player.hand[0].name}</button>`);
        $body.append(`<button class="cardChoice">${player.hand[1].name}</button>`);
        $body.append(`<button class="cardChoice">${player.hand[2].name}</button>`);
        $(".cardChoice").click(runGame);
    };

    playerChoosesCard();
}

// playARound();

while(playerScore !== 3 || computerScore !==3){
  playARound();
  break;
  if(computerScore === 3){
    $body.append(`<h2>COMPUTER WINS</h2>`);
    break;
  }
  if(playerScore === 3){
    $body.append(`<h2>PLAYER WINS</h2>`);
    break;
  };
}