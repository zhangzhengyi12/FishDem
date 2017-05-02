/**
 * Created by zhang on 2017/5/1.
 */

var dataObj = function(){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
    this.rr = false;
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
    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = "white";
    ctx1.font = "30px Verdana"
    ctx1.textAlign = "center";
    ctx1.fillText("Score  "+this.score,w*0.5,50);

    if(this.gameOver){
        // ctx2.onclick = function(){
        //     // init();
        // }
        if(!this.rr){
            this.readyReset();
        }

        ctx1.font = "40px Verdana"
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx1.fillText("Game Over",w*0.5,h*0.5);
        this.alpha += deltaTime*0.0002;
        if(this.alpha > 1){
            this.alpha =1;
        } //逐步出现gameover字体
        // ctx1.restore();
    }
    ctx1.restore();
}

dataObj.prototype.addScore = function(){
    this.score += this.fruitNum*100*this.double;
    this.fruitNum = 0;
    this.double =1;
}

dataObj.prototype.readyReset = function(){
  //reset
    var btn = document.createElement("button");
    var all = document.getElementById("canvas-all");
    btn.style.width = 160 +"px";
    btn.style.height = 80 + "px";
    btn.style.position = "absolute";
    btn.style.left = canWidth/2 - 80 + "px";
    btn.style.top = canHight - 160 + "px";
    btn.style.zIndex = 20;
    btn.style.fontSize = 40 +"px";
    btn.style.color = "rgba(255,255,255,0.5)";
    btn.style.borderRadius = 5 + "px";
    btn.style.borderColor = "rgba(255,255,255,0)";
    btn.style.backgroundColor = "rgba(255,255,255,0)";
    var text = document.createTextNode("reset");
    btn.onclick = function(){
        init();
        var bt = document.getElementsByTagName("button");
        bt[0].parentNode.removeChild(bt[0]);
    }
    btn.appendChild(text);
    all.appendChild(btn);
    console.log(" GG");
    this.rr = true;
}