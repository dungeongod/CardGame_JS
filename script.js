var suits = ["spades", "hearts", "clubs", "diams"];
    var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var cards = [];
    var players = [[],[]];
    var firstRun = true;
    var gameOver = false;
    var fightButton = document.querySelector("#btnBattle");
    var p1 = document.querySelector("#player1");
    var p2 = document.querySelector("#player2");

    //event listeners
    fightButton.addEventListener('click',battle);

    //functions
    function battle() {
      if(firstRun){
        firstRun = false;
        buildCards();
        shuffleArray(cards);
        dealCards(cards);
      }
      attack();
      console.log('works');
    }
    function attack() {
      if(!gameOver){
        var card1 = players[0].shift();
        var card2 = players[1].shift();
        var pot = [card1,card2];
        //update html
        p1.innerHTML = showCard(card1,0);
        p2.innerHTML = showCard(card2,23.6);
        //check winner
        //update scores
      }
    }

    function showCard(c,p) {
      var move = p*40;
      //var bgColor = (c.icon == "H" || c.icon == "D")? "red" : "black";
      var bCard = '<div class="icard '+c.suit+' " style="left:'+move+'px">';
      bCard += '<div class="cardtop suit">' + c.num + '<br></div>';
      bCard += '<div class="cardmid suit"></div>';
      bCard += '<div class="cardbottom suit">' + c.num + '<br></div></div>';
      console.log(c,move);
      return bCard;

    }

    function buildCards() {
      cards = [];
      for(s in suits){
        var suitNew = suits[s][0].toUpperCase();
        for(n in cardFace){
          var card = {
            suit:suits[s],
            num:cardFace[n],
            cardValue:parseInt(n) +2,
            icon:suitNew
          }
          cards.push(card);
        }
      }
      console.log(cards);
    }
    function dealCards(array) {
        for(var i =0;i<array.length;i++){
          var m = i%2;
            players[m].push(array[i]);


        }
        console.log(players);
    }

    function shuffleArray(array){
       for(var x = array.length -1;x>0;x--){
         var ii = Math.floor(Math.random() * (x+1));
         var temp = array[x];
         array[x] = array[ii];
         array[ii] = temp;
       }
       return array;
    }
