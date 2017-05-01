/**
 * Created by zhang on 2017/4/28.
 */

function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<furit.num;i++){
            if(furit.alive[i]){
                var l = calLength2(furit.x[i],furit.y[i],mom.x,mom.y);
                if(l < 500){
                    furit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount ++;
                    if(mom.momBodyCount > 7){
                        mom.momBodyCount = 7;
                    }
                    if(furit.fruitType[i] == "blue"){
                        data.double = 2;
                    }
                }

            }
        }
    }

}

function momBabyCollision(){
    if(data.gameOver){
        return;
    }
   var  l = calLength2(baby.x,baby.y,mom.x,mom.y);
    if(l < 800){
        //加生命值;
        //传入具体的分数
        if(data.fruitNum > 0){
            baby.babyBodyCount = 0;
        }

        data.addScore();
        data.reset();

    }
}