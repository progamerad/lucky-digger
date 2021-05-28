var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e434b08b-0e4d-4ce2-b6bb-00eddf66011b","f797765e-e7d9-4832-8743-10719b11517e","5bcedd7c-9673-4965-901e-6f45f0567e38","f8cd33d3-fdfa-4125-90e9-a7b91453ad5f","c2bbb1b7-37e5-4529-838a-132c50f2ebb3"],"propsByKey":{"e434b08b-0e4d-4ce2-b6bb-00eddf66011b":{"name":"gameover","sourceUrl":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/e434b08b-0e4d-4ce2-b6bb-00eddf66011b.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"7oAB.s1_xTPNOGWmsJSaRx3QpiECx7JY","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/e434b08b-0e4d-4ce2-b6bb-00eddf66011b.png"},"f797765e-e7d9-4832-8743-10719b11517e":{"name":"you_win","sourceUrl":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/f797765e-e7d9-4832-8743-10719b11517e.png","frameSize":{"x":540,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"8a5SKIjAFXXd3nTuMIVIoBtpC76.S_4M","loadedFromSource":true,"saved":true,"sourceSize":{"x":540,"y":360},"rootRelativePath":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/f797765e-e7d9-4832-8743-10719b11517e.png"},"5bcedd7c-9673-4965-901e-6f45f0567e38":{"name":"shovel1","sourceUrl":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/5bcedd7c-9673-4965-901e-6f45f0567e38.png","frameSize":{"x":87,"y":162},"frameCount":1,"looping":true,"frameDelay":4,"version":"3eU_Wmhv0xbRycwD0FR5qG00.H6HFgii","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":162},"rootRelativePath":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/5bcedd7c-9673-4965-901e-6f45f0567e38.png"},"f8cd33d3-fdfa-4125-90e9-a7b91453ad5f":{"name":"shovel","sourceUrl":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/f8cd33d3-fdfa-4125-90e9-a7b91453ad5f.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"Bwi5cWtNoVSNYICdeIXYQrcxnjAiHj7C","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/J4n85ovF4MFUjou-xokLXTDMnDE4sKh8_0IQLA3vZrI/f8cd33d3-fdfa-4125-90e9-a7b91453ad5f.png"},"c2bbb1b7-37e5-4529-838a-132c50f2ebb3":{"name":"Drawing","sourceUrl":null,"frameSize":{"x":1536,"y":722},"frameCount":1,"looping":true,"frameDelay":12,"version":"HymuUBIx6jIhfuS6oJxVpA9I4skaW53V","loadedFromSource":true,"saved":true,"sourceSize":{"x":1536,"y":722},"rootRelativePath":"assets/c2bbb1b7-37e5-4529-838a-132c50f2ebb3.png"}}};
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



var bomb1=createSprite(randomNumber(0,400),randomNumber(250,400),20,20)
var bomb2=createSprite(randomNumber(0,400),randomNumber(250,400),20,20)
var luck=createSprite(randomNumber(0,400),randomNumber(250,400),20,20)

var playerball=createSprite(194,98,10,10)
playerball.shapeColor=("red")
playerball.setAnimation("shovel1")
playerball.scale=0.45
playerball.setCollider("circle",-25,70,10);


//layer1
var ball1=createSprite(5,391,20,20)
var ball2=createSprite(25,391,20,20)
var ball3=createSprite(45,391,20,20)
var ball4=createSprite(65,391,20,20)
var ball5=createSprite(85,391,20,20)
var ball6=createSprite(105,391,20,20)
var ball7=createSprite(125,391,20,20)
var ball8=createSprite(145,391,20,20)
var ball9=createSprite(165,391,20,20)
var ball10=createSprite(185,391,20,20)
var ball11=createSprite(205,391,20,20)
var ball12=createSprite(225,391,20,20)
var ball13=createSprite(245,391,20,20)
var ball14=createSprite(265,391,20,20)
var ball15=createSprite(285,391,20,20)
var ball16=createSprite(305,391,20,20)
var ball17=createSprite(325,391,20,20)
var ball18=createSprite(345,391,20,20)
var ball19=createSprite(365,391,20,20)
var ball20=createSprite(385,391,20,20)
var ball21=createSprite(405,391,20,20)

