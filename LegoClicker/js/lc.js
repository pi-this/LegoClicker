var legos = 0;
var money = 10_000_000; // start money $
var background;
var smaller = 0;
var ana = 1;
var clicksAmount = 0;
var achReward = 0;
var pc = 1;
var yellow2x2Clicker = 0;
var pcauto = 0; // pieces for auto, set pcauto to 0 for no pcauto
document.getElementById('THELEGO').width = 300;
var click1 = new Audio("sounds/click1.mp3");
var click2 = new Audio("sounds/click2.mp3");
var button1 = new Audio("sounds/button1.mp3");
var button2 = new Audio("sounds/button2.mp3");
var button3 = new Audio("sounds/button3.mp3");
var radio = new Audio("sounds/radio.mp3");
var buttonMain = new Audio("sounds/Consuck.mp3");
var pb = new Audio("sounds/screech.mp3");
var rando = 0;
var oneOneBlueBrick = false;
var oneTwoRedBrick = false;
var progressNumber = 10;
var setAmountProgress = 0;
var percentValue = 0;
var devAmount = 1;
var levelV = 1;
var toLevel = 2;
var progressNumberDisplay = 0;
var recordAmount = 0;
var progressAmount = 0;

function add() {
	clicksound()
    clicksAmount = clicksAmount + 1
  
	legos = legos + pc;
    setAmountProgress = progressNumber;
    if (levelV == 1) {
        progressAmount = legos;
    }
    else {
        progressAmount += 1;
    }

	document.getElementById('money').innerHTML = money;
    document.getElementById('legos').innerHTML = legos;
    document.getElementById('clicks').innerHTML = clicksAmount;

    document.getElementById('levelProgress').max = progressNumber;
    console.log(progressNumber)
    document.getElementById('levelProgress').value = progressAmount;
    console.log(clicksAmount)

    percentValue += setAmountProgress / devAmount;
    document.getElementById('levelValue').innerHTML = levelV;
    document.getElementById('toNextLevel3').innerHTML = toLevel;
    document.getElementById('toNextLevel1').innerHTML = Math.round(percentValue * 100)/100 + "%";

    if (clicksAmount == 1) {
        document.getElementById('title').innerHTML = "Your first click!"
    }

    else if (clicksAmount == 10) {
        document.getElementById('title').innerHTML = "You hit ten."
    }

    else if (clicksAmount == 12) {
        document.getElementById('title').innerHTML = "One dozen clicks."
    }

    else if (clicksAmount == 13) {
        document.getElementById('title').innerHTML = "Baker's dozen."
    }

    else if (money > 5) {
        document.getElementById('title').innerHTML = "Atleast you have $5."
    }
	
	if (ana == 1){
	  document.getElementById('THELEGO').style.width = '200px'
	  ana = 2;
	}
	
	else{
	  document.getElementById('THELEGO').style.width = '300px'
	  ana = 1
	}
	
    if (clicksAmount >= 100) {
        if (achReward == 0) {
            achReward = 1;
            yellow2x2Clicker = 1;
            ach1Show();
        }
    }

    if (levelV == 1) {
        recordAmount = setAmountProgress;
        progressAmount = legos;
    }
    // if progress reaches end go for the next place value
    if (legos >= recordAmount) {
        levelV += 1;
        toLevel += 1;
        devAmount *= 100;
        progressNumber *= 10;
        recordAmount = progressNumber
        recordAmount += 10;
        progressNumberDisplay /= 1;
        percentValue = 0;
        progressAmount = 0;
    }
    console.log("---")
    console.log(legos)
   console.log(recordAmount)



}


function clicksound() {
  var max = 2;
  var min = 1;
  rando = Math.floor(Math.random() * (max - min + 1) ) + min;
  if (rando == 1){
    click1.play();
  }
  if (rando == 2){
    click2.play();
  }
}

function addauto() {
	clicksound();
	
	legos = legos + pcauto;
	
	document.getElementById('money').innerHTML = money;
	document.getElementById('legos').innerHTML = legos;
	
	if (ana == 1){
	  document.getElementById('THELEGO').style.width = '200px'
	  ana = 2;
	}
	
	else{
	  document.getElementById('THELEGO').style.width = '300px'
	  ana = 1
	}

}

function update() {
  document.getElementById('money').innerHTML = money;
  document.getElementById('legos').innerHTML = legos;
  document.getElementById('info').innerHTML = '';
  document.getElementById('info-buy').innerHTML = '';
}

function clearBI() {
  document.getElementById('info').innerHTML = '';
}


