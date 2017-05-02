/**
 * Created by zhang on 2017/5/2.
 */

var holaObj = function(){
    this.x=[];
    this.y=[];
    this.alive = [];
    this.r = [];
}

holaObj.prototype.num = 5;

holaObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;
    }
}

holaObj.prototype.draw = function(){
    ctx1.save();
    ctx1.lineWidth = 3;
    ctx1.strokeStyle = "rgba(255,255,255," + alpha + ")";
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            // console.log("draw");
           // //draw

            this.r[i] += deltaTime * 0.1;
             var alpha = 1 - this.r[i] / 100;
            // console.log(alpha);
            if(this.r[i] > 100){
                this.alive[i] = false;
                continue;
            }
            ctx1.lineWidth = 3;
            ctx1.strokeStyle = "rgba(203,91,0," + alpha + ")";
            ctx1.shadowBlur = 10;
            ctx1.shadowColor = "white";
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx1.closePath();
            ctx1.stroke();
        }
    }

    ctx1.restore();
}


holaObj.prototype.born = function(x,y){
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            //born
            this.alive[i] = true;
            this.x[i] = x ;
            this.y[i] = y ;
            this.r[i] = 10;
            // console.log("born");
            return;
        }
    }
}