//layer2
var ball22=createSprite(5,371,20,20)
var ball23=createSprite(25,371,20,20)
var ball24=createSprite(45,371,20,20)
var ball25=createSprite(65,371,20,20)
var ball26=createSprite(85,371,20,20)
var ball27=createSprite(105,371,20,20)
var ball28=createSprite(125,371,20,20)
var ball29=createSprite(145,371,20,20)
var ball30=createSprite(165,371,20,20)
var ball31=createSprite(185,371,20,20)
var ball32=createSprite(205,371,20,20)
var ball33=createSprite(225,371,20,20)
var ball34=createSprite(245,371,20,20)
var ball35=createSprite(265,371,20,20)
var ball36=createSprite(285,371,20,20)
var ball37=createSprite(305,371,20,20)
var ball38=createSprite(325,371,20,20)
var ball39=createSprite(345,371,20,20)
var ball40=createSprite(365,371,20,20)
var ball41=createSprite(385,371,20,20)
var ball42=createSprite(405,371,20,20)

//layer3
var ball43=createSprite(5,351,20,20)
var ball44=createSprite(25,351,20,20)
var ball45=createSprite(45,351,20,20)
var ball46=createSprite(65,351,20,20)
var ball47=createSprite(85,351,20,20)
var ball48=createSprite(105,351,20,20)
var ball49=createSprite(125,351,20,20)
var ball50=createSprite(145,351,20,20)
var ball51=createSprite(165,351,20,20)
var ball52=createSprite(185,351,20,20)
var ball53=createSprite(205,351,20,20)
var ball54=createSprite(225,351,20,20)
var ball55=createSprite(245,351,20,20)
var ball56=createSprite(265,351,20,20)
var ball57=createSprite(285,351,20,20)
var ball58=createSprite(305,351,20,20)
var ball59=createSprite(325,351,20,20)
var ball60=createSprite(345,351,20,20)
var ball61=createSprite(365,351,20,20)
var ball62=createSprite(385,351,20,20)
var ball63=createSprite(405,351,20,20)

//layer4
var ball64=createSprite(5,331,20,20)
var ball65=createSprite(25,331,20,20)
var ball66=createSprite(45,331,20,20)
var ball67=createSprite(65,331,20,20)
var ball68=createSprite(85,331,20,20)
var ball69=createSprite(105,331,20,20)
var ball70=createSprite(125,331,20,20)
var ball71=createSprite(145,331,20,20)
var ball72=createSprite(165,331,20,20)
var ball73=createSprite(185,331,20,20)
var ball74=createSprite(205,331,20,20)
var ball75=createSprite(225,331,20,20)
var ball76=createSprite(245,331,20,20)
var ball77=createSprite(245,331,20,20)
var ball78=createSprite(265,331,20,20)
var ball79=createSprite(285,331,20,20)
var ball80=createSprite(305,331,20,20)
var ball81=createSprite(325,331,20,20)
var ball82=createSprite(345,331,20,20)
var ball83=createSprite(365,331,20,20)
var ball84=createSprite(385,331,20,20)
var ball85=createSprite(405,331,20,20)

//layer5
var ball86=createSprite(5,311,20,20)
var ball87=createSprite(25,311,20,20)
var ball88=createSprite(45,311,20,20)
var ball89=createSprite(65,311,20,20)
var ball90=createSprite(85,311,20,20)
var ball91=createSprite(105,311,20,20)
var ball92=createSprite(125,311,20,20)
var ball93=createSprite(145,311,20,20)
var ball94=createSprite(165,311,20,20)
var ball95=createSprite(185,311,20,20)
var ball96=createSprite(205,311,20,20)
var ball97=createSprite(225,311,20,20)
var ball98=createSprite(245,311,20,20)
var ball99=createSprite(265,311,20,20)
var ball100=createSprite(285,311,20,20)
var ball101=createSprite(305,311,20,20)
var ball102=createSprite(325,311,20,20)
var ball103=createSprite(345,311,20,20)
var ball104=createSprite(365,311,20,20)
var ball105=createSprite(385,311,20,20)
var ball106=createSprite(405,311,20,20)

