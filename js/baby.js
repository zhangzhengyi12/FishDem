/**
 * Created by zhang on 2017/4/28.
 */

var babyObj = function(){
    this.x;
    this.y;
    this.babyEye = new  Image();
    this.babyBody = new  Image();
    this.babyTail = new  Image();
    this.angle;
    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
}
babyObj.prototype.init = function(){
    this.x = canWidth*0.5 - 50;
    this.y = canHight*0.5 + 50;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    this.babyTail.src = "./src/babyTail0.png";
    this.angle = 0;

}

babyObj.prototype.heatlthy = function(source){
    var sour = source / 100;
    var babyheal = baby.babyBodyCount;
    if(sour > babyheal){
        baby.babyBodyCount = 0;
    }else {
        baby.babyBodyCount -= sour;
    }
    mom.eatFruit = 0;
    // console.log(sour);
}

babyObj.prototype.draw = function(){

    this.x = lerpDistance(mom.x,this.x,0.01) ;
    this.y = lerpDistance(mom.y,this.y,0.01) ;
    //设置小雨的XY轴，绘画的时候动起来
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX)+Math.PI
    this.angle = lerpAngle(beta,this.angle,0.9)
    // ctx1.

    this.babyTailTimer += deltaTime;
    if(this.babyTailTimer > 50){

        this.babyTailCount = (this.babyTailCount +1) % 8;
        this.babyTailTimer %= 50;
    }
    //这里的两个求莫运算的要求和实现都是不同的
    //第一个的目的是从0到8不断循环 所以会无限的向上加 但不影响循环
    //第二个每当值为50也就是出来的莫是0 也就是归零；

    //baby Eye
    this.babyEyeTimer += deltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval){
        this.babyEyeCount = (this.babyEyeCount +1) % 2;
        // console.log(this.babyEyeCount);
        this.babyEyeTimer %= this.babyEyeInterval;
        if(this.babyEyeCount == 0){ //罪魁祸首居然是一个等于号 Count永远等于0
            this.babyEyeInterval = Math.random()*1500 + 1000;
        }else {
            this.babyEyeInterval = 200;
        }
    }

    //body
    this.babyBodyTimer += deltaTime;
    if(this.babyBodyTimer > 300){
        this.babyBodyCount++;
        if(this.babyBodyCount > 19){
            this.babyBodyCount = 19;
        }
        this.babyBodyTimer %= 300;
        // console.log(this.babyBodyCount);

    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var babyCount = this.babyTailCount;
    ctx1.drawImage(babyTail[babyCount],-babyTail[babyCount].width*0.5+22,-babyTail[babyCount].height*0.5);
    var babyBodyCount = this.babyBodyCount;
    ctx1.drawImage(badyBody[babyBodyCount],-badyBody[babyBodyCount].width*0.5,-badyBody[babyBodyCount].height*0.5);
    var babyEyeCount = this.babyEyeCount;
    // console.log(babyEyeCount);
    ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
    ctx1.restore();
}
