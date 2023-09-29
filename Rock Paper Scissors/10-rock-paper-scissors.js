

    


let score = JSON.parse(localStorage.getItem('pageScore'))|| {
    wins: 0, 
    losses: 0,
    ties: 0
};

updateScoreElement();


console.log(localStorage.getItem('pageScore'));


function playGame(playerMove)
{
    const computerMove=computerChoosing();

      
    let result='';

    if (playerMove==='Scissors'){

        if(computerMove==='Rock'){
            result='You Lose';
        }else if(computerMove==='Paper'){
            result='You Win';
        }
        else if(computerMove==='Scissors'){
            result='Tie';
        }
    }
    else if(playerMove==='Rock')
    {
        if(computerMove==='Rock'){
            result='Tie';
        }else if(computerMove==='Paper'){
            result='You Lose';
        }
        else if(computerMove==='Scissors'){
            result='You Win';
        }

    }
    else if (playerMove==='Paper')
    {
        if(computerMove==='Rock'){
            result='You Win';
        }else if(computerMove==='Paper'){
            result='Tie';
        }
        else if(computerMove==='Scissors'){
            result='You Lose';
        }
    }


    //update the score
    if (result==='You Win')
    score.wins++;
    if (result==='You Lose')
    score.losses++;
    if (result==='Tie')
    score.ties++;

   


    /*Convert the score object as a JSON string using JSON.stringify() 
    and associates it with the key 'pageScore'.
    MY Words: saving the score as a jason string in the local storage
    */
    localStorage.setItem('pageScore',JSON.stringify(score));

    //Update the score in the html page
    document.querySelector('.js-score').
    innerHTML=`wins: ${score.wins} , losses: ${score.losses} , ties : ${score.ties}`;


    //Printing the result in the consloe
    console.log(result);

    /*Pop up the result
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    wins: ${score.wins} , losses: ${score.losses} , ties : ${score.ties}`);   */

    document.querySelector('.js-Result').
    innerHTML=result;
    document.querySelector('.js-moves').
    innerHTML=`You
    <img src="../images/${playerMove}-emoji.png" class="move-icon">
    <img src="../images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    

}


function updateScoreElement()
{
  document.querySelector('.js-score').
innerHTML=`wins: ${score.wins} , losses: ${score.losses} , ties : ${score.ties}`;
 
}



function computerChoosing()
{
const randomNuber=Math.random();
let computerMove='';

//The comouter random choosing
if(randomNuber>=0 && randomNuber<1/3){
    computerMove='Rock';
}else if(randomNuber>=1/3 && randomNuber<2/3){
    computerMove='Paper';
}else if(randomNuber>=2/3 && randomNuber<1){
    computerMove='Scissors';}

//Printing the computer choice    
console.log(computerMove);
return computerMove;
}

