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
      if(app.checkState() === 0){
        app.stopPlay();
      }
    }else{
      if(app.hasStarted === false){
        app.startPlay();
      }
      clickedButton.toggleClass("button--inactive button--active");
      app.buttons = $(".button");
    }
  };

  app.startPlay = function(){
    app.hasStarted = true;
  };

  app.stopPlay = function(){
    app.hasStarted = false;
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
