/**
 * Created by zhang on 2017/4/27.
 */
var parseTIme;
var aneObj = function(){
    this.x = [];
    this.len = [];
}

aneObj.prototype.num = 50;
aneObj.prototype.init =  function(){
  for(var i=0; i<this.num; i++){
    this.x[i] = i*16 + parseInt(Math.random()*10);
    this.len[i] = 400 + parseInt(Math.random()*50);
  }
  console.log("complete");
}
aneObj.prototype.draw = function(){

    ctx2.save();
    ctx2.globalAlpha = 0.6 ;
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = "12";
    ctx2.lineCap = "round";
    //提高性能

    for(var i=0; i<this.num; i++){
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHight);
        ctx2.lineTo(this.x[i],canWidth - this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore();
    //做一个截断处理
}