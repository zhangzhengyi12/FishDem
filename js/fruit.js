/**
 * Created by zhang on 2017/4/27.
 */

var fruitObj = function(){
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.aneNumber =[];
    this.fruitType = [];
    this.fruit = new Image();
    this.blue = new Image();
    this.fruit.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png"
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNumber[i] = 0;
        this.spd[i] = Math.random() * 0.01 + 0.005;
        this.fruitType[i] = "";
        //
    }

    console.log("fruit com");
}

fruitObj.prototype.dead = function(i){
    this.alive[i] = false;
    if(this.fruitType == "blue"){
        mom.eatFruit += 400;
    }else {
        mom.eatFruit += 200;
    }
}


fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){

            if(this.l[i] <=12){
                var no = this.aneNumber[i];
                this.x[i] = ane.headx[no];
                this.y[i] = ane.heady[no];
                this.l[i] += this.spd[i] * deltaTime;
                ctx2.drawImage(this.fruitType[i]=="blue"?this.blue:this.fruit,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            }else {
                this.y[i] -= 7 * deltaTime * this.spd[i];

                ctx2.drawImage(this.fruitType[i]=="blue"?this.blue:this.fruit,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            }


            //提取XY信息并画出。

            if(this.y[i] <= 8){
                this.alive[i] = false; //宣告死亡
            }
        }//当某个元素是未激活状态的时候，不会把他画出来


    }
}

fruitObj.prototype.born = function(i){
    this.l[i] = 0;
    var aneId = parseInt(Math.random()*ane.num);
    this.aneNumber[i] = aneId;
    this.fruitType[i] = this.fruit;
    if(Math.random()<0.2){
        this.fruitType[i] = "blue";
    }
    //注意在随机果实之前重设一下果实类型，不然之前有过一次随机成功的复活还是特殊果实

    //首先确定依赖与哪个海葵
    // 然后提取该海葵的XY信息存放于果实对象的xy数值之中
}


function fruitMonitor(){
    var num = 0;
    for(var i=0;i<furit.num;i++){
        if(furit.alive[i]) num++;
    }

    if(num < 15 ){
        sendFruit() ;
        return;
    }
}//监视果实并调用发送果实

function sendFruit(){
    for(var i=0;i<furit.num;i++){
        if(!furit.alive[i]){
            furit.alive[i] = true; //设置为true才能正确调用draw函数
            furit.born(i);
            return;
        }
    }
} //激活并发送果实