//layer6
var ball107=createSprite(5,291,20,20)
var ball108=createSprite(25,291,20,20)
var ball109=createSprite(45,291,20,20)
var ball110=createSprite(65,291,20,20)
var ball111=createSprite(85,291,20,20)
var ball112=createSprite(105,291,20,20)
var ball113=createSprite(125,291,20,20)
var ball114=createSprite(145,291,20,20)
var ball115=createSprite(165,291,20,20)
var ball116=createSprite(185,291,20,20)
var ball117=createSprite(205,291,20,20)
var ball118=createSprite(225,291,20,20)
var ball119=createSprite(245,291,20,20)
var ball120=createSprite(265,291,20,20)
var ball121=createSprite(285,291,20,20)
var ball122=createSprite(305,291,20,20)
var ball123=createSprite(325,291,20,20)
var ball124=createSprite(345,291,20,20)
var ball125=createSprite(365,291,20,20)
var ball126=createSprite(385,291,20,20)
var ball127=createSprite(405,291,20,20)

//layer7
var ball128=createSprite(5,271,20,20)
var ball129=createSprite(25,271,20,20)
var ball130=createSprite(45,271,20,20)
var ball131=createSprite(65,271,20,20)
var ball132=createSprite(85,271,20,20)
var ball134=createSprite(105,271,20,20)
var ball135=createSprite(125,271,20,20)
var ball136=createSprite(145,271,20,20)
var ball137=createSprite(165,271,20,20)
var ball138=createSprite(185,271,20,20)
var ball170=createSprite(205,271,20,20)
var ball139=createSprite(225,271,20,20)
var ball140=createSprite(245,271,20,20)
var ball141=createSprite(265,271,20,20)
var ball142=createSprite(285,271,20,20)
var ball143=createSprite(305,271,20,20)
var ball144=createSprite(325,271,20,20)
var ball145=createSprite(345,271,20,20)
var ball146=createSprite(365,271,20,20)
var ball147=createSprite(385,271,20,20)
var ball148=createSprite(405,271,20,20)

//layer8
var ball149=createSprite(5,251,20,20)
var ball150=createSprite(25,251,20,20)
var ball151=createSprite(45,251,20,20)
var ball152=createSprite(65,251,20,20)
var ball153=createSprite(85,251,20,20)
var ball154=createSprite(105,251,20,20)
var ball155=createSprite(125,251,20,20)
var ball156=createSprite(145,251,20,20)
var ball157=createSprite(165,251,20,20)
var ball158=createSprite(185,251,20,20)
var ball159=createSprite(205,251,20,20)
var ball160=createSprite(225,251,20,20)
var ball161=createSprite(245,251,20,20)
var ball162=createSprite(265,251,20,20)
var ball163=createSprite(285,251,20,20)
var ball164=createSprite(305,251,20,20)
var ball165=createSprite(325,251,20,20)
var ball166=createSprite(345,251,20,20)
var ball167=createSprite(365,251,20,20)
var ball168=createSprite(385,251,20,20)
var ball169=createSprite(405,251,20,20)







function draw(){
 background("#6876ed")
  
  createEdgeSprites()
  playerball.bounce(edges)
  





if(playerball.isTouching(luck)){
  var winner=createSprite(200,200,400,400)
  winner.setAnimation("Drawing")
  winner.scale=0.3
  playerball.destroy()
  playSound("assets/category_achievements/vibrant_game_cartoon_positive_achievement_1.mp3")
}


  
  createEdgeSprites()
  playerball.bounce(edges)
  
 

if(keyDown(UP_ARROW)){
 playerball.y=playerball.y-3
}
if(keyDown(DOWN_ARROW)){
  playerball.y=playerball.y+3
}

if(keyDown(RIGHT_ARROW)){
  playerball.x=playerball.x+3
}

if(keyDown(LEFT_ARROW)){
  playerball.x=playerball.x-3
}
if(playerball.isTouching(ball150)){
 ball150.destroy()
}
  

if(playerball.isTouching(ball149)){
  ball149.destroy();
}
if(playerball.isTouching(ball2)){
  ball2.destroy();
}
if(playerball.isTouching(ball1)){
 ball1.destroy();
}
if(playerball.isTouching(ball3)){
  ball3.destroy();
}
if(playerball.isTouching(ball4)){
  ball4.destroy();
}
if(playerball.isTouching(ball5)){
  ball5.destroy();
}
if(playerball.isTouching(ball6)){

  ball6.destroy();
}
if(playerball.isTouching(ball7)){
  ball7.destroy();
}
if(playerball.isTouching(ball8)){
  ball8.destroy();
}
if(playerball.isTouching(ball9)){
  ball9.destroy();
}
if(playerball.isTouching(ball10)){
  ball10.destroy();
}
if(playerball.isTouching(ball11)){
  ball11.destroy();
}
if(playerball.isTouching(ball12)){
  ball12.destroy();
}
if(playerball.isTouching(ball13)){
  ball13.destroy();
}
if(playerball.isTouching(ball14)){
  ball14.destroy();
}
if(playerball.isTouching(ball15)){
  ball15.destroy();
}
if(playerball.isTouching(ball16)){
  ball16.destroy();
}
if(playerball.isTouching(ball17)){
  ball17.destroy();
}
if(playerball.isTouching(ball18)){
  ball18.destroy();
}
if(playerball.isTouching(ball19)){
  ball19.destroy();
}
if(playerball.isTouching(ball20)){
  ball20.destroy();
}
if(playerball.isTouching(ball21)){
  ball21.destroy();
}
if(playerball.isTouching(ball22)){
  ball22.destroy();
}
if(playerball.isTouching(ball23)){
  ball23.destroy();
}
if(playerball.isTouching(ball24)){
  ball24.destroy();
}
if(playerball.isTouching(ball25)){
  ball25.destroy();
}
if(playerball.isTouching(ball26)){
  ball26.destroy();
}
if(playerball.isTouching(ball27)){
  ball27.destroy();
}
if(playerball.isTouching(ball28)){
  ball28.destroy();
}
if(playerball.isTouching(ball29)){
  ball29.destroy();
}
if(playerball.isTouching(ball30)){
  ball30.destroy();
}
if(playerball.isTouching(ball31)){
  ball31.destroy();
}
if(playerball.isTouching(ball32)){
  ball32.destroy();
}
if(playerball.isTouching(ball33)){
  ball33.destroy();
}
if(playerball.isTouching(ball34)){
  ball34.destroy();
}
if(playerball.isTouching(ball35)){
  ball35.destroy();
}
if(playerball.isTouching(ball36)){
  ball36.destroy();
}
if(playerball.isTouching(ball37)){
  ball37.destroy();
}
if(playerball.isTouching(ball38)){
  ball38.destroy();
}
if(playerball.isTouching(ball39)){
  ball39.destroy();
}
if(playerball.isTouching(ball40)){
  ball40.destroy();
}
if(playerball.isTouching(ball41)){
  ball41.destroy();
}

if(playerball.isTouching(ball42)){
  ball42.destroy();
}
if(playerball.isTouching(ball43)){
  ball43.destroy()
}

  if(playerball.isTouching(ball44)){
  ball44.destroy();
}

if(playerball.isTouching(ball45)){
  ball45.destroy();
}
if(playerball.isTouching(ball46)){
  ball46.destroy();
}
if(playerball.isTouching(ball47)){
  ball47.destroy();
}
if(playerball.isTouching(ball48)){
  ball48.destroy();
}
if(playerball.isTouching(ball49)){
  ball49.destroy();
}
if(playerball.isTouching(ball50)){
  ball50.destroy();
}
if(playerball.isTouching(ball51)){
  ball51.destroy();
}
if(playerball.isTouching(ball52)){
  ball52.destroy();
}
if(playerball.isTouching(ball53)){
  ball53.destroy();
}
if(playerball.isTouching(ball54)){
  ball54.destroy();
}
if(playerball.isTouching(ball55)){
  ball55.destroy();
}
if(playerball.isTouching(ball56)){
  ball56.destroy();
}
if(playerball.isTouching(ball57)){
  ball57.destroy();
}

if(playerball.isTouching(ball58)){
  ball58.destroy();
}

if(playerball.isTouching(ball59)){
  ball59.destroy();
}

if(playerball.isTouching(ball60)){
  ball60.destroy();
}

if(playerball.isTouching(ball61)){
  ball61.destroy();
}


if(playerball.isTouching(ball62)){
  ball62.destroy();
}

if(playerball.isTouching(ball63)){
  ball63.destroy();
}

if(playerball.isTouching(ball64)){
  ball64.destroy();
}

if(playerball.isTouching(ball65)){
  ball65.destroy();
}
if(playerball.isTouching(ball66)){
  ball66.destroy();
}
if(playerball.isTouching(ball67)){
  ball67.destroy();
}

if(playerball.isTouching(ball68)){
  ball68.destroy();
}

if(playerball.isTouching(ball69)){
  ball69.destroy();
}
if(playerball.isTouching(ball70)){
  ball70.destroy();
}
if(playerball.isTouching(ball71)){
  ball71.destroy();
}
if(playerball.isTouching(ball72)){
  ball72.destroy();
}
if(playerball.isTouching(ball73)){
  ball73.destroy();
}
if(playerball.isTouching(ball74)){
  ball74.destroy();
}

if(playerball.isTouching(ball75)){
  ball75.destroy();
}

if(playerball.isTouching(ball76)){
  ball76.destroy();
}

if(playerball.isTouching(ball77)){
  ball77.destroy();
}

if(playerball.isTouching(ball78)){
  ball78.destroy();
}
if(playerball.isTouching(ball79)){
  ball79.destroy();
}


if(playerball.isTouching(ball80)){
  ball80.destroy();
}

if(playerball.isTouching(ball81)){
  ball81.destroy();
}

if(playerball.isTouching(ball82)){
  ball82.destroy();
}

if(playerball.isTouching(ball83)){
  ball83.destroy();
}

if(playerball.isTouching(ball84)){
  ball84.destroy();
}

if(playerball.isTouching(ball85)){
  ball85.destroy();
}

if(playerball.isTouching(ball86)){
  ball86.destroy();
}

if(playerball.isTouching(ball87)){
  ball87.destroy();
}

if(playerball.isTouching(ball88)){
  ball88.destroy();
}

if(playerball.isTouching(ball89)){
  ball89.destroy();
}

if(playerball.isTouching(ball90)){
  ball90.destroy();
}

if(playerball.isTouching(ball91)){
  ball91.destroy();
}

if(playerball.isTouching(ball92)){
  ball92.destroy();
}


if(playerball.isTouching(ball93)){
  ball93.destroy();
}

if(playerball.isTouching(ball94)){
  ball94.destroy();
}

if(playerball.isTouching(ball95)){
  ball95.destroy();
}

if(playerball.isTouching(ball96)){
  ball96.destroy();
}

if(playerball.isTouching(ball97)){
  ball97.destroy();
}

if(playerball.isTouching(ball98)){
  ball98.destroy();
}


if(playerball.isTouching(ball99)){
  ball99.destroy();
}

if(playerball.isTouching(ball100)){
  ball100.destroy();
}

if(playerball.isTouching(ball101)){
  ball101.destroy();
}
if(playerball.isTouching(ball102)){
  ball102.destroy();
}
if(playerball.isTouching(ball103)){
  ball103.destroy();
}

if(playerball.isTouching(ball104)){
  ball104.destroy();
}

if(playerball.isTouching(ball105)){
  ball105.destroy();
}

if(playerball.isTouching(ball106)){
  ball106.destroy();
}

if(playerball.isTouching(ball107)){
  ball107.destroy();
}

if(playerball.isTouching(ball108)){
  ball108.destroy();
}

if(playerball.isTouching(ball109)){
  ball109.destroy();
}

if(playerball.isTouching(ball110)){
  ball110.destroy();
}

if(playerball.isTouching(ball111)){
  ball111.destroy();
}

if(playerball.isTouching(ball112)){
  ball112.destroy();
}

if(playerball.isTouching(ball113)){
  ball113.destroy();
}

if(playerball.isTouching(ball114)){
  ball114.destroy();
}

if(playerball.isTouching(ball115)){
  ball115.destroy();
}

if(playerball.isTouching(ball116)){
  ball116.destroy();
}

if(playerball.isTouching(ball117)){
  ball117.destroy();
}

if(playerball.isTouching(ball118)){
  ball118.destroy();
}

if(playerball.isTouching(ball119)){
  ball119.destroy();
}

if(playerball.isTouching(ball120)){
  ball120.destroy();
}

if(playerball.isTouching(ball121)){
  ball121.destroy();
}

if(playerball.isTouching(ball122)){
  ball122.destroy();
}

if(playerball.isTouching(ball123)){
  ball123.destroy();
}

if(playerball.isTouching(ball124)){
  ball124.destroy();
}

if(playerball.isTouching(ball125)){
  ball125.destroy();
}

if(playerball.isTouching(ball126)){
  ball126.destroy();
}

if(playerball.isTouching(ball127)){
  ball127.destroy();
}

if(playerball.isTouching(ball128)){
  ball128.destroy();
}

if(playerball.isTouching(ball129)){
  ball129.destroy();
}

if(playerball.isTouching(ball130)){
  ball130.destroy();
}

if(playerball.isTouching(ball131)){
  ball131.destroy();
}

if(playerball.isTouching(ball132)){
  ball132.destroy();
}



if(playerball.isTouching(ball134)){
  ball134.destroy();
}

if(playerball.isTouching(ball135)){
  ball135.destroy();
}

if(playerball.isTouching(ball136)){
  ball136.destroy();
}

if(playerball.isTouching(ball137)){
  ball137.destroy();
}

if(playerball.isTouching(ball138)){
  ball138.destroy();
}
if(playerball.isTouching(ball139)){
  ball139.destroy();
}

if(playerball.isTouching(ball140)){
  ball140.destroy();
}

if(playerball.isTouching(ball141)){
  ball141.destroy();
}

if(playerball.isTouching(ball142)){
  ball142.destroy();
}

if(playerball.isTouching(ball143)){
  ball143.destroy();
}

if(playerball.isTouching(ball144)){
  ball144.destroy();
}

if(playerball.isTouching(ball145)){
  ball145.destroy();
}

if(playerball.isTouching(ball146)){
  ball146.destroy();
}

if(playerball.isTouching(ball147)){
  ball147.destroy();
}

if(playerball.isTouching(ball148)){
  ball148.destroy();
}

if(playerball.isTouching(ball149)){
  ball149.destroy();
}

if(playerball.isTouching(ball150)){
  ball150.destroy();
}

if(playerball.isTouching(ball151)){
  ball151.destroy();
}

if(playerball.isTouching(ball152)){
  ball152.destroy();
}

if(playerball.isTouching(ball153)){
  ball153.destroy();
}

if(playerball.isTouching(ball154)){
  ball154.destroy();
}

if(playerball.isTouching(ball155)){
  ball155.destroy();
}

if(playerball.isTouching(ball156)){
  ball156.destroy();
}

if(playerball.isTouching(ball157)){
  ball157.destroy();
}

if(playerball.isTouching(ball158)){
  ball158.destroy();
}

if(playerball.isTouching(ball159)){
  ball159.destroy();
}

if(playerball.isTouching(ball160)){
  ball160.destroy();
}

if(playerball.isTouching(ball161)){
  ball161.destroy();
}

if(playerball.isTouching(ball162)){
  ball162.destroy();
}

if(playerball.isTouching(ball163)){
  ball163.destroy();
}

if(playerball.isTouching(ball164)){
  ball164.destroy();
}

if(playerball.isTouching(ball165)){
  ball165.destroy();
}

if(playerball.isTouching(ball166)){
  ball166.destroy();
}

if(playerball.isTouching(ball167)){
  ball167.destroy();
}

if(playerball.isTouching(ball168)){
  ball168.destroy();
}

if(playerball.isTouching(ball169)){
  ball169.destroy();
}

if(playerball.isTouching(ball170)){
  ball170.destroy();
}


//bombs
if(playerball.isTouching(bomb1)){
  playerball.destroy();
    var gameover=createSprite(200,200,400,400)
  gameover.setAnimation("gameover")
  gameover.scale=0.3
  playSound("assets/category_alerts/comedy_game_over_1.mp3")
}
if(playerball.isTouching(bomb2)){
  playerball.destroy();
    var gameover=createSprite(200,200,400,400)
  gameover.setAnimation("gameover")
  gameover.scale=0.3
  playSound("assets/category_alerts/comedy_game_over_1.mp3")
}






// for(var i=0;i <=169 ; i++){
//   samp = "ball" + (i+1)
//   if(playerball.isTouching(samp)){
//     samp.destroy();
//   }
// }

drawSprites();
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
