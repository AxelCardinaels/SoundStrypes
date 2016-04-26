(function(){

  var app = {};
  app.buttons = [];
  app.hasStarted = false;

  app.setup = function(){
    app.buttons = $(".button");
    app.buttons.click(function(event){
        event.preventDefault();
        var clickedButton = $(this);
        app.buttonClick(clickedButton);
    });
  };

  app.buttonClick = function(clickedButton){
    if(clickedButton.hasClass("button--active")){
      clickedButton.toggleClass("button--active button--inactive");
      clickedButton.siblings("audio")[0].muted = true;
      if(app.checkState() === 0){
        app.stopPlay();
      }
    }else{
      if(app.hasStarted === false){
        app.startPlay();
      }
      clickedButton.toggleClass("button--inactive button--active");
      clickedButton.siblings("audio")[0].muted = false;
      app.buttons = $(".button");
    }
  };

  app.startPlay = function(){
    app.hasStarted = true;

    var currentAudio;
    for (var i = 0; i < app.buttons.length; i++) {
      currentAudio = $(app.buttons[i]);
      currentAudio.siblings("audio")[0].play();
      currentAudio.siblings("audio")[0].muted = true;

    }
  };

  app.stopPlay = function(){
    app.hasStarted = false;
    var currentAudio;
    for (var i = 0; i < app.buttons.length; i++) {
      currentAudio = $(app.buttons[i]);
      currentAudio.siblings("audio")[0].pause();
      currentAudio.siblings("audio")[0].muted = true;
      currentAudio.siblings("audio")[0].currentTime = 0;
    }
  };

  app.checkState = function(){
    var activeCount = 0;
    var currentButton;
    app.buttons = $(".button");
    for (var i = 0; i < app.buttons.length; i++) {
      currentButton = $(app.buttons[i]);
      if(currentButton.hasClass("button--active")){
          activeCount++;
      }
    }

    return activeCount;
  };

  function launcher(){
    app.setup();
  }

  launcher();

})();
