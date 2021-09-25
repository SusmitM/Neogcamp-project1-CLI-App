  var readlineSync= require('readline-sync');
  const chalk= require('chalk');
  var score=0;
  var userName= readlineSync.question(chalk.rgb(255,255,0)("HEY!!! Whats Your Name:) "));

  console.log(chalk.cyan.italic("WELCOME "+userName)+"!!!");

  function highscore(){
    console.log(chalk.hex('#40E0D0')(("SUSMIT: 7")));
    console.log(chalk.hex('#40E0D0')(("ARIJIT: 5")));
  }

  function play(question,answer){
    var userAns= readlineSync.question(question);
    
    if(userAns.toUpperCase()===answer.toUpperCase()){
      console.log(chalk.rgb(64,255,64)("Yes you are RIGHT!!!!"));
      score = score + 1;

    }
    else{
      console.log(chalk.rgb(192,00,00)("Sorry you are WRONG!!!"));
      score =score - 1;
      
    }
    console.log("Your Current Score is: "+chalk.rgb(199,21,133).bold(score));
    console.log("------------------------");
  
    
    
  }

  var Questions=[{
    questions:"Where do I live?? ",
    answer:"Kolkata",
  },
  {

    questions:"What is my fav food? ", 
    answer:"Momos",
    },
    {
    questions:"Who's is my fav football player? ",
    answer:"Messi",
  },
  {
    questions:"What's my favourite movie? ",
    answer:"Tamasha",
  },
  {
    questions:"Which game helped me to survive the lockdown? ",
    answer:"Chess",
  },
  {questions:"Which is my dream destination to vist? ",
  answer:"North Korea",},
  {
    questions:"Do I have any siblings? ",
    answer:"No",
  },];

    

    for(var i=0;i<Questions.length;i++){
      var gameQues=Questions[i];
      play(gameQues.questions,gameQues.answer);
    }
    console.log(chalk.hex('#FF6040')("Well Played!!! "+userName.toUpperCase()+" you scored ")+chalk.rgb(199,21,133).bold(score));
    console.log(chalk.hex('#D0B090')("Check out the high scores, if you make it to the leaderboard, then ping me and I'll update it."));
    console.log(highscore());