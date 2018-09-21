let $body = $("body");
$body.append("<h1>POKÉMANS GAME</h1>");

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

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

  const playARound = () => {
    $(".start").remove();
    $body.append("<p>SHUFFLING CARDS...</p>");
    $body.append("");
          

    // the function to deal out from the deck
    const dealOut = () => {
      const deckDeal = deck;

      // if player.hand.length < 3, then deal out a random card from the deck 

      while(player.hand.length < 3){
          const randomCard = Math.floor(Math.random()*deckDeal.length);
          player.hand.push(deckDeal[randomCard]);
          deckDeal.splice([randomCard],1);
      };

      while(computer.hand.length < 3){
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
          
          let playerCardIndex = 0;

          // matches player's card to the button they chose
          for(let i=0; i<player.hand.length; i++){
              if(player.hand[i].name === cardName){
                  playerCardIndex = i;
                  playerCard = player.hand[i];
                  break;
              }
          }

          // return that card


          // const playerCard = player.hand[0];
          
          // player.hand.splice(playerCardIndex,1);

          const computerCardIndex = Math.floor(Math.random()*computer.hand.length);
          const computerCard = computer.hand[computerCardIndex];

          $body.append(`<p>PLAYER IS PLAYING ${playerCard.name} AGAINST COMPUTER'S ${computerCard.name}.</p>`);
          
          if(playerCard.damage === computerCard.damage){
              $body.append(`<p>THEY WERE <b>EQUALLY MATCHED!</b></p>`)
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
          // prompt
          $body.append("");

          player.hand.splice(playerCardIndex,1)
          computer.hand.splice(computerCardIndex,1);
          // console.log(player.hand.length);
          // console.log(deck.length);
          
          // Check for winner. If no winner, keep playing
          if(computerScore === 3){
            $body.append(`<h2>COMPUTER WINS</h2>`);
          }
          if(playerScore === 3){
            $body.append(`<h2>PLAYER WINS</h2>`);
          }
          else if(computerScore <3 && playerScore <3){
            playARound()
          }
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
  playARound();
}

$body.append("<button class='start'>START GAME</button>");
$(".start").click(game);