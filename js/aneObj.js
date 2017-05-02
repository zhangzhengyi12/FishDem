/**
 * Created by zhang on 2017/4/27.
 */
var parseTIme;
var aneObj = function(){
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.alpha = 0;
    this.amp =[]; //振幅
    // this.len = [];
}

aneObj.prototype.num = 50;
aneObj.prototype.init =  function(){
    // var h = canvas1.height;
  for(var i=0; i<this.num; i++){
    this.rootx[i] = i*16 + Math.random()*20;
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHight - 200 + Math.random()*50;
    // this.[i] = 400 + parseInt(Math.random()*50);
      this.amp[i] = Math.random()*20 +50;

  }
  console.log("complete");
}
aneObj.prototype.draw = function(){
    this.alpha += deltaTime * 0.001
    var l = Math.sin(this.alpha); //正弦函数
    ctx2.save();
    ctx2.globalAlpha = 0.6 ;
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = "12";
    //提高性能
    // console.log(l);
    for(var i=0; i<this.num; i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHight);
        this.headx[i] = this.rootx[i] +l*this.amp[i]
        ctx2.quadraticCurveTo(this.rootx[i],canHight - 150,this.headx[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
    //做一个截断处理
}