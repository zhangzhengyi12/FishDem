/**
 * Created by zhang on 2017/5/1.
 */

var dataObj = function(){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}

dataObj.prototype.reset = function(){
    this.fruitNum = 0;
    this.double = 1;
    mom.momBodyCount = 0;

    //每次喂食执行重置工作
}

dataObj.prototype.draw = function(){
    var w = canvas1.width;
    var h = canvas1.height;

    ctx1.fillStyle = "white";
    ctx1.font = "20px Verdana"
    ctx1.textAlign = "center";
    ctx1.fillText("score"+this.score,w*0.5,h-150);

    if(this.gameOver){
        ctx1.font = "40px Verdana"
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("Game Over",w*0.5,h*0.5);
        this.alpha += 0.005;
    }
}

dataObj.prototype.addScore = function(){
    this.score += this.fruitNum*100*this.double;
    this.fruitNum = 0;
    this.double =1;
}