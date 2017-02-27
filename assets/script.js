$(document).ready(function(){ 

  console.log('this is the right file');
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


// Card images
var chars = {
  "genbu": {
    name: 'Genbu',
    hp: 100,
    attack: 16,
    cAttack: 12,
    stat1: function() {
    var genbuImg = $('.turtle').prepend($('<img>',{class:'genbu',src:'assets/images/genbu.png'}));}
  },
  "suzaku":{
    name: 'Suzaku',
    hp: 120,
    attack: 12,
    cAttack: 16,
    stat2: function() {
    var suzakuImg = $('.bird').prepend($('<img>',{class:'suzaku',src:'assets/images/suzaku.png'}));}
  },
  "byakko":{
    name: 'Byakko',
    hp: 140,
    attack: 14,
    cAttack: 14,
    stat3: function() {
    var byakkoImg = $('.tiger').prepend($('<img>',{class:'byakko',src:'assets/images/byakko.png'}));}
  },
  "seiryu": {
    name: 'Seiryu',
    hp: 160,
    attack: 16,
    cAttack: 16,
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

var player = $('#player');
var enemy = $('#enemy');

var currentPlayer = null;
var currentEnemy = null;

var booleanPlayer = false;



// character selection
$(document).on('click', '.card img', function() {
    var selection = $(this).attr("src");
    if (!booleanPlayer) {
      currentPlayer = this.classList[0];
      $('#player img').attr("src",selection);
      booleanPlayer = true;
      player = this;
    }
    else {
      currentEnemy = this.classList[0];
      $('#enemy img').attr("src",selection);
      $(document).off('click', '.card img');
      $('#attackBtn').prop('disabled', false);
    }

});

// battle phase
$(document).on('click', '#attackBtn', function() {
  chars[currentEnemy].hp = chars[currentEnemy].hp - chars[currentPlayer].attack;
  chars[currentPlayer].hp = chars[currentPlayer].hp - chars[currentEnemy].cAttack;
  console.log(chars[currentEnemy].hp);
  console.log(chars[currentPlayer].hp);
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