function set1() {
  if (legos >= 59){
    legos = legos - 59
    money = money + 9.99
    document.getElementById('info').innerHTML = "built Lego set with 59 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set2() {
  if (legos >= 88){
    legos = legos - 88
    money = money + 15.99
    document.getElementById('info').innerHTML = "built Lego set with 88 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}


function set3() {
  if (legos >= 194){
    legos = legos - 194
    money = money + 19.99
    document.getElementById('info').innerHTML = "built Lego set with 194 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set4() {
  if (legos >= 215){
    legos = legos - 215
    money = money + 29.99
    document.getElementById('info').innerHTML = "built Lego set with 215 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set5() {
  if (legos >= 262){
    legos = legos - 262
    money = money + 39.99
    document.getElementById('info').innerHTML = "built Lego set with 262 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set6() {
  if (legos >= 432){
    legos = legos - 432
    money = money + 44.99
    document.getElementById('info').innerHTML = "built Lego set with 432 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set7() {
  if (legos >= 598){
    legos = legos - 598
    money = money + 59.99
    document.getElementById('info').innerHTML = "built Lego set with 598 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set8() {
  if (legos >= 840){
    legos = legos - 840
    money = money + 64.99
    document.getElementById('info').innerHTML = "built Lego set with 840 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set9() {
  if (legos >= 1125){
    legos = legos - 1125
    money = money + 79.99
    document.getElementById('info').innerHTML = "built Lego set with 1125 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set10() {
  if (legos >= 1265){
    legos = legos - 1265
    money = money + 99.99
    document.getElementById('info').innerHTML = "built Lego set with 1265 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set11() {
  if (legos >= 1321){
    legos = legos - 1321
    money = money + 109.99
    document.getElementById('info').innerHTML = "built Lego set with 1321 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set12() {
  if (legos >= 1353){
    legos = legos - 1353
    money = money + 169.99
    document.getElementById('info').innerHTML = "built Lego set with 1353 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set13() {
  if (legos >= 1508){
    legos = legos - 1508
    money = money + 179.99
    document.getElementById('info').innerHTML = "built Lego set with 1508 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set14() {
  if (legos >= 1709){
    legos = legos - 1709
    money = money + 219.99
    document.getElementById('info').innerHTML = "built Lego set with 1709 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set15() {
  if (legos >= 1921){
    legos = legos - 1921
    money = money + 249.99
    document.getElementById('info').innerHTML = "built Lego set with 1921 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set16() {
  if (legos >= 2065){
    legos = legos - 2065
    money = money + 299.99
    document.getElementById('info').innerHTML = "built Lego set with 2065 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set17() {
  if (legos >= 3662){
    legos = legos - 3662
    money = money + 399.99
    document.getElementById('info').innerHTML = "built Lego set with 3662 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set18() {
  if (legos >= 3854){
    legos = legos - 3854
    money = money + 499.99
    document.getElementById('info').innerHTML = "built Lego set with 3854 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set19() {
  if (legos >= 4049){
    legos = legos - 4049
    money = money + 549.99
    document.getElementById('info').innerHTML = "built Lego set with 4049 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set20() {
  if (legos >= 2065){
    legos = legos - 2065
    money = money + 599.99
    document.getElementById('info').innerHTML = "built Lego set with 2065 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function set21() {
  if (legos >= 7541){
    legos = legos - 7541
    money = money + 849.99
    document.getElementById('info').innerHTML = "built Lego set with 7541 bricks";
  }
  else{
    document.getElementById('info').innerHTML = "unable to build Lego set, click more bricks";
    
  document.getElementById('money').innerHTML = money;
  document.getElementById('money').innerHTML = legos;
}
}

function BPC() {
  document.getElementById("cr-1").checked = true;
  buyinfo();
}

function AC() {
  document.getElementById("cr-5").checked = true;
  buyinfo();
}

function CC() {
  document.getElementById("cr-9").checked = true;
  buyinfo();
}

function U100B() {
  document.getElementById("bd-1").checked = true;
  clearBI();
}

function B100TO500B() {
  document.getElementById("bd-3").checked = true;
  clearBI();
}

function B500TO1000B() {
  document.getElementById("bd-7").checked = true;
  clearBI();
}

function B1000BTO1500B() {
  document.getElementById("bd-9").checked = true;
  clearBI();
}

function B1500BTO2000B() {
  document.getElementById("bd-13").checked = true;
  clearBI();
}

function O2000B() {
  document.getElementById("bd-16").checked = true;
  clearBI();
}




function buyinfo() {
  document.getElementById('info-buy').innerHTML = "";
}

function BUILD() {
  
  if (document.getElementById("bd-1").checked == true){
    set1();
  }
  if (document.getElementById("bd-2").checked == true){
    set2();
  }
  if (document.getElementById("bd-3").checked == true){
    set3();
  }
  if (document.getElementById("bd-4").checked == true){
    set4();
  }if (document.getElementById("bd-5").checked == true){
    set5();
  }if (document.getElementById("bd-6").checked == true){
    set6();
  }if (document.getElementById("bd-7").checked == true){
    set7();
  }if (document.getElementById("bd-8").checked == true){
    set8();
  }if (document.getElementById("bd-9").checked == true){
    set9();
  }
  if (document.getElementById("bd-10").checked == true){
    set10();
  }
  if (document.getElementById("bd-11").checked == true){
    set11();
  }
  if (document.getElementById("bd-12").checked == true){
    set12();
  }
  if (document.getElementById("bd-13").checked == true){
    set13();
  }
  if (document.getElementById("bd-14").checked == true){
    set14();
  }
  if (document.getElementById("bd-15").checked == true){
    set15();
  }
  if (document.getElementById("bd-16").checked == true){
    set16();
  }
  if (document.getElementById("bd-17").checked == true){
    set17();
  }
  if (document.getElementById("bd-18").checked == true){
    set18();
  }
  if (document.getElementById("bd-19").checked == true){
    set19();
  }
  if (document.getElementById("bd-20").checked == true){
    set20();
  }
  if (document.getElementById("bd-21").checked == true){
    set21();
  }
  
}

function BUY() {
  if (document.getElementById("cr-1").checked == true){
    if (money >= 15){
      money = money - 15 // price
      pc = pc + 1 // gain
      document.getElementById('info-buy').innerHTML = "purchased A Piece";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-2").checked == true){
    if (money >= 100){
      money = money - 100
      pc = pc + 10
      document.getElementById('info-buy').innerHTML = "purchased A Stack";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-3").checked == true){
    if (money >= 850){
      money = money - 850
      pc = pc + 100
      document.getElementById('info-buy').innerHTML = "purchased A Pile";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-4").checked == true){
    if (money >= 5000){
      money = money - 5000
      pc = pc + 1000
      document.getElementById('info-buy').innerHTML = "purchased A Pile";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  
  // auto clickers
  
  if (document.getElementById("cr-5").checked == true){
    if (money >= 10){
      money = money - 10
      pcauto = pcauto + 1;
      document.getElementById('info-buy').innerHTML = "purchased An Auto Click";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-6").checked == true){
    if (money >= 80){
      money = money - 80
      pcauto = pcauto + 10;
      document.getElementById('info-buy').innerHTML = "purchased An Auto Push";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-7").checked == true){
    if (money >= 1000){
      money = money - 1000
      pcauto = pcauto + 100;
      document.getElementById('info-buy').innerHTML = "purchased An Auto Punch";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-8").checked == true){
    if (money >= 8000){
      money = money - 8000;
      pcauto = pcauto + 1000;
      document.getElementById('info-buy').innerHTML = "purchased An Auto Punch";
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  
  if (document.getElementById("cr-9").checked == true){
      if (money >= 1) {
          if (oneOneYellowBrick) {
              document.getElementById('info-buy').innerHTML = "this item can only be purchased once";
              // this is here to avoid paying unessasary money
          }
          else {
              money = money - 1;
              yellow2preBought();
              oneOneYellowBrick = true
              document.getElementById('info-buy').innerHTML = "purchased a one by one, yellow brick";
              // player does not have this item, so he/she can purchase it
          }
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }
  
  if (document.getElementById("cr-10").checked == true){
      if (money >= 5) {
          if (oneOneBlueBrick) {
              document.getElementById('info-buy').innerHTML = "this item can only be purchased once";
              // this is here to avoid paying unessasary money
          }
          else {
              money = money - 5;
              blue2preBought();
              oneOneBlueBrick = true;
              document.getElementById('info-buy').innerHTML = "purchased a one by one, blue brick";
          }
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }

    if (document.getElementById("cr-11").checked == true) {

        if (money >= 8) { // how much the brick costs in $
            if (oneTwoRedBrick) {
                document.getElementById('info-buy').innerHTML = "this item can only be purchased once";
                // this is here to avoid paying unessasary money
            }
            else {
                money = money - 8;
                red12preBought();
                oneTwoRedBrick = true;
                document.getElementById('info-buy').innerHTML = "purchased a one by two, red brick";
            }
        }
        else {
            document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
        }
    }


  if (document.getElementById("cr-9").checked == true){
      if (money >= 1) {
          if (oneOneYellowBrick) {
              document.getElementById('info-buy').innerHTML = "this item can only be purchased once";
              // this is here to avoid paying unessasary money
          }
          else {
              money = money - 1;
              yellow2preBought();
              oneOneYellowBrick = true
              document.getElementById('info-buy').innerHTML = "purchased a one by one, yellow brick";
              // player does not have this item, so he/she can purchase it
          }
    }
    else{
      document.getElementById('info-buy').innerHTML = "unable to purchase item, build more sets";
    }
  }












} // end bracket
