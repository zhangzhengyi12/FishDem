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
    console.log(this.angle);
    ctx1.save();
    ctx1.translate(this.x, this.y); //将当前画布的原点设置为this.x this.y
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5 + 30,-this.bigTail.height*0.5);

    ctx1.restore()
}