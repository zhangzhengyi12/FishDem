/**
 * Created by zhang on 2017/5/2.
 */


var dustObj = function(){
    this.x = [];
    this.y = [];
    this.amp  = [];
    this.NO = [];

    this.alpha;
}

dustObj.prototype.num = 30;

dustObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.x[i] = Math.random()* canWidth;
        this.y[i] = Math.random()* canHight;
        this.amp[i] = Math.random()*15 + 20;
        this.NO[i] = Math.floor(Math.random()*7); // 0~6
        console.log(this.NO[i]);
    }
    this.alpha = 0;
}

dustObj.prototype.draw = function(){
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
     for(var i=0;i<this.num;i++){
         var no = this.NO[i];
         // console.log(no);
         ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i])
     }
}