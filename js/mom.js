/**
 * Created by zhang on 2017/4/27.
 */

var momObj = function(){
    this.x;
    this.y;
    this.angle;
    this.bigEye = new  Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.eatFruit = 0;

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 0;

    this.momBodyCount = 0;
}

momObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHight * 0.5;
    this.angle = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png"
}

momObj.prototype.draw = function(){
    this.x = lerpDistance(mx,this.x,0.1) ; //这个函数的目的是 设置this.x为目标移动距离之间的一个比较小的数值
    this.y = lerpDistance(my,this.y,0.1);//和写方式差距在于 他的方法是从目标点开始计算，且系数是0.9 而我自己写的是从当前位置开始计算 系数为0.1

    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY,deltaX)+Math.PI
    // console.log(beta);
    this.angle = lerpAngle(beta,this.angle,0.9)
    // console.log(this.angle);

    this.momTailTimer += deltaTime;
    if(this.momTailTimer > 50){
        this.momTailCount = (this.momTailCount +1) % 8;
        this.momTailTimer %= 50;
    }

    this.momEyeTimer += deltaTime;

    // console.log(deltaTime);
    // console.log(this.momEyeTimer + "_" + this.momEyeInterval);
    if(this.momEyeTimer > this.momEyeInterval){
        // console.log("go");
        this.momEyeCount = (this.momEyeCount +1 ) %2;
        if(this.momEyeTimer > this.momEyeInterval) this.momEyeTimer = 0;
        if(this.momEyeCount == 0){
            this.momEyeInterval = 1500 + Math.random()*1000;
        }else {
            this.momEyeInterval = 300;
        }
    }
    ctx1.save();
    ctx1.translate(this.x, this.y); //将当前画布的原点设置为this.x this.y
    ctx1.rotate(this.angle);
    var momBodyCount = this.momBodyCount;
    if(data.double  == 1){
        ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
    }else {
        ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
    }
    var EyeCount = this.momEyeCount;
    ctx1.drawImage(momEye[EyeCount],-momEye[EyeCount].width*0.5,-momEye[EyeCount].height*0.5);
    var count = this.momTailCount;
    ctx1.drawImage(momTail[count],-momTail[count].width*0.5 + 30,-momTail[count].height*0.5);

    ctx1.restore()
}