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

// Card images
var genbuGod = {

  hp: 100,
  attack: 8,
  cAttack: 12,
  stat1: function() {
  var genbuImg = $('.turtle').prepend($('<img>',{class:'genbu',src:'assets/images/genbu.png'
  }));
  }
};

genbuGod.stat1();


var suzakuGod = $('.bird').prepend($('<img>',{class:'suzaku',src:'assets/images/suzaku.png', 
    hp: 100,
    attack: 12,
    cAttack: 10,
  }));

var byakkoGod = $('.tiger').prepend($('<img>',{class:'byakko',src:'assets/images/byakko.png'}));

var seiryuGod = $('.dragon').prepend($('<img>',{class:'seiryu',src:'assets/images/seiryu.png'}));

// Battlefield images
$('#player').prepend($('<img>',{id:'you',src:'assets/images/main_card.png'}));
$('#enemy').prepend($('<img>',{id:'opponent',src:'assets/images/main_card.png'}));

var player = $('#player');
var enemy = $('#enemy');

var booleanPlayer = false;


$('.card img').click(function() {
    var selection = $(this).attr("src");
    if (!booleanPlayer) {
      $('#player img').attr("src",selection);
      booleanPlayer = true;
    }
    else {
      $('#enemy img').attr("src",selection);
      booleanPlayer = true;
    }

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