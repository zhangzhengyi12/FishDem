/**
 * Created by zhang on 2017/4/26.
 */
addLoadEvent(game);

var bgPic = new Image();
var lastTime;
var deltaTime;
var canvas1,canvas2,ctx1,ctx2;

var ane;
var furit;
var canWidth,canHight;
var mom;
var baby;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var badyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra =[];
var momBodyBlue = [];

var data;
//初始化容器

function game(){
    init();
    //进行初始化画板操作

    //
     lastTime =Date.now();
     deltaTime = 0;
    //帧容器初始化

    gameloop();
    //开始循环
}
//游戏主函数

function init(){

    canvas1 = document.getElementById("canvas1"); //背景画布
    canvas2 = document.getElementById("canvas2"); //上层画布
    //初始化容器和获取canvas对象

    // if(canvas1.getContext && canvas2.getContext){
    ctx1 = canvas1.getContext("2d");
    ctx2 = canvas1.getContext("2d");
    // }else {
    //     return false;
    // }
    //检测
canvas1.addEventListener("mousemove",onMouseMove,false);
    //
    bgPic.src = "./src/background.jpg"
    //

    canHight = canvas1.height;
    canWidth = canvas1.width;

    ane = new  aneObj();
    ane.init();
    furit = new fruitObj();
    furit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();
    //初始化大鱼 海葵 果实
    mx = canWidth * 0.5;
    my = canHight * 0.5;
    
    for(var i=0;i<8;i++){
        babyTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
    }

    for(var i=0;i<2;i++){
        babyEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png";
    }

    for(var i=0;i<20;i++){
        badyBody[i] = new  Image();
        badyBody[i].src = "./src/babyFade" + i + ".png";
    }

    for(var i=0;i<8;i++){
        momTail[i] = new Image();
        momTail[i].src = "./src/bigTail" + i +".png";
    }

    for(var i=0;i<2;i++){
        momEye[i] = new Image();
        momEye[i].src = "./src/bigEye" + i + ".png";
    }

    data = new dataObj();

    for(var i=0;i<8;i++){
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "./src/bigSwim" + i + ".png";
        momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }
}



function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    if(deltaTime > 40){
        deltaTime = 40;
    }
    lastTime = now;
    //显示两帧检测

    drawBackground();
    ane.draw();
    fruitMonitor();
    furit.draw();
     // ctx2.clearRect(0,0,canWidth,canHight);
    mom.draw();
    baby.draw();
    momFruitsCollision();
    momBabyCollision();
    data.draw();
}

function onMouseMove(e){
    if(data.gameOver){
        return;
    }
    if(e.offsetX || e.layerY){
        mx = e.offsetX == undefined?e.layerX:e.offsetX;
        my = e.offsetY == undefined?e.layerY:e.offsetY;
        // console.log(mx + "/n" +my);
    }
}