let homescorePoints = document.getElementById('score-home-el');
let guestscorePoints = document.getElementById('score-guest-el');
let statusEl = document.getElementById('status-el');
let homeScore = 0;
let guestScore = 0;

function addhomePoints(points){
    homeScore+=points;
    homescorePoints.textContent=homeScore;
    checkLeader();
}
function addguestPoints(points){
    guestScore+=points;
    guestscorePoints.textContent=guestScore;
    checkLeader();
}

function resetGame(){
    homeScore=0;
    guestScore=0;
    homescorePoints.textContent=0;
    guestscorePoints.textContent=0;
    checkLeader();
}

function checkLeader(){
    if (homeScore > guestScore){
        statusEl.textContent='Home Team is ahead!';
    }
    else if(guestScore > homeScore){
        statusEl.textContent='Opponent Team is ahead!';
    }
    else{
        statusEl.textContent='Both teams are equal'
    }

}

