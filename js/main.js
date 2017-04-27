/**
 * Created by zhang on 2017/4/26.
 */
addLoadEvent(game);

var bgPic = new Image();
var lastTime;
var deltaTime;
var canvas1,canvas2,ctx1,ctx2;

var canWidth,canHight;
//初始

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

    //
    bgPic.src = "./src/background.jpg"
    //

    canHight = canvas1.height;
    canWidth = canvas1.width;

}



function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    //显示两帧检测

    drawBackground();
}