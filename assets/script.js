$(document).ready(function(){ 

  // Audio script
  var audio, playbtn, seek_bar, audio2;
  function initAudioPlayer() {
    audio = new Audio();
    audio.src = "assets/audio/ffxiv_boss_theme.mp3";
    audio.loop = true;
    audio.play();

    audio2 = new Audio();
    audio2.src = "assets/audio/victory.mp3";

    // Object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    // Add Event Handler
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    // Functions
    function playPause() {
      if (audio.paused) {
        audio.play();
        playbtn.style.background = "url('assets/images/pause_button.png') no-repeat";
      }
      else {
        audio.pause();
        playbtn.style.background = "url('assets/images/play_button.png') no-repeat";
      }
    }

    function mute() {
      if (audio.muted) {
        audio.muted = false;
        mutebtn.style.background = "url('assets/images/mute_button.png') no-repeat";
      }
      else {
        audio.muted = true;
        mutebtn.style.background = "url('assets/images/unmute_button.png') no-repeat";  
      }
    }
  }
    // end audio script


// Card images & stats

var chars = {
  "genbu": {
    name: 'Genbu',
    hp: 100,
    attack: 8,
    cAttack: 10,
    stat1: function() {
    var genbuImg = $('.turtle').prepend($('<img>',{class:'genbu',src:'assets/images/genbu.png'}));}
  },
  "suzaku":{
    name: 'Suzaku',
    hp: 100,
    attack: 8,
    cAttack: 5,
    stat2: function() {
    var suzakuImg = $('.bird').prepend($('<img>',{class:'suzaku',src:'assets/images/suzaku.png'}));}
  },
  "byakko":{
    name: 'Byakko',
    hp: 100,
    attack: 8,
    cAttack: 20,
    stat3: function() {
    var byakkoImg = $('.tiger').prepend($('<img>',{class:'byakko',src:'assets/images/byakko.png'}));}
  },
  "seiryu": {
    name: 'Seiryu',
    hp: 100,
    attack: 8,
    cAttack: 25,
    stat4: function() {
    var seiryuImg = $('.dragon').prepend($('<img>',{class:'seiryu',src:'assets/images/seiryu.png'}));}
  }

};

chars["genbu"].stat1();
chars["suzaku"].stat2();
chars["byakko"].stat3();
chars["seiryu"].stat4();

// Battlefield images
$('#player').prepend($('<img>',{id:'you',src:'assets/images/main_card.png'}));
$('#enemy').prepend($('<img>',{id:'opponent',src:'assets/images/main_card.png'}));

// Selection HP Bars
$('#player').append($('<div>',{id: 'playerHP'}));
$('#enemy').append($('<div>', {id: 'enemyHP'}));

var player = $('#player');
var enemy = $('#enemy');

var pHP = null;
var currPHP
var eHP = null;
var currEHP;

var currentPlayer = null;
var currentEnemy = null;

var booleanPlayer = false;

// character selection
$(document).on('click', '.card img', function() {
    var selection = $(this).attr("src");
    if (!booleanPlayer) {
      currentPlayer = this.classList[0];
      $('#player img').attr("src",selection);
      $("#player").addClass(currentPlayer);
      $('#playerHP').css({'width': "100%", 'height': '15', 'max-width': '100%'});

      console.log(this.classList);
      booleanPlayer = true;
    }
    else {
      currentEnemy = this.classList[0];
      $('#enemy img').attr("src",selection);
      $("#enemy").addClass(currentEnemy);
      $('#enemyHP').css({'width': "100%", 'height': '15', 'max-width': '100%'});
      console.log(this.classList);
      $(document).off('click', '.card img');
      $('#attackBtn').prop('disabled', false);
    }

});



// battle phase
$(document).on('click', '#attackBtn', function() {
//   var newHealth = $('#playerHP').css({'width': (chars[currentPlayer].hp - chars[currentEnemy].attack / chars[currentPlayer].hp * 100)});
  chars[currentEnemy].hp = chars[currentEnemy].hp - chars[currentPlayer].attack / chars[currentEnemy].hp * 100;
  eHP = chars[currentEnemy].hp - chars[currentPlayer].attack / chars[currentEnemy].hp * 100;
  currEHP = eHP + "%";
  console.log(currEHP);
  $('#enemyHP').css({'width': currEHP});

  chars[currentPlayer].hp = chars[currentPlayer].hp - chars[currentEnemy].cAttack / chars[currentPlayer].hp * 100;
  pHP = chars[currentPlayer].hp - chars[currentEnemy].cAttack / chars[currentPlayer].hp * 100;
  currPHP = pHP + "%";
  console.log(currPHP);

  
  $('#playerHP').css({'width': currPHP});

  // chars[currentPlayer].hp = chars[currentPlayer].hp - chars[currentEnemy].cAttack;


  // parseInt(newHealth);
  // console.log(parseInt(newHealth));
  // console.log(chars[currentPlayer].hp);
  // console.log(chars[currentEnemy].hp);
  // if chars[currentEnemy].hp = 0 {
  // //   alert(chars[currentEnemy].name + "has been defeated");
  // }
});

  
  // $(".card").on("click", function() {
  //   var selection = this.document;
  //   console.log(selection);
  //   if (player.attr("src", selection) === "" || !booleanPlayer ) {
  //       player.attr("src", selection);
  //       console.log(selection);
  //   }
  //   else {
  //       enemy.attr("src",selection);
  //   }

  // }); 


});