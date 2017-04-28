/**
 * Created by zhang on 2017/4/28.
 */

function momFruitsCollision(){
    for(var i=0;i<furit.num;i++){
        if(furit.alive[i]){
            var l = calLength2(furit.x[i],furit.y[i],mom.x,mom.y);
            if(l < 500){
                furit.dead(i);
            }

        }
    }
}

function momBabyCollision(){
   var  l = calLength2(baby.x,baby.y,mom.x,mom.y);
    if(l < 500){
        //加生命值;
        baby.heatlthy(mom.eatFruit); //传入具体的分数
    }
}