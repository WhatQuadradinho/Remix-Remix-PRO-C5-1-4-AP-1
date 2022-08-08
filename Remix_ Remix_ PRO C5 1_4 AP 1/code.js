var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","607ad7b8-b666-4561-bbec-f4395e649f98","48e36eee-6f23-4be8-89e5-49ce611e68bb","e4d76284-3176-4dcb-9fad-987df9188a4c","f632884d-1626-48f6-bb05-af7cf68e3f0e","40658af5-82dd-41df-af30-103c7eb9db3e"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"bola","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"54w.6nHAYgjHX3uUCau5_k4kcoeNCkCG","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robô","sourceUrl":null,"frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"zkvxrVNxHXyIwN3tXQHhQuRt0JaNKuli","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"jogador","sourceUrl":null,"frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":12,"version":"ua1IAQxtLb24h.TVvsyYewqCbqcogY03","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"jogador_chuta","sourceUrl":null,"frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"v.iuo4H9YpbzQtn9A35LOUUKFUfRy.tw","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"jogador_cai","sourceUrl":null,"frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"iCUyoUdvP4KnU6LPRs0SN.0EgfLn_8zh","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"607ad7b8-b666-4561-bbec-f4395e649f98":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"06d9cyifgU9WCCkcGberrzGJsCvI_0Qq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/607ad7b8-b666-4561-bbec-f4395e649f98.png"},"48e36eee-6f23-4be8-89e5-49ce611e68bb":{"name":"BARNEY2.0","sourceUrl":null,"frameSize":{"x":264,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"5AKGzmheaY.6juee8LCiYUAX6RVFqMjW","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":264},"rootRelativePath":"assets/48e36eee-6f23-4be8-89e5-49ce611e68bb.png"},"e4d76284-3176-4dcb-9fad-987df9188a4c":{"name":"dart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3ehjaVxoVkY9fteEkntjtCQ10H9QWqFA/category_sports/dart.png","frameSize":{"x":393,"y":163},"frameCount":1,"looping":true,"frameDelay":2,"version":"3ehjaVxoVkY9fteEkntjtCQ10H9QWqFA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":163},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3ehjaVxoVkY9fteEkntjtCQ10H9QWqFA/category_sports/dart.png"},"f632884d-1626-48f6-bb05-af7cf68e3f0e":{"name":"penguin_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2J5rTUrvTbg6Oqgi55Z1UN3HhU6LqnXJ/category_animals/penguin_1.png","frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"2J5rTUrvTbg6Oqgi55Z1UN3HhU6LqnXJ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2J5rTUrvTbg6Oqgi55Z1UN3HhU6LqnXJ/category_animals/penguin_1.png"},"40658af5-82dd-41df-af30-103c7eb9db3e":{"name":"spacebattle_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aw7_doB10ItjDSWSmC1QfTPY7OeE566d/category_retro/spacebattle_10.png","frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":2,"version":"aw7_doB10ItjDSWSmC1QfTPY7OeE566d","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aw7_doB10ItjDSWSmC1QfTPY7OeE566d/category_retro/spacebattle_10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//crie a bola, raqueteJogador e raqueteComputador como objetos de sprite
var ball  = createSprite(200,200,10,10);
var playerPaddle = createSprite(390,200,10,70);
var computerPaddle = createSprite(10,200,10,70);
ball.setAnimation("BARNEY2.0");
ball.scale = 0.15;
playerPaddle.setAnimation("penguin_1_1");
playerPaddle.scale = 0.17;
computerPaddle.setAnimation("spacebattle_10_1");
computerPaddle.scale = 0.18;

//variável para armazenar diferentes estados de jogo
var gameStage = "serve";

//variáveis para manter a pontuação
var compScore = 0;
var playerScore = 0;


function draw() {
  //limpa a tela
  background("skyblue");
  
  if (ball.isTouching(computerPaddle) || ball.isTouching(playerPaddle)) {
    playSound("assets/hit.mp3", false);
  }
  //desenhar linha no centro
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  //coloque texto de informação no centro
  if (gameStage === "serve") {
    text("Aperte espaço para jogar",130,180);
  }
  
  //exibe o placar
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //faça com que a raquete do jogador se mova com a posição y do mouse
  playerPaddle.y = World.mouseY;
  
  //IA para a raquete do computador
  //faça-o se mover com a posição y da bola
  computerPaddle.y = ball.y;
  
  //criar limites
  //faça a bola quicar com as bordas superior e inferior
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  
  //faça a bola quicar com as raquetes
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  
  //sacar a bola quando o espaço é pressionado
  if (keyDown("space") &&  gameStage === "serve") {
    serve();
    gameStage = "play";
  }
 
  //redefina a bola para o centro se ela cruzar a tela
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x > 400) {
      compScore = compScore + 1;
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
    }
    
    setGame();
    gameStage = "serve";
  }
  
  //define quando o jogo acaba
  if (playerScore === 5 || compScore === 5){
    gameStage = "over";
    text("Game Over!",170,160);
    text("Aperte R para recomeçar",140,180);
  }
  
  //define como voltar para o começo do jogo
  if (keyDown("r") && gameStage === "over") {
    gameStage = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  //desenha sprites
  drawSprites();
}

function serve() {
  ball.velocityX = 6;
  ball.velocityY = 7;
}

function setGame() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